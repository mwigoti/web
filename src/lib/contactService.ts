/**
 * Contact and Inquiry Email Delivery Utility
 * 
 * Supports two seamless transmission mechanisms:
 * 1. FormSubmit.co / Web3Forms direct background API POST to terrasat.impact@gmail.com
 * 2. Formatted client-side mailto: fallback with pre-filled subject, body, and partner details
 */

export interface ContactInquiryPayload {
  name: string;
  email: string;
  organization?: string;
  solution?: string;
  role?: string;
  location?: string;
  priority?: string;
  message?: string;
}

export const TARGET_EMAIL = 'terrasat.impact@gmail.com';

/**
 * Send inquiry directly to terrasat.impact@gmail.com.
 * Uses FormSubmit AJAX endpoint (free, no registration required, instant delivery to recipient).
 */
export async function sendInquiryEmail(data: ContactInquiryPayload): Promise<{ success: boolean; message?: string }> {
  try {
    const formattedData = {
      _subject: `[TerraSat Impact Inquiry] ${data.solution || 'Platform Briefing'} - ${data.name} (${data.organization || 'General'})`,
      _replyto: data.email,
      name: data.name,
      email: data.email,
      organization: data.organization || 'Not provided',
      solution: data.solution || 'TerraSat Enterprise Platform',
      role: data.role || 'Partner / Stakeholder',
      location: data.location || 'East Africa',
      priority: data.priority || 'General Inquiry',
      message: data.message || `Inquiry submitted for ${data.solution || 'TerraSat Impact solutions'} by ${data.name}.`,
      _template: 'table',
      _captcha: 'false',
    };

    const response = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formattedData),
    });

    if (response.ok) {
      return { success: true };
    }
    return { success: false, message: 'Server responded with error' };
  } catch (err: any) {
    console.warn('Background submission note, mailto fallback available:', err);
    return { success: false, message: err?.message || 'Network error' };
  }
}

/**
 * Generates a pre-filled mailto: link directed to terrasat.impact@gmail.com
 */
export function openMailClientFallback(data: ContactInquiryPayload): void {
  const subject = encodeURIComponent(`[TerraSat Impact Briefing] ${data.solution || 'Platform Inquiry'} - ${data.name}`);
  const body = encodeURIComponent(
`Hello TerraSat Impact Team,

I would like to request a technical briefing and demonstration.

Details:
- Full Name: ${data.name}
- Work Email: ${data.email}
- Organization: ${data.organization || 'N/A'}
- Solution Focus: ${data.solution || 'Terra Farm / NEWIS'}
${data.role ? `- Role: ${data.role}\n` : ''}${data.location ? `- Location / Country: ${data.location}\n` : ''}${data.priority ? `- Priority Area: ${data.priority}\n` : ''}
${data.message ? `Notes: ${data.message}\n` : ''}
Best regards,
${data.name}
${data.email}`
  );

  window.location.href = `mailto:${TARGET_EMAIL}?subject=${subject}&body=${body}`;
}
