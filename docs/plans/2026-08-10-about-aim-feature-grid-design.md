# About & Aim Feature Grid Refinement

Date: 2026-08-10  
Status: Approved

## Goal

Refine `About.jsx` and `Aim.jsx` card grids to match a Matrix-style 2×2 + center-disc reference, while keeping Taiyo branding, copy, and current center media behaviors.

## Decisions

| Topic | Choice |
|---|---|
| Shared component | No — parallel inline refactors |
| About center | Keep circular video thumbnail + play overlay → VideoModal |
| Aim center | Circular crop of teaching-team photo |
| Icons | `lucide-react` in primary circular badges (replace emojis) |
| Copy | Unchanged |

## Layout

### Desktop
- 2×2 CSS grid, gap ~16–20px
- White cards, soft shadow, modest radius, even padding
- Left column: left-aligned content + icon top-left
- Right column: right-aligned content + icon top-right
- Center disc absolutely centered at grid cross, soft shadow, above cards
- About disc ~280–312px; Aim disc ~256–280px

### Mobile
- Single column; all cards left-aligned
- Center disc in-flow (circular), not absolute
- Even padding; remove asymmetric carve-out padding

## Icon mapping (lucide-react)

### About
1. Our Team → `GraduationCap`
2. Personalised Learning… → `BookOpen`
3. More Than Just Tutors… → `Award`
4. With Dedicated Support… → `Library`

### Aim
1. Our Aim → `Target`
2. A Transformative Learning Experience → `TrendingUp`
3. Personalised Support… → `ClipboardList`
4. Building Skills… → `Trophy`

Icon treatment: ~48px circle, `bg-primary`, white stroke icon.

## Interaction
- About: click center opens existing VideoModal; light hover scale/shadow on disc only
- Aim: static circular photo
- Cards: no heavy hover chrome

## Out of scope
- Copy rewrites
- Shared FeatureGrid abstraction
- Changing brand colors to Matrix maroon
- New video assets

## Implementation checklist
1. Install `lucide-react`
2. Refactor `About.jsx` grid, icons, center disc, mobile stack
3. Refactor `Aim.jsx` the same way with circular photo center
4. Adjust `section-card-content` mobile overrides in `index.css` if they fight new padding
5. Visual check desktop + mobile
