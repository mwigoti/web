/**
 * Client-side Cookie & URL Routing Utilities for TerraSat Impact
 * Supports cookie-backed preference tracking, clean paths (/terrafarm, /newis),
 * popstate synchronization, and fallback compatibility in preview iframes.
 */

export type AppView = 'home' | 'terrafarm' | 'newis';

const COOKIE_NAME = 'terra_last_view';
const COOKIE_MAX_AGE_DAYS = 30;

/**
 * Get cookie by name
 */
export function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
  return match ? decodeURIComponent(match[3]) : null;
}

/**
 * Set cookie with expiration and SameSite security
 */
export function setCookie(name: string, value: string, days = COOKIE_MAX_AGE_DAYS): void {
  if (typeof document === 'undefined') return;
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = '; expires=' + date.toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}${expires}; path=/; SameSite=Lax`;
}

/**
 * Determine the initial view based on:
 * 1. URL Pathname (/terrafarm, /newis)
 * 2. URL Hash (#terra-farm, #terrafarm, #newis)
 * 3. URL Query Parameter (?view=terrafarm, ?view=newis)
 * 4. Stored cookie 'terra_last_view'
 * 5. Default to 'home'
 */
export function getInitialView(): AppView {
  if (typeof window === 'undefined') return 'home';

  try {
    const pathname = window.location.pathname.toLowerCase();
    if (pathname.includes('/terrafarm') || pathname.includes('/terra-farm')) {
      return 'terrafarm';
    }
    if (pathname.includes('/newis')) {
      return 'newis';
    }

    const hash = window.location.hash.toLowerCase();
    if (hash.includes('terra-farm') || hash.includes('terrafarm')) {
      return 'terrafarm';
    }
    if (hash.includes('newis')) {
      return 'newis';
    }

    const urlParams = new URLSearchParams(window.location.search);
    const viewParam = urlParams.get('view')?.toLowerCase();
    if (viewParam === 'terrafarm' || viewParam === 'terra-farm') {
      return 'terrafarm';
    }
    if (viewParam === 'newis') {
      return 'newis';
    }

    // Check stored cookie
    const savedCookie = getCookie(COOKIE_NAME);
    if (savedCookie === 'terrafarm' || savedCookie === 'newis') {
      return savedCookie;
    }
  } catch (err) {
    console.warn('Could not parse route from URL/cookie:', err);
  }

  return 'home';
}

/**
 * Update the browser URL with pushState and persist the active view in cookies.
 * Works seamlessly across both clean paths and hash-based anchor destinations.
 */
export function updateRoute(view: AppView, anchor?: string): void {
  // 1. Save view in cookie
  setCookie(COOKIE_NAME, view);

  if (typeof window === 'undefined') return;

  try {
    let newPath = '/';
    let newHash = '';

    if (view === 'terrafarm') {
      newPath = '/terrafarm';
      newHash = anchor ? (anchor.startsWith('#') ? anchor : `#${anchor}`) : '#overview';
    } else if (view === 'newis') {
      newPath = '/newis';
      newHash = anchor ? (anchor.startsWith('#') ? anchor : `#${anchor}`) : '#overview';
    } else {
      newPath = '/';
      newHash = anchor ? (anchor.startsWith('#') ? anchor : `#${anchor}`) : '#top';
    }

    // Try HTML5 History pushState
    const targetUrl = `${newPath}${newHash}`;
    window.history.pushState({ view, anchor }, '', targetUrl);
  } catch {
    // If pushState is restricted (e.g. cross-origin iframe security), gracefully fallback to hash
    try {
      const hashFallback = view === 'home' ? (anchor || '#top') : (view === 'terrafarm' ? '#terra-farm' : '#newis');
      window.location.hash = hashFallback;
    } catch {
      // no-op
    }
  }
}
