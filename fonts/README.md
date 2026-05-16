# Fonts

## Persian — Ravi ✓ (licensed, self-hosted)

Three variants of Ravi are shipped in this folder, all variable fonts (weight `100 → 900`):

| File | Family | Use for |
|---|---|---|
| `Ravi-VF.ttf` | `"Ravi"` | **Default.** Persian + Latin glyphs, Latin digits. Use everywhere unless you have a reason not to. |
| `RaviFaNum-VF.ttf` | `"Ravi FaNum"` | Persian copy where you want **Persian numerals** (۰-۹) rendered automatically. |
| `RaviNoEn-VF.ttf` | `"Ravi NoEn"` | Persian-only contexts. Use when mixing with a separate Latin face and you want zero Latin overlap from Ravi. |

The `@font-face` declarations are at the top of `colors_and_type.css`. The default body face is `var(--font-fa)` → `"Ravi"`. Switch to the numeral variant by setting `font-family: var(--font-fa-num)` on the element (e.g. a stats table).

## Latin — Inter

[Inter](https://rsms.me/inter/), Google Fonts CDN. Used for English captions, mono-ish data labels, and incidental Latin UI text. Inter is intentionally generic — the brand's voice comes from the Persian face; Latin stays neutral.

## Mono

`ui-monospace` / `JetBrains Mono` / `SF Mono` system stack. No mono webfont is shipped — mono appears rarely (code samples, dev-facing tokens) and a system fallback is sufficient.
