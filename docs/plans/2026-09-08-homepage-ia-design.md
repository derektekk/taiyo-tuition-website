# Homepage and IA design

Locked 2026-09-08. Companion to the [client revision brief](./2026-08-31-client-revision-brief.md). That brief still holds global rules and shipped work. This file is the build spec for this pass.

Subject page layout is still parked in [subject page IA](./2026-09-07-subject-page-ia.md). Do not implement that scroll in this pass.

---

## Jobs

The **homepage** orients the visitor and can convert if the current stack is enough (hero, stats, ATARs, reviews, story, subjects, location, enrol, FAQs, close).

A **subject page** is extra detail for someone who still has questions. Later it becomes the long program page (proof, week, curriculum, resources, portal, tutors, reviews, fee, FAQs). Not in this pass. Placeholders for tutors, portal, and company ATARs wait until that build.

`/subjects` is the chooser. It is not a second homepage tile grid.

---

## Out of scope this pass

- Homepage section order or new home blocks (get started, comparison, portal)
- Subject page template or copy rewrite
- `/classes` redirect
- Details-led full-page restyle of `/subjects`
- Specialist Units 1 & 2
- Year-band English fees

---

## `/subjects`

Heading stays. Filter sits under the heading. Cards sit under the filter.

### Filter

Chips: **All** (default), **VCE**, **Years 5–10**, **Selective**.

One chip is active. All shows every class. The other chips hide the rest.

Years 5–10 still groups the list as 5–6, then 7–8, then 9–10.

All can use the same grouping so the page stays scannable: VCE, then Years 5–10 (with the three bands), then Selective.

Selective is one class. The chip does not skip to the class page. The visitor clicks the card.

No extra routes (`/subjects/vce` and the rest are not built). Mega “Subjects” still goes to `/subjects`.

### Cards

Same subject photos. New chrome.

- Flatter card. Ring or hairline, not a heavy shadow. No lift on hover.
- Name plus unit or year band (`Units 1 & 2`, `Years 7–8`). Use `getSubjectCardLabel`.
- Tighter grid than today’s tall cards. Two columns from `sm`, three or four on large screens.
- Do not reuse homepage `SubjectsGrid` icon tiles.

Click goes to `/subjects/:slug`.

---

## Class URLs

Short, subject first. Year-band slugs stay.

| Current | New |
| --- | --- |
| `english-units-1-2` | `english-1-2` |
| `english-units-3-4` | `english-3-4` |
| `maths-methods-units-1-2` | `methods-1-2` |
| `maths-methods-units-3-4` | `methods-3-4` |
| `specialist-maths-units-3-4` | `specialist-3-4` |
| `general-maths-units-1-2` | `general-1-2` |
| `general-maths-units-3-4` | `general-3-4` |
| `chemistry-units-1-2` | `chemistry-1-2` |
| `chemistry-units-3-4` | `chemistry-3-4` |
| `physics-units-1-2` | `physics-1-2` |
| `physics-units-3-4` | `physics-3-4` |
| `biology-units-1-2` | `biology-1-2` |
| `biology-units-3-4` | `biology-3-4` |
| `year-5-6-english` through `year-9-10-maths` | unchanged |
| `selective-schools-program` | `selective` |

Old slugs 301 to the new ones. Keep the existing year-5-10 redirects.

Update `legacySubjectRedirects`, `vercel.json`, `public/sitemap.xml`, `nav.js`, and `scripts/create-spa-routes.mjs` (it already emits a file per legacy slug). Subject page layout stays. Only the slug and links change.

Homepage tiles keep the same look. They point at the new slugs.

---

## Other pages

### `/classes`

URL stays. Remove the About “How classes work” link. Nothing replaces it.

### Tutors

Stays in the nav. Fill `tutors.js` with six dummy records so `/tutors` shows the card grid, not the empty state.

Use existing Taiyo photos (team or class stills), not stock headshots of strangers. Mark each record `placeholder: true` in data so we can strip them later. Names and bios are stand-ins. The client replaces them.

Do not invent qualifications that look like real VIT or university claims beyond a short generic line.

`/tutors` stays in the sitemap once people exist in the file.

### Mega menu

Row `href`s use the new slugs. Column headings can keep pointing at `/subjects`. Selective row goes to `/subjects/selective`.

---

## Data and errors

`subjects.js` stays JSX-free. Slug is the source of truth. `getSubjectBySlug` keeps working. Unknown slugs still go to `/subjects`.

Redirects are permanent. Do not leave a second live page on an old slug.

---

## Checks

- `/subjects` opens on All. Each chip hides the other groups. Years shows three band headings.
- A card click lands on the new slug. An old slug lands on the new page.
- Homepage and mega open the same new URLs.
- About has no `/classes` link. `/classes` still loads.
- `/tutors` shows six cards.
- Subject page body, photos, and close are unchanged except links.
- Sitemap lists only new class URLs plus unchanged year-band URLs.
