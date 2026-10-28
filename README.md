> **Status:** ✅ Live at https://turgutlar-oto.com — Vercel SPA. Active maintenance.

# Turgutlar Oto Tamir Merkezi

Corporate website for Turgutlar Oto Tamir ve Hasar Onarım Merkezi, an automotive repair and bodywork centre in Seyhan, Adana.

## Tech Stack

- **Framework:** React 19 + Vite 6
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Motion (framer-motion)
- **Icons:** Lucide React
- **Deployment:** Vercel (static SPA)

## Local Development

```bash
npm install
npm run dev      # Development server (http://localhost:3000)
npm run build    # Production build (dist/)
npm run preview  # Preview the production build locally
npm run lint     # TypeScript type check
```

## Project Structure

```
src/
├── components/        # Reusable UI components
├── App.tsx            # Root application
├── main.tsx           # React entry point
├── index.css          # Tailwind v4 theme and global styles
├── data.ts            # Static data source (services, reviews, FAQ, contact)
└── types.ts           # TypeScript interfaces
```

## Deployment (Vercel)

The project is configured for Vercel as a static SPA. All routes are rewritten to `index.html`
(via `vercel.json`). Pushing to the release branch is enough; Vercel handles the rest.

## Updating Contact Details

All contact information — phone, address, opening hours, and email — is managed from a
**single source** (`CONTACT_INFO` and `WORKING_HOURS` in `src/data.ts`). When a value changes,
the header, hero, footer, WhatsApp button, repair status query, and the JSON-LD schema in
`index.html` are updated automatically.
