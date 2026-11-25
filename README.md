# The Wave Explorer

A responsive Philippine beach discovery website built with HTML, CSS, and vanilla JavaScript, prepared for GitHub Pages hosting.

## Run locally
- Open `index.html` in a modern browser, or run `python -m http.server 8000` in this folder and open `http://localhost:8000`.
- Internet access is needed for Google Fonts, Unsplash images, Leaflet, and CARTO / OpenStreetMap map tiles.

## Current prototype features
- Minimal Home · Explore · About navigation
- English / Filipino toggle for the main landing-page content (language choice is remembered in the browser)
- Beach directory with famous destinations shown first (Boracay, El Nido, Coron, Siargao, Panglao, Bantayan, Pagudpud, Puerto Galera), plus search and regional filters
- Destination detail panels, photo galleries, and clickable map markers
- Community review demo with ratings, text, and an optional local photo
- Saved destinations in browser localStorage
- Trip budget estimator with clearly stated illustrative assumptions
- Local demo member profile
- Demo admin dashboard: Ctrl+Shift+A (Windows/Linux)

## GitHub Pages and backend setup
See `PHASE_3_SETUP.md` for GitHub Pages publishing steps and Supabase setup. The `supabase/schema.sql` file is a starter schema; `supabase-config.example.js` shows the expected public browser configuration format.

## Important limitations
- Sign-in/profile is still a local demo, not real email/password authentication.
- Reviews and optional photos are stored only in the current browser; they do not sync across visitors.
- The admin shortcut is not secure and must not be used as production access control.
- Supabase schema and storage setup are not yet connected to the front end.
- Nearby lodging/restaurant entries are sample placeholders, not verified business recommendations.
- Map coordinates are indicative and should be verified before relying on them for navigation.
- The sample beach directory is a starting set, not a verified exhaustive directory of all Philippine beaches.
- Budget estimates are planning illustrations, not live quotes.

Do not publish Supabase service-role keys or other secrets in a GitHub Pages repository. Use Row Level Security and trusted server-side admin assignment.

## Featured destination order
The homepage directory starts with Boracay White Beach, Nacpan Beach (El Nido), Banul Beach (Coron), Cloud 9 (Siargao), Alona Beach (Panglao), Kota Beach (Bantayan), Saud Beach (Pagudpud), and White Beach (Puerto Galera). Other sample destinations follow. Destination images are illustrative stock imagery and should be replaced with verified, properly licensed destination photos before public promotion.
