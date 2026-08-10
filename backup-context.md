# Backup Context — nghianguyen7171.github.io

## Project Overview
Personal academic website for **Dr. Trong-Nghia Nguyen**, built with **Astro** (static HTML) and hosted on GitHub Pages.

**Repository**: https://github.com/nghianguyen7171/nghianguyen7171.github.io  
**Live Site**: https://nghianguyen7171.github.io/  
**Faculty page**: https://fda.neu.edu.vn/fda-members/nguyen-trong-nghia/

## Stack
- **Astro** static site (no Ruby / Jekyll / al-folio)
- Plain CSS: `src/styles/global.css`
- Content modules: `src/data/*.ts`
- Deploy: `.github/workflows/deploy.yml` → `npm ci` → `npm run build` → GitHub Pages

```bash
npm install
npm run dev
npm run build
```

**GitHub Pages**: Settings → Pages → Source = **GitHub Actions**

## Site map
| Route | Content |
|-------|---------|
| `/` | About: photo, bio, interests, labs, education, awards, professional links |
| `/publications/` | Journals/conferences by year; type filter; IF / JCR / Q labels |
| `/lectures/` | Five external course links |
| `/cv/` | Summary + PDF (`/cv/CV_Nghia_2026.pdf`) |

## Essential repo layout
```
.github/workflows/deploy.yml
astro.config.mjs
package.json
package-lock.json
tsconfig.json
README.md
LICENSE
backup-context.md
public/
  cv/CV_Nghia_2026.pdf
  images/NghiaNguyen.jpg
  favicon.*
src/
  components/
  data/site.ts, publications.ts, lectures.ts
  layouts/BaseLayout.astro
  pages/ (index, publications, lectures, cv)
  styles/global.css
```

Ignored locally (not in git): `node_modules/`, `dist/`, `.astro/`

## About page content (`src/data/site.ts`)
- **Name**: Trong-Nghia Nguyen
- **Title**: Lecturer · Business AI Lab
- **Affiliation**: Faculty of Data Science and Artificial Intelligence, College of Technology, National Economics University
- **Address**: 207 Giai Phong Street, Bach Mai Ward, Hanoi, Vietnam
- **Email**: nghiant@neu.edu.vn
- **Profile photo**: `/images/NghiaNguyen.jpg` (natural portrait aspect; no square crop)

### Labs (About → Labs section)
| Name | URL |
|------|-----|
| Business AI Lab | https://bailab.vn/ |
| Pattern Recognition Lab | https://prlabjnu.github.io/ |
| Bio Research Team | https://neu-bio-research-team.github.io/NEU-BRT-SRT/ |
| Causal Perception and Reasoning | https://cpr.ai.vn/ |

## Professional links
- Email: nghiant@neu.edu.vn
- Google Scholar: https://scholar.google.com/citations?user=kl6Sz_wAAAAJ
- ORCID: https://orcid.org/0000-0003-1888-0117
- GitHub: https://github.com/nghianguyen7171
- LinkedIn: https://www.linkedin.com/in/trong-nghia-nguyen-6a7824173/
- ResearchGate: https://www.researchgate.net/profile/Trong-Nghia-Nguyen-4
- FDA profile: https://fda.neu.edu.vn/fda-members/nguyen-trong-nghia/

## Publications (`src/data/publications.ts`)
- Fields: `type` (`journal` \| `conference`), optional `indexing`, `if`, `jcr`, `quartile`, `selected`
- UI: All / Journals / Conferences filter; badges for type + SCIE / IF / JCR % / Q
- Indexed journal metrics currently set (editable; verify against preferred JCR year if needed):
  - BSPC — SCIE · IF 5.7 · JCR 25% · Q2
  - PeerJ Computer Science — SCIE · IF 2.9 · Q2
  - IEEE Access — SCIE · IF 3.6 · Q2
  - IEEE Intelligent Systems — SCIE · IF 6.1 · Q1
  - Smart Media Journal — Journal label only (no SCI metrics)

## Lectures
1. Introduction to Artificial Intelligence — https://nghianguyen7171.github.io/Intro_to_AI/#home
2. Basic Data Science in Economics and Business — https://nghianguyen7171.github.io/DS_for_Bussiness/#home
3. Data Analysis with Excel — https://nghianguyen7171.github.io/excel_course/
4. Time Series Analysis and Forecasting — https://nghianguyen7171.github.io/ts_course/
5. Data Mining — https://nghianguyen7171.github.io/Data_mining/

## Updating content
- Bio / links / education / awards / labs → `src/data/site.ts`
- Publications → `src/data/publications.ts` (`type`; journals may set `indexing` / `if` / `jcr` / `quartile`)
- Lectures → `src/data/lectures.ts`
- CV PDF → replace `public/cv/CV_Nghia_2026.pdf`
- Profile photo → replace `public/images/NghiaNguyen.jpg` and keep `site.profileImage`

## Cleanup note (August 2026)
Removed non-build leftovers: `archive/`, `CV_Nghia_ACD/` (LaTeX source; site uses PDF in `public/cv/`), `.vscode/`, `AGENTS.md`, `CLAUDE.md`, and all former al-folio/Jekyll assets. Site is Astro-only.

## Recent commits (this session lineage)
- `989986e` — Add Labs section with links on the About page
- `d3c09ce` — Add journal/conference and IF–JCR–Q labels on publications
- `8b16f80` — Show full profile photo without square crop
- `e6a1d7b` — Use NghiaNguyen.jpg as the About profile photo
- `b0e1078` — Remove leftover files; keep only Astro build essentials
- `a2e98ba` — Rebuild personal site with Astro, replacing al-folio/Jekyll

## Status
**Last Updated**: August 10, 2026, 12:58 (UTC+7)  
**AI Readiness**: 100%  
**Status**: Astro site current — four Labs on About; publication type + IF/JCR/Q labels; full portrait photo

**Next session**: Confirm Pages → GitHub Actions if live site still shows old theme; verify/correct journal IF–Q values if needed; update ResearchGate URL if needed; add papers via `publications.ts`.

## Change Log
### 2026-08-10 — Add CPR lab
- Labs: added Causal Perception and Reasoning — https://cpr.ai.vn/

### 2026-08-09 — Context refresh
- Expanded backup with Labs URLs, publication metric table, About identity fields, and commit lineage

### 2026-08-09 — Labs section on About
- Added Labs list: Business AI Lab, Pattern Recognition Lab, Bio Research Team
- Data in `site.labs`; external links on `/`

### 2026-08-09 — Publication type and journal metric labels
- Publications page: All / Journals / Conferences filter
- Per-item labels: Journal|Conference, SCIE, IF, JCR %, Q1–Q4 (SC Lab–style)
- Metrics fields on journal entries in `src/data/publications.ts`

### 2026-08-09 — Profile photo shows full frame
- `.hero-photo`: dropped square `aspect-ratio: 1` / `object-fit: cover` crop
- Uses natural portrait height (`height: auto`, `object-fit: contain`) so head and shoulders are fully visible
- Photo file: `public/images/NghiaNguyen.jpg`
