# Rahgozar Web — UI Kit

High-fidelity recreation of the Rahgozar web product, built from the two screenshots in `uploads/` and the brand spec in the root `README.md`. **Persian-first, RTL.**

No codebase or Figma was provided — these components are a visual-only rebuild, not the production implementation.

## Files

| File | What it is |
|---|---|
| `index.html` | Interactive prototype host. Loads React + Babel and wires routes. |
| `app.jsx` | Top-level app shell — routing between Home / Country / Sign-in. |
| `TopNav.jsx` | Sticky navigation, RTL, with blur backdrop. |
| `HomePage.jsx` | Marketing landing — hero + country directory grid. |
| `CountryPage.jsx` | Wiki page for a single country (Finland modelled). |
| `CountryTile.jsx` | Flag + name card used in the directory grid. |
| `SignInModal.jsx` | Modal for *ورود* — email + password. |
| `Roadmap.jsx` | Placeholder page for the *نقشه‌راه* tab (no screenshot supplied). |
| `Button.jsx`, `Field.jsx`, `Chip.jsx`, `Badge.jsx` | Atomic primitives. |
| `Icons.jsx` | Lucide-style stroke icons used in the kit. |
| `countries.js` | Country directory data — flags + Persian names. |

## Click-through script

1. Land on the home page — read the hero, scan the country grid.
2. Click any country tile → routes to its wiki page (only Finland has detail content; others show a graceful empty state).
3. Use the chip row at the top of the country page to scroll between sections.
4. Click *ورود* in the top nav → sign-in modal opens, dismissable with × or backdrop click.
5. Click the wordmark or *ویکی‌کشور* to return home.

## Known cuts

- No real auth, real data fetching, or real routing.
- *آزمون* and *کامیونیتی‌ها* are nav-only — no destination pages.
- Country pages only have populated content for Finland; the rest show a calm empty state by design (matches what an early-stage product directory would look like).
