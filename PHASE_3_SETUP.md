# The Wave Explorer — Phase 3 setup

## What's included in this iteration
- Existing prototype retained and refined.
- Minimal navigation: Home · Explore · About.
- Visible EN / FIL toggle for the main landing-page content; preference is remembered in this browser.
- Updated map tiles with a softer Voyager cartographic style and custom ocean-colour markers.
- Clicking a map marker opens its destination popup; the destination link opens the full details panel.
- Optional review photo in the local prototype (image must be 2 MB or smaller). It is stored only in the current browser for now.
- Supabase starter SQL and safe configuration template.

## GitHub Pages publishing
1. Create a GitHub repository for the project.
2. Upload the contents of this folder to the repository root (so `index.html` is at the root).
3. In GitHub, open **Settings → Pages**.
4. Under Build and deployment, choose **Deploy from a branch**, select your main branch and `/ (root)`, then Save.
5. Wait for the Pages deployment to finish. The published URL will appear in the Pages settings.

## Supabase setup (before real accounts and shared data)
1. Create a Supabase project with help from a trusted adult if account or billing setup is required.
2. Open the SQL Editor and run `supabase/schema.sql`.
3. In Project Settings → API, copy the Project URL and the publishable/anon browser key.
4. Copy `supabase-config.example.js` to `supabase-config.js` and fill in those two values.
5. Add `supabase-config.js` to `.gitignore` if you prefer not to publish project configuration. The publishable/anon key is designed for browser use, but security must come from correct Row Level Security policies. Never expose a `service_role` key.
6. Create a private Storage bucket named `review-photos`, then configure upload/read policies so signed-in users can upload only to their own user folder. Do not enable public writes.
7. Add a trusted admin role through a secure, server-side process. Never make admin status selectable from the public website.

## Important status note
This is still the front-end prototype plus backend setup foundation. The current sign-in/profile demo and review data remain browser-local. The Supabase schema is a starter foundation, not a completed auth integration. Real email/password sign-in, cross-device reviews, moderated photo uploads, and a production admin dashboard require the next integration phase and testing of the database policies.

## Directory data quality
The sample destination set is a starting point, not a complete list of every Philippine beach. Add destinations gradually after validating names, coordinates, access rules, fees, local guidance, and image permissions. Map pins in this prototype are indicative and should be checked before publishing as travel directions.

## Featured beach update
The directory is now ordered to show well-known destinations first: Boracay White Beach, Nacpan Beach in El Nido, Banul Beach in Coron, Cloud 9 in Siargao, Alona Beach in Panglao, Kota Beach in Bantayan, Saud Beach in Pagudpud, and White Beach in Puerto Galera. This is a curated starting selection, not a ranking. Image assets are illustrative stock imagery and must be replaced with destination-verified, licensed photos before treating them as actual beach photographs.
