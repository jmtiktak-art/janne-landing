# janne-landing

Landing page for Janne's AI/automation offer. Built with Next.js + Tailwind, deployed on Vercel.

## To update content

All content lives in `app/page.tsx`. Open that file and edit the text directly — Vercel redeploys automatically when you push to `main`.

**To update the booking URL** (once Google Calendar is set up):
- Open `app/page.tsx`
- Find the `BOOKING_URL` constant at the top
- Replace it with your Google Calendar appointment booking link

## Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Connected to Vercel — push to `main` and it deploys automatically.
