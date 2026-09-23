# Partner Logo Upload & Customization Guide

You can easily upload `.jpg`, `.webp`, `.png`, or `.svg` files to customize the partner logos displayed in the continuous revolving carousel on the homepage.

---

### Option 1: Direct File Placement in `public/assets/partners/` (Recommended & Easiest)
Put your `.jpg` or `.webp` files in `public/assets/partners/`:
- `public/assets/partners/kenya-space-agency.webp` (or `.jpg`)
- `public/assets/partners/university-of-nairobi.webp` (or `.jpg`)
- `public/assets/partners/4d-innovation.webp` (or `.jpg`)
- `public/assets/partners/expertise-france.webp` (or `.jpg`)
- Or any new partner, e.g. `public/assets/partners/my-new-partner.webp`

Any file inside `public/` is served directly at `/assets/partners/<filename>`.

---

### Option 2: Placing in `src/assets/partners/`
You can also place your files in `src/assets/partners/` and import them directly into `src/components/HeroPartnersCarousel.tsx`:

```tsx
import ksaLogo from '../assets/partners/kenya-space-agency.webp';
import uonLogo from '../assets/partners/university-of-nairobi.jpg';
```

TypeScript definitions for `.jpg`, `.jpeg`, `.png`, `.webp`, and `.svg` are pre-configured in `src/vite-env.d.ts`.
