# The Wave Explorer — Premium Editorial Redesign

This version refreshes the existing featured-beaches prototype with a premium travel-magazine visual direction while retaining its existing HTML/CSS/JavaScript structure and interaction hooks.

## What's changed
- New editorial typography pairing (Playfair Display + DM Sans)
- Refined warm ivory, deep-ocean, and muted sea-glass palette
- Larger cinematic hero treatment and magazine-style edition details
- More spacious introduction and destination section hierarchy
- Cleaner destination cards, filters, forms, map, guide cards, and footer
- Responsive layouts for desktop, tablet, and mobile

## Existing prototype functionality retained
- Eight featured Philippine beach destinations
- Search and Luzon / Visayas / Mindanao filters
- Leaflet map and destination markers
- Destination details, galleries, demo reviews, and saved destinations
- Browser-only demo profile and admin dashboard
- Budget estimator and English / Filipino toggle

## Important prototype limitations
- Authentication is still a local demo profile; Supabase has not been connected.
- Reviews and saved destinations are browser-local, not shared online.
- Nearby accommodation/restaurant entries are sample placeholders and must be verified or replaced before public launch.
- Map positions are approximate.
- Images are remote Unsplash image URLs and are illustrative; verify licensing, attribution requirements, and destination accuracy before production use.
- The admin shortcut is a demo only and is not secure.

## Run locally
Open `index.html` with VS Code Live Server. Internet access is needed for Google Fonts, remote images, and Leaflet map tiles.
