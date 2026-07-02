# Site Design Blueprint

How this repository is structured so that **one set of Markdown files works two ways at once**:

1. **Browsable on GitHub** — every folder has a branded `README.md`, links resolve, badges render.
2. **Published as a polished site** — the same files build into a [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) site, auto-deployed to GitHub Pages at a custom domain.

Follow this document to reproduce the same "repo **and** live site from the same files" setup in any other repository. It also includes the reusable **quiz engine** blueprint.

> [!NOTE]
> This file lives in `assets/` and is excluded from the built site (it is internal documentation, not a course page).

---

## 1. The core idea

A normal MkDocs project keeps docs in a `docs/` subfolder. That makes GitHub browsing ugly (everything nested under `docs/`). Instead, this repo builds **from the repository root** (`docs_dir: .`) so:

- The folders you see on GitHub (`01-notes/`, `02-exercises/`, …) **are** the site's content.
- Each folder's `README.md` is both the GitHub folder landing page **and** the site section index.

Two settings make links behave identically in both places:

| Setting | Value | Why |
| --- | --- | --- |
| `docs_dir` | `.` | Build from repo root, not `docs/` |
| `use_directory_urls` | `false` | URLs mirror file paths, so relative `.md` links map 1:1 to `.html` |

---

## 2. Repository structure

```
data-analytics-excel/
├── .github/workflows/deploy.yml   # CI: build + deploy to GitHub Pages (REQUIRED at this path)
├── 01-notes/            # Content folder → site section (each has README.md = index)
│   ├── README.md        # Section overview (GitHub landing + site /01-notes/)
│   └── NN-*.md           # Individual chapter notes
├── 02-exercises/        # One exercise per chapter (NN-*-exe.md)
├── 03-quiz/             # Static quiz app (own index.html, owns this URL path)
├── 04-mini-projects/    # One folder per project (NN-*/README.md + sample .csv data)
│   ├── README.md
│   └── NN-*/README.md
├── 05-resources/        # Only README.md is published; local-only material stays local
│   ├── .gitignore       # (optional) ignore copyrighted files
│   └── README.md
├── assets/
│   ├── banner.svg       # Hero banner embedded on every section README
│   ├── images/          # favicon.svg, excel-logo.svg, excel-interface.png, diagrams
│   ├── stylesheets/extra.css   # Brand theme (Excel green)
│   ├── javascripts/extra.js
│   └── site_design.md   # ← this file (excluded from build)
├── overrides/           # MkDocs theme custom_dir (theme tweaks; .gitkeep placeholder)
├── tools/finalize.py    # Idempotent pre-build fixer (see §8)
├── index.md             # Site home page (REQUIRED at root, docs_dir=.)
├── README.md            # GitHub landing page (excluded from build; index.md is the site home)
├── 01-notes.md … 05-resources.md   # Root "shortcut" pages → deep-link to the live site (GitHub-only)
├── mkdocs.yml           # Site config (REQUIRED at root)
└── requirements.txt     # Build deps (REQUIRED by CI)
```

**Load-bearing files that cannot be hidden or moved** (the live site is built from this repo, so they must physically exist here): `.github/`, `mkdocs.yml`, `index.md`, `requirements.txt`, `assets/`, `overrides/`, `tools/`, and the content folders. Hiding any of them via `.gitignore` breaks the deploy.

> **Note on numbering:** the quiz owns `03-`, so the mini-projects are `04-` and resources are `05-`. Keep the root shortcut pages (`0N-*.md`) and internal links consistent with this numbering.

---

## 3. MkDocs configuration (`mkdocs.yml` essentials)

```yaml
site_name: Data Analytics with Excel
site_url: https://ijk37.com/data-analytics-excel/   # real (custom-domain) URL; feeds sitemap + canonical tags
repo_url: https://github.com/ijk37/data-analytics-excel

docs_dir: .                       # build from repo root
site_dir: ../data-analytics-excel-site   # build output OUTSIDE the repo (avoids recursion)
use_directory_urls: false         # links map 1:1 to file paths

exclude_docs: |                   # keep these OUT of the built site
  mkdocs.yml
  requirements.txt
  .gitignore
  .claude/**
  .git/**
  tools/**
  assets/site_design.md
  05-resources/**                 # exclude the folder …
  !05-resources/README.md         # … but re-include just its README (negation)
  01-notes.md                     # root shortcut pages are GitHub-only
  02-exercises.md
  03-quiz.md
  04-mini-projects.md
  05-resources.md

theme:
  name: material
  custom_dir: overrides
  logo: assets/images/excel-logo.svg
  favicon: assets/images/favicon.svg
  palette:                        # light + dark, both using custom brand colors
    - media: "(prefers-color-scheme: light)"
      scheme: default
      primary: custom
      accent: custom
    - media: "(prefers-color-scheme: dark)"
      scheme: slate
      primary: custom
      accent: custom
  features:
    - navigation.indexes          # a folder's README.md becomes that section's index page
    - navigation.instant          # SPA-like fast page loads
    - navigation.top
    - toc.follow
    - search.suggest

plugins:
  - same-dir                      # REQUIRED when docs_dir: .
  - search
  - callouts                      # renders GitHub-style > [!NOTE] / > [!TIP] as admonitions

markdown_extensions:
  - admonition
  - attr_list                     # enables { .class } on links → the home-page cards
  - md_in_html                    # lets Markdown links inside <div markdown> get rewritten
  - pymdownx.superfences
  - toc: { permalink: true }

extra_css:
  - assets/stylesheets/extra.css

nav:
  - Home: index.md
  - Notes: [ Overview: 01-notes/README.md, … ]
  - Exercises: [ … ]
  - Quiz: 03-quiz/index.html      # links straight into the static quiz app
  - Mini-Projects: [ … ]
  - Resources: 05-resources/README.md
```

Key plugin/extension roles:
- **`same-dir`** — required for `docs_dir: .`, otherwise the build errors.
- **`callouts`** — so `> [!NOTE]`, `> [!TIP]` (which render as quotes on GitHub) become styled admonitions on the site. One syntax, both platforms.
- **`md_in_html` + `<div markdown>`** — MkDocs rewrites Markdown links to `.html`, but **not** raw `<a href="x.md">`. So all navigation must be **Markdown links inside a `markdown`-enabled div**, never raw HTML anchors (see §8).
- **`attr_list`** — lets `[Text](url){ .xl-card }` become styled cards on the home page.
- **`navigation.indexes`** — turns each `README.md` into its folder's index. With `use_directory_urls: false` the section index builds as `01-notes/index.html`, served at the clean directory URL `/01-notes/`. (So the root shortcut pages link to `…/01-notes/`, not `…/01-notes/README.html`.)

---

## 4. Branding & theme

**Palette** (defined once as CSS variables in `assets/stylesheets/extra.css`, wired into Material's own variables):

```css
:root {
  --xl-green:        #217346;   /* Excel primary green */
  --xl-green-dark:   #14532d;
  --xl-green-deep:   #0e4429;
  --xl-green-bright: #2ea36a;
  --xl-leaf:         #33c481;   /* bright accent (secondary tone) */
  --xl-mint:         #6fd19a;

  --md-primary-fg-color: #217346;   /* Material header/nav/footer */
  --md-accent-fg-color:  #1a8a52;   /* links/hover */
}
[data-md-color-scheme="slate"] { /* dark-mode overrides; brighter #33c481 accent */ }
```

Reusable brand elements:
- **Hero banner** — `assets/banner.svg` (green gradient + a bar-chart/trend-line motif), embedded as a Markdown image `![Data Analytics with Excel](../assets/banner.svg)` at the top of every section README. Kept generic (no book/source name).
- **Home-page cards** — `attr_list` links with `.xl-card .xl-card-<name>` classes; each card gets a colored left border. Add a card by adding one line in `index.md` and one `.xl-card-<name>` rule in `extra.css`.
- **Badges** — [shields.io](https://shields.io) `for-the-badge` style. The prominent **"View the Live Site"** badge uses the Bangladesh-flag palette (green label `#006A4E` + red `#F42A41`) so it stands out from the green section badges. It sits under the banner on every README:

  ```markdown
  [![View the live site — ijk37.com](https://img.shields.io/badge/%F0%9F%87%A7%F0%9F%87%A9_View_the_Live_Site-IJK37.COM-F42A41?style=for-the-badge&labelColor=006A4E)](https://ijk37.com/data-analytics-excel/)
  ```

- **Green H2 underlines, green table headers** — small `extra.css` touches that make plain Markdown pages look designed.
- **Favicon/logo** — a simple spreadsheet-grid + rising-bars mark in Excel green (`assets/images/favicon.svg`, `excel-logo.svg`).

---

## 5. Home page (`index.md`)

- Front matter `hide: [navigation]` for a clean landing (no left tree on the home page).
- A `.xl-hero-grid` of cards (Notes, Exercises, Quiz Hub, Mini-Projects, Resources) — the primary in-body navigation, so it works even when the sidebar is collapsed (mobile) or hidden.
- Because `README.md` (GitHub landing) and `index.md` (site home) would collide, **`README.md` is excluded from the build** and `index.md` is the site home. Keep the two in rough sync by hand.

---

## 6. Two-way navigation pattern

Every section `README.md` starts with the same block:

```markdown
# 📊 Section Title

<div align="center" markdown>

![Data Analytics with Excel](../assets/banner.svg)

[![View the live site — ijk37.com](…flag badge…)](https://ijk37.com/data-analytics-excel/)

<img src="…section badge (green)…" alt="Section">

[Home](../index.md) | [Notes](../01-notes/README.md) | [Exercises](../02-exercises/README.md) | [Quiz Hub](../03-quiz/) | [Mini-Projects](../04-mini-projects/README.md) | [Resources](../05-resources/README.md)

</div>
```

Rules that keep it working in **both** GitHub and the site:
- `<div align="center" markdown>` — the `markdown` attribute is what lets MkDocs process (and rewrite) the links inside.
- **Banner and nav are Markdown**, not raw HTML `<a>`/`<img>` — raw HTML links are **not** rewritten and would 404 on the site.
- Links use relative paths (`../index.md`, `../01-notes/README.md`); with `use_directory_urls: false` they map straight to the built `.html`.

---

## 7. Special folders

**`03-quiz/` (static app owns its URL).** It has its own `index.html`, so the site nav points at `03-quiz/index.html` and other pages link to `../03-quiz/`. Its `README.md` is excluded from the build (it would conflict with `index.html`). See §10 for the engine.

**`05-resources/` (publish one page, hide the rest).** The folder can hold local-only material. The build publishes **only** `README.md` via the `exclude_docs` negation (`05-resources/**` then `!05-resources/README.md`). Result: the folder shows on GitHub, and the site gets a clean `/05-resources/` page.

**Root shortcut pages (`01-notes.md` … `05-resources.md`).** GitHub-only mini landing pages (excluded from the build) that show the flag "View the Live Site" badge plus a green button deep-linking to that section on the live site (e.g. `…/01-notes/`, `…/03-quiz/`).

---

## 8. `tools/finalize.py` — the idempotent fixer

An external formatting/generation pass tends to re-introduce raw-HTML nav and drop things. `finalize.py` runs **before each build** (locally and in CI) and self-corrects. It is idempotent — safe to run repeatedly. It:

1. Converts raw-HTML nav (`<a href="x.md"><img></a>`, banner `<img>`) into **Markdown** links/images (so MkDocs rewrites them).
2. Adds the `markdown` attribute to centered `<div align="center">` nav blocks.
3. Retargets root-home links to `index.md` (depth-aware), since `README.md` is excluded.
4. Points quiz-README links at the quiz app (`03-quiz/README.md` → `03-quiz/`).
5. Fixes note image refs to `../assets/images/…` (so put note images in `assets/images/`, not in `01-notes/`).
6. Re-inserts the **"View the Live Site" badge** under the banner in every README if a pass stripped it.

Run it with `python tools/finalize.py`, then `python -m mkdocs build`.

---

## 9. Deployment (GitHub Actions → Pages → custom domain)

**Workflow** `.github/workflows/deploy.yml`: on push to `main`, it checks out, `pip install -r requirements.txt`, runs `python tools/finalize.py`, `mkdocs build --site-dir _site`, then `upload-pages-artifact` + `deploy-pages`. Needs `permissions: { pages: write, id-token: write }`. (Set `DISABLE_MKDOCS_2_WARNING: "true"` on the build step to silence a noisy third-party notice.)

**One-time setup:**
1. GitHub → **Settings → Pages → Build and deployment → Source = "GitHub Actions"** (⚠️ *not* "Deploy from a branch" — the legacy Jekyll builder would otherwise win and serve raw Markdown).
2. Add `_site/` and `/site/` to `.gitignore` (never commit the build output).

**Custom domain (this account's trick).** The domain `ijk37.com` is set on the **user site** repo (`ijk37.github.io`), and GitHub Pages **cascades an apex/user domain to every project site** on the account. So this project is automatically served at `https://ijk37.com/data-analytics-excel/` — **no `CNAME` file is needed in this repo**. Set `site_url` to the real custom-domain URL so sitemaps/canonical links use it.

**Repo → site discoverability:** set the repo's **About → Website** field to the live URL, and keep a prominent "View the Live Site" badge at the top of `README.md`.

**Expected build output:** two benign warnings — `README.md` excluded (conflicts with `index.md`) and `03-quiz/README.md` excluded (conflicts with `index.html`). Both are by design.

---

## 10. Reusable quiz engine (`03-quiz/`)

A self-contained, dependency-free quiz engine (plain HTML + CSS + JS) that runs from static files — open locally or host on Pages. Copy the folder into any repo and swap the question data.

**What it does:** a topic **hub** (`index.html`, card grid) + a **quiz engine** (`quiz.html`, run via `?topic=<id>`). Each attempt draws a **random subset** from a larger **pool**; answer options are **reshuffled every render** (kills A/B/C/D position bias); a sidebar gives a question navigator, an elapsed timer, and a Finish button; results show score/%/grade/time plus a full per-question review.

**File structure (this repo's layout):**
```
03-quiz/
├── index.html            # hub → links to quiz.html?topic=<id>
├── quiz.html             # engine: all logic + inline styling (dark green theme)
├── data.js               # TOPICS, QUIZ_CONFIG, attemptSizeFor(), QUESTIONS = { … all base pools }
├── data-expansion.js     # loads AFTER data.js; QUESTIONS["<id>"].push( … ) to grow pools
├── README.md             # (excluded from the site build)
└── take_quiz_here.md     # optional GitHub pointer to the live hub
```
*(A large bank can be split into per-chapter `data-NN.js` files instead; the engine only needs `TOPICS`, `QUIZ_CONFIG`, `attemptSizeFor`, and `QUESTIONS` defined before it runs. Missing `data-*.js` script tags 404 harmlessly.)*

**Data format:**
```js
const TOPICS = [ { id: "01", title: "Introduction to Excel" }, { id: "mixed-1", title: "Final Mixed 1" } ];
const QUIZ_CONFIG = { defaultAttempt: 25, attempt: { "mixed-1": 50, "mixed-2": 75, "mixed-3": 100 } };
const QUESTIONS = {};
QUESTIONS["01"] = [
  { q: `Question?`, options: [`A`,`B`,`C`,`D`], answer: 1, explain: `Why B is correct.` },
];
// data-expansion.js then grows pools:
QUESTIONS["01"].push( /* more { q, options, answer, explain } */ );
```
Strings use **backticks**, so Excel formulas (which use `"` and `'`) need no escaping. `answer` is the 0-based index of the correct option.

**Sizing (this repo).** Chapters draw **25 random per attempt** from pools sized by importance — **50** (foundational), **75** (core), or **100** (heaviest: Lookups, PivotTables). Mixed quizzes draw **50 / 75 / 100**. Override any attempt with a `?n=` URL parameter. `attemptSizeFor(id, poolLen)` returns `min(config, poolLen)`, so a pool is always safe to draw from.

**Engine essentials (`quiz.html`):** `pickQuestions()` shuffles the pool, slices `attemptSize`, and maps `shuffleOptions()`; `render()` restores locked/answered state and updates the navigator; `selectAnswer()` locks + reveals the explanation; a count-up timer; `showResults()` scores and renders the full review; `restartQuiz()` re-draws a fresh set.

**Theme:** dark, inline in each HTML `<style>` — a green Excel palette (`#0d1a12` background, `#217346`/`#33c481` accents). Change a few CSS values to rebrand. (The quiz keeps its own dark theme; the green MkDocs theme applies to the doc pages.)

**Adapt to a new subject:** copy `03-quiz/`, edit `TOPICS`, replace `QUESTIONS`, set `QUIZ_CONFIG`, grow pools in `data-expansion.js`, rebrand titles/icons/colors, then open `index.html` and verify counts, shuffling, nav, timer, finish, and review. Validation without Node: every question needs `q/options/answer/explain`, `0 ≤ answer < options.length`, and no duplicate `q` within a pool.

**Design principles:** static-only (trivial to host), data separated from engine (adding questions never touches logic), big pool + small attempt (variety + repeatable practice), runtime option shuffling (fixes position bias), fully client-side (offline, instant feedback).

---

## 11. Replicate this in a new repo — checklist

1. **Content first.** Put `README.md` in each top-level content folder; write `index.md` as the home page.
2. **Add MkDocs config.** `mkdocs.yml` with `docs_dir: .`, `use_directory_urls: false`, `same-dir` + `callouts` plugins, `md_in_html` + `attr_list`, custom palette. `requirements.txt` with `mkdocs-material`, `mkdocs-callouts`, `mkdocs-same-dir`.
3. **Brand it.** Copy `assets/` (banner, `extra.css` variables, favicon/logo); adjust colors and the live-site badge URL.
4. **Standardize navigation.** Every README uses the `<div align="center" markdown>` block with Markdown (not raw-HTML) links + the banner + the live-site badge.
5. **Add `tools/finalize.py`** and run it before building.
6. **Add the CI workflow** (`.github/workflows/deploy.yml`) and set **Pages Source = GitHub Actions**.
7. **Wire the domain** (rely on the user-site cascade, or add a per-repo `CNAME` for a distinct domain) and set `site_url` + the repo's About → Website field.
8. **Verify:** `python tools/finalize.py && python -m mkdocs build` with only the two expected exclusion warnings, then check the deployed nav, links, and the `03-quiz/` app (counts, shuffling, timer, finish, review).
