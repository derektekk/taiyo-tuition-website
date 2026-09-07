# Subjects IA implementation plan

Design: [2026-09-08-homepage-ia-design.md](./2026-09-08-homepage-ia-design.md)

Do these tasks in order. Each one should leave the site working.

---

## Task 1: Slug map and redirects

Change every VCE and Selective slug in `src/data/subjects.js` to the table in the design. Keep year-band slugs.

Add the old slugs to `legacySubjectRedirects` (keep the year-5-10 entries).

Add matching permanent redirects in `vercel.json`.

Update `public/sitemap.xml` to the new URLs only.

`scripts/create-spa-routes.mjs` already reads slugs and legacy keys. No change unless an export name breaks.

**Check:** Open `/subjects/maths-methods-units-3-4`. You should land on Maths Methods Units 3 & 4 at `/subjects/methods-3-4`. `/subjects/year-7-8-maths` is unchanged.

---

## Task 2: Nav and other links

Update `href`s in `src/data/nav.js` to the new slugs. Selective feature and row go to `/subjects/selective`.

Grep the repo for old slugs (`english-units-`, `maths-methods-units-`, `selective-schools-program`, and the other unit-pair slugs). Fix data, pages, and tests. Do not change subject page layout.

**Check:** Mega English / Methods / Selective open the new URLs. Homepage tiles do too.

---

## Task 3: `/subjects` filter and cards

Rebuild `src/pages/SubjectsPage.jsx` (and a small local card if the page is too large). Do not import homepage `SubjectsGrid`.

- Keep the heading.
- Add chips under it: All, VCE, Years 5–10, Selective. All is the default.
- Filter `subjects` by `group` (`vce`, years, selective). Confirm `group` values in `subjects.js`.
- Years (and All) group 5–6 / 7–8 / 9–10.
- Cards: existing `getSubjectImage`, flatter chrome, name + `getSubjectCardLabel`, tight grid, no heavy shadow or lift.

**Check:** All shows every class. VCE hides year and Selective cards. Years shows six classes in three bands. Selective shows one card. Click Selective, URL is `/subjects/selective`.

---

## Task 4: Unlist `/classes` from About

Remove the “How classes work” `TextLink` in `src/pages/AboutPage.jsx`. Leave the paragraph. Do not delete `ClassesPage` or the `/classes` route.

**Check:** About has no link to `/classes`. `/classes` still loads.

---

## Task 5: Dummy tutors

Add six `placeholder: true` records to `src/data/tutors.js`. Use existing Taiyo images from `src/assets` (team or class stills). Short generic bios. No fake VIT or degree claims.

If the sitemap omitted `/tutors`, add it back.

**Check:** `/tutors` shows six cards. Empty state is gone.

---

## Task 6: Browser pass

- `/subjects` filter and cards on desktop and a narrow viewport
- One old slug redirect
- One homepage tile
- Mega row
- About
- `/classes`
- `/tutors`
- One unchanged subject page (layout only)

Fix anything that breaks before calling the pass done.
