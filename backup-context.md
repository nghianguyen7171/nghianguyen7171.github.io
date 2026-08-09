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
| `/` | About: photo, bio, interests, education, awards, professional links |
| `/publications/` | Journals and conferences by year |
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

## Professional links
- Email: nghiant@neu.edu.vn
- Google Scholar: https://scholar.google.com/citations?user=kl6Sz_wAAAAJ
- ORCID: https://orcid.org/0000-0003-1888-0117
- GitHub: https://github.com/nghianguyen7171
- LinkedIn: https://www.linkedin.com/in/trong-nghia-nguyen-6a7824173/
- ResearchGate: https://www.researchgate.net/profile/Trong-Nghia-Nguyen-4
- FDA profile: https://fda.neu.edu.vn/fda-members/nguyen-trong-nghia/

## Lectures
1. Introduction to Artificial Intelligence — https://nghianguyen7171.github.io/Intro_to_AI/#home
2. Basic Data Science in Economics and Business — https://nghianguyen7171.github.io/DS_for_Bussiness/#home
3. Data Analysis with Excel — https://nghianguyen7171.github.io/excel_course/
4. Time Series Analysis and Forecasting — https://nghianguyen7171.github.io/ts_course/
5. Data Mining — https://nghianguyen7171.github.io/Data_mining/

## Updating content
- Bio / links / education / awards → `src/data/site.ts`
- Publications → `src/data/publications.ts`
- Lectures → `src/data/lectures.ts`
- CV PDF → replace `public/cv/CV_Nghia_2026.pdf`

## Cleanup note (August 2026)
Removed non-build leftovers: `archive/`, `CV_Nghia_ACD/` (LaTeX source; site uses PDF in `public/cv/`), `.vscode/`, `AGENTS.md`, `CLAUDE.md`, and all former al-folio/Jekyll assets.

## Status
**Last Updated**: August 9, 2026  
**AI Readiness**: 100%  
**Status**: Lean Astro repo; only files required to build and deploy remain

**Next session**: Confirm Pages → GitHub Actions; update ResearchGate URL if needed; add papers via `publications.ts`.
