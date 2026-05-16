# Rahgozar — Design System

> رهگذر — *“A beautifully designed compass for people redesigning their future.”*

Rahgozar (lit. *wayfarer / passer-by*) is a discovery platform helping people in Iran explore realistic immigration pathways around the world. It is **not** a visa agency, a consulate's portal, or a corporate consultancy — it is a calm, editorial companion for a life decision.

## What this system is for

- Anchoring brand expression — type, color, motion, voice — across product, marketing, and content.
- Giving designers + builders ready-made components that already feel like Rahgozar.
- Providing a SKILL package (`SKILL.md`) so coding agents can produce on-brand artifacts in one prompt.

## Product surfaces

Based on the screenshots provided, the product is currently a **Persian-first responsive web platform** with these primary surfaces:

- **Marketing / home** — hero, CTAs (*شروع رایگان* / *کامیونیتی‌ها*), country directory grid.
- **Country guide (ویکی‌کشور)** — long-form editorial pages per destination with chip-based section nav and soft-fog content blocks.
- **Roadmap (نقشه‌راه)**, **Communities (کامیونیتی‌ها)**, **Quiz (آزمون)** — referenced in nav, not yet seen.

There is no separate mobile app surface in the provided materials. The web product is responsive and RTL-first.

## Sources used

- `uploads/Logo.svg` — brand mark (224×224 rounded square, teal gradient, embedded paper-boat raster).
- `uploads/Logo & Logotype.svg` (renamed locally `Logo-Logotype.svg`) — full lockup with Persian wordmark in path data.
- `uploads/Screenshot 2026-05-16 at 14.42.07.png` — marketing homepage.
- `uploads/Screenshot 2026-05-16 at 14.43.28.png` — country wiki page (Finland / فنلاند).

No codebase, Figma file, or written copy doc was provided. Visual rules below are derived from those four assets + the brief.

---

## Index

| File / Folder | What's in it |
|---|---|
| `README.md` | This file. |
| `SKILL.md` | Cross-compatible Claude Code Skill — read to act as a Rahgozar designer. |
| `colors_and_type.css` | All CSS tokens — colors, type scale, spacing, radii, shadows, motion. |
| `assets/` | Logos, paper-boat mark, brand SVGs. |
| `fonts/` | Notes on Persian webfonts (currently Google Fonts CDN). |
| `preview/` | Small HTML cards that render in the Design System tab. |
| `ui_kits/web/` | React/JSX recreation of the Rahgozar web product. |

---

## CONTENT FUNDAMENTALS

Rahgozar speaks the way a thoughtful older sibling would — calm, exact, never preachy.

### Language
- **Primary: Persian (Farsi), RTL.** English is secondary; appears only as a quiet caption alongside Persian (e.g. *فنلاند* / `Finland`).
- Persian style: **conversational, modern, educated.** No bureaucratic register, no nostalgic literary Persian, no street slang.

### Person & address
- Implicit *you* (the listener) — Persian verb endings carry it without pronouns. Avoid the formal *شما*-heavy phrasing of govt copy.
- **We** (*ما*) only when speaking as Rahgozar collectively, and rarely.
- No first-person singular (*من*) — never makes it about the writer.

### Tone & cadence
- **Short sentences.** Editorial rhythm — one idea per line where possible.
- **Specifics over claims.** Real cost-of-living figures, named visa categories, concrete city names — never "great opportunities await".
- **Bold the noun, not the verb.** Pull-out terms (country names, visa types, key totals) get `<strong>` weight; everything else stays calm.
- **Use commas and semicolons generously** for breath. Persian copy in the wiki uses `;` to separate clauses — preserve that.

### Casing & punctuation
- Persian has no case — use **font weight** for emphasis, not ALL-CAPS or color.
- Latin words inside Persian copy use sentence case (`Finland`, not `FINLAND`).
- Use **Persian punctuation glyphs** (`،` not `,`; `؛` not `;`; `؟` not `?`).
- ZWNJ (`‌`) is mandatory inside compound Persian words (*مهاجران ایرانی*, *ویکی‌کشور*).
- Numerals: Latin (`1, 2, 3`) is acceptable when adjacent to English; Persian (`۱، ۲، ۳`) inside fully-Persian copy. **Be consistent within a paragraph.**

### Vocabulary do/don't
- **Use:** *مسیر، راهنما، گزینه، انتخاب، آرامش، شفافیت* (path, guide, option, choice, calm, clarity).
- **Avoid:** *فرصت طلایی، رؤیای مهاجرت، بهترین، تضمینی* (golden opportunity, immigration dream, best, guaranteed) — agency-clichés.
- **Avoid:** alarmist visa-warning language; ICE/border anxiety triggers.

### Emoji & decoration
- **Country flags** as inline emoji (`🇫🇮 فنلاند`) — **allowed and used** in the country directory; they're warm and instantly readable.
- **No other emoji** in product copy. No 🚀✨🎯 startup decoration.
- No unicode-arrow CTAs (`→`, `←`) — use a proper SVG chevron when arrows are needed.

### Headline patterns (real, from the site)
- `همراه مهاجران ایرانی` — *“A companion for Iranian immigrants.”* — three-word hero. Subject-object only, no verb.
- `پلتفرم جامعه و ویکی برای مهاجران ایرانی` — subtitle: declarative noun phrase, no marketing adjectives.
- Section labels in the country guide: pure nouns — *جغرافیا و آب‌وهوا*, *هزینه زندگی*, *شرایط ورود و ویزا*, *فرهنگ و جامعه*.

### Microcopy
- Buttons are **verbs**: *شروع رایگان* (start free), *ورود* (sign in), *ادامه* (continue).
- Empty states are **calm, not cute** — *“هنوز چیزی اینجا نیست”* (nothing here yet) — never apologetic, never "Oops!".
- Errors **describe, don't blame**. *“ارتباط برقرار نشد. دوباره تلاش کنید.”*

---

## VISUAL FOUNDATIONS

### Color
A muted oceanic teal as the single brand color, sat against warm-stone neutrals. **No secondary brand color.** Status colors are present but desaturated.

- **Brand teal** — `#2EA38C` (primary), with `#74CCBC → #178672` gradient for the logo mark and rare brand surfaces.
- **Warm stone** — `#FAF8F4` is the default page background. Never pure white as a canvas — white only appears for elevated cards.
- **Fog grays** — neutral utility, slightly cool, for subtle dividers and very-quiet surfaces.
- **Graphite text** — `#0F1A18` deep, blue-green-leaning black. Never pure `#000`.

Coverage rule: a typical screen is **~85% warm stone + fog**, ~12% white cards, ~3% teal accents.

### Typography
- **Persian: Ravi** — licensed, self-hosted as variable fonts. Three variants ship: `Ravi` (default, mixed Persian + Latin), `Ravi FaNum` (Persian numerals), `Ravi NoEn` (Persian-only). See `fonts/README.md`. Ravi has the low-contrast, geometric warmth that defines the editorial tone — modern but unhurried.
- **Latin: Inter** — used only for English captions, numerals where they sit next to Latin labels, and incidental UI strings.
- **Weights in use:** 400 body, 500 medium UI, 600 headings, 700 display.
- **Line-height for Persian:** `2.0` for body, `1.3` for headings — Persian has tall ascenders + low descenders and needs vertical breath.
- **Letter-spacing:** zero for Persian. Tighten Latin display (`-0.02em`) only.
- **Numerals:** lining figures, tabular for tables.

### Spacing & layout
- **8-px grid.** All spacing tokens are multiples of 4 (`4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128`).
- **Page max-width:** `1240px`, with `min(7vw, 80px)` horizontal gutters.
- **Vertical rhythm:** sections separated by `96px` on desktop, `64px` on mobile.
- **Hero copy is air-walled** — the home hero leaves `~120px` above the title and `~80px` below the CTA pair, on purpose.
- **RTL-first.** Layouts mirror by default; use logical properties (`margin-inline-start`, `padding-block-end`).

### Backgrounds
- **Default canvas:** flat warm stone (`#FAF8F4`). Never gradient as a page background.
- **Atmospheric gradients exist but are reserved:** a single radial *dawn* glow at the top of marketing pages; a vertical *fog* gradient inside select cards. Brand teal gradient appears **only on the logo mark and primary buttons**.
- **No textures, patterns, or noise.** The system is clean.
- **No hand-drawn illustration.** Future imagery direction is cinematic documentary photography (architecture, horizons, transit) — not stock smiling business people, not airplane/passport clichés.

### Imagery
- **Cool-warm balance**, slight desaturation, film-like grain *allowed but optional*. Never high-saturation travel-stock.
- Subject matter: horizons, architecture, transit interiors, lone figures with negative space, light spilling through windows. **Documentary realism.**
- Country flags use **system emoji** (Apple/Twemoji-style) — kept small, never the focal point.

### Corners
- **Pill** (`999px`) — buttons, chips, search input, section nav.
- **Card** (`14–20px`) — content blocks, country tiles.
- **Surface** (`28–36px`) — large hero cards, the logo mark.
- **No square corners** anywhere in product UI.

### Cards
- White (`#FFFFFF`) fill on the stone canvas.
- **1px soft border** (`rgba(15,26,24,0.06)`) — visible but quiet.
- **`shadow-1` or `shadow-2`** — very low elevation. No drop-shadow heavier than `shadow-3` in product UI.
- `padding: 24–32px`. `radius-md (14px)` for country tiles, `radius-lg (20px)` for wiki content blocks.
- Hover lifts the shadow one step (`shadow-1 → shadow-2`), border darkens to `border-default`, **no transform**.

### Borders
- Three-step border ramp: `border-soft (0.06)` / `border-default (0.10)` / `border-strong (0.16)` — all derived from graphite at low alpha so they read warm.
- Brand-tinted border (`rgba(46,163,140,0.45)`) only on focused inputs and active chips.

### Shadows
- Five levels, all **soft, mostly-vertical, very low spread**. Mimic indirect light, not floodlights.
- `shadow-inset-soft` for input fields and pressed states.
- `shadow-glow-brand` (a `6px` teal halo at 10% alpha) for focus rings — replaces the default browser ring.

### Motion
- **Drifting, not springy.** All transitions ease via `cubic-bezier(0.22, 0.61, 0.36, 1)` (`--ease-drift`) or the gentler `--ease-rise (0.16, 1, 0.3, 1)`.
- **Durations:** `160ms` fast (hovers), `240ms` base, `420ms` slow (panel open), `720ms` drift (hero entry).
- **No bounce, no overshoot, no spring physics.** Movement implies floating water, not rubber.
- Entry animations: fade + 8-px upward translate. Exit: fade only.
- The paper-boat mark may **drift vertically ±3px on 6s sine loop** in hero contexts; never spin or scale.

### Hover & press states
- **Buttons (primary):** background darkens one teal step (`teal-500 → teal-600`), foreground stays white. Active: darkens to `teal-700`, no transform.
- **Buttons (secondary outline):** border thickens by 1px in `border-strong`, background fills `bg-brand-faint`.
- **Links:** color stays `--fg-1` by default; on hover, underline appears as `1px solid currentColor` with `text-underline-offset: 4px`. Active state: color shifts to `--fg-brand`.
- **Cards:** shadow rises one level, border darkens, never lift / never tilt.
- **No opacity-based hover.** Use color + shadow.

### Focus
- `outline: none` on the element, replaced by `box-shadow: var(--shadow-glow-brand)` — a 6-px teal halo. This survives RTL/LTR and works on all backgrounds.

### Transparency & blur
- **Blur is rare.** Use only for sticky top-nav on scroll (`backdrop-filter: blur(12px)` over a `rgba(250,248,244,0.8)` surface).
- No translucent cards in body content — the editorial feel requires opaque surfaces.
- Modal scrim: `rgba(15,26,24,0.32)`, no blur.

### Layout rules
- **Sticky elements:** top nav only, never side nav, never bottom CTAs.
- **Logo is always left-edge in LTR / right-edge in RTL**, never centered.
- **Primary CTA is always the right-most button in a pair** (RTL) — *شروع رایگان* sits to the right of *کامیونیتی‌ها* on the homepage.

---

## ICONOGRAPHY

The original site uses **emoji flags** for country flags (`🇫🇮`, `🇨🇦`, `🇩🇪`) — these are intentional and warm, render via system fonts, and add no asset weight. Keep them.

For **product icons** (search, chevrons, close, navigation), the provided screenshots show a magnifier in the top nav but no full icon set. There is no embedded icon font in the assets shipped.

### Substitution

This system ships **[Lucide](https://lucide.dev)** (`v0.469`) as the product icon set, loaded from CDN. Lucide's `1.75px` stroke, rounded line caps, and neutral geometry sit perfectly with Estedad's low-contrast letterforms.

**This is a flagged substitution** — if Rahgozar has an internal icon library, replace the Lucide CDN with the official set and document it here.

### Usage rules

- **Stroke icons only.** No filled icons. No duotone, no color-fills.
- **Color:** `currentColor`, inherited from text — never hard-coded.
- **Sizes:** `16px` inline with body text, `20px` in chips/buttons, `24px` standalone, `32px` empty-states.
- **Stroke width:** Lucide's default `1.75`. Never bump to `2.5` "for emphasis".
- **No icon-only buttons without a tooltip** — accessibility + Persian-screen-reader support.
- **The paper-boat brand mark is never used as an icon** in product UI. It appears only as the app logo, on auth screens, and in 404 / empty states.

### Other glyphs
- **No unicode-arrow CTAs** — use Lucide's `arrow-left` / `arrow-right` SVG.
- **No emoji in product UI** except country flags in the country directory.

---

## Open questions / iteration asks

1. **Photography** — no sample photos provided. The brief calls for documentary cinematic imagery; we haven't placed any in the kit. A small starter set (5–10 hero images) would unlock the marketing UI kit.
2. **Icon library** — if Rahgozar has an internal icon system, send it; otherwise Lucide stays.
3. **Voice samples in English** — current copy guide is Persian-only; if there's an English locale we should mirror it here.
4. **Mobile app surface** — only the responsive web product is in scope from the provided materials; if a native app exists, send screenshots and we'll build a second UI kit.
