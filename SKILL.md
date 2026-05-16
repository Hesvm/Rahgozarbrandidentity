---
name: rahgozar-design
description: Use this skill to generate well-branded interfaces and assets for Rahgozar (رهگذر), the Persian-first immigration discovery platform — either for production or throwaway prototypes / mocks / decks. Contains essential design guidelines, colors, type, fonts, brand assets, and a UI kit for prototyping.
user-invocable: true
---

# Rahgozar Design Skill

Read the root **`README.md`** in this skill first — it carries the content tone, visual foundations, and iconography rules. Then skim **`colors_and_type.css`** for the actual token names you'll reference, and **`ui_kits/web/`** for ready-made components you can lift.

## Quick reminders

- **Persian-first, RTL.** Set `dir="rtl"` and `lang="fa"` on every artifact. Mirror layouts with logical properties.
- **One brand color**, muted oceanic teal. The default page background is **warm stone (`#FAF8F4`)**, never pure white.
- **Type:** Ravi (Persian, self-hosted in `fonts/`), Inter (Latin). Loaded by `colors_and_type.css`.
- **No emoji** except country-flag emoji in the country directory.
- **Icons:** Lucide-style stroke set, 1.75 stroke, `currentColor`. Inline SVG, not an icon font.
- **Motion:** drifting, never springy. `cubic-bezier(0.22, 0.61, 0.36, 1)` is the default ease.
- **Corners:** never square. Pill for buttons/chips, 14–20px radius for cards.
- **Shadows:** soft and low. `shadow-1` to `shadow-2` is the everyday range; never go above `shadow-3` in product UI.

## What to produce

- **Visual artifacts (slides, mocks, throwaway prototypes):** copy `colors_and_type.css`, the `assets/`, and the `fonts/` folder out into a static HTML file, link the CSS, and use the tokens.
- **Production code:** read the token values out of `colors_and_type.css`, mirror the visual rules, and reference the UI kit components in `ui_kits/web/` as your visual reference.
- **If the user invokes this skill without other guidance:** ask what they want to build, ask 5–10 focused questions (audience, surface, mood, variants), and only then start designing. Output HTML artifacts by default.

## Voice in one sentence

> *“A beautifully designed compass for people redesigning their future.”* — calm, exact, never preachy. Short sentences. Specifics over claims. No agency-clichés, no startup decoration.

## Open substitutions / asks

- Photography direction is *cinematic documentary realism* — no stock images ship with this kit. Ask the user for hero imagery before building marketing pages.
- Lucide icons are used as a stand-in if Rahgozar has an internal icon set; ask the user.
