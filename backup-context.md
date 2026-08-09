# Backup Context — nghianguyen7171.github.io

## Project Overview
Personal academic website for **Dr. Trong-Nghia Nguyen**, rebuilt in **August 2026** with **Astro** (static HTML). Hosted on GitHub Pages at the same URL.

**Repository**: https://github.com/nghianguyen7171/nghianguyen7171.github.io  
**Live Site**: https://nghianguyen7171.github.io/  
**Faculty page**: https://fda.neu.edu.vn/fda-members/nguyen-trong-nghia/

## Stack
- **Astro** (static output) — no Ruby, Jekyll, or al-folio
- Plain CSS (`src/styles/global.css`)
- Content as TypeScript data modules under `src/data/`
- Deploy: `.github/workflows/deploy.yml` → `npm ci` → `npm run build` → GitHub Pages artifact

**Local commands**
```bash
npm install
npm run dev
npm run build
```

**Pages settings**: GitHub repo → Settings → Pages → Source = **GitHub Actions**

## Site map
| Route | Content |
|-------|---------|
| `/` | About: photo, bio, interests, education, awards, professional links |
| `/publications/` | Journals + conferences by year |
| `/lectures/` | Five external course links |
| `/cv/` | Summary + PDF download (`/cv/CV_Nghia_2026.pdf`) |

Dropped from al-folio: Projects, Repositories, News, AI Workspace Hub, blog, jekyll-scholar.

## Key files
- `src/data/site.ts` — identity, bio, links, education, awards
- `src/data/publications.ts` — publication list
- `src/data/lectures.ts` — course links
- `src/layouts/BaseLayout.astro`, `src/components/*`
- `public/images/profile.jpeg`, `public/cv/CV_Nghia_2026.pdf`
- `CV_Nghia_ACD/` — LaTeX source for CV PDF (optional local build)
- `archive/papers.bib.bak` — BibTeX snapshot from pre-Astro site

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
- **Bio / links**: edit `src/data/site.ts`
- **Publications**: edit `src/data/publications.ts`
- **Lectures**: edit `src/data/lectures.ts`
- **CV PDF**: replace `public/cv/CV_Nghia_2026.pdf` (rebuild from `CV_Nghia_ACD/` if needed)

## Status
**Last Updated**: August 2026  
**AI Readiness**: 100%  
**Status**: Astro rebuild complete; deploy via GitHub Actions

**Next session**: Confirm Pages source is Actions; fix ResearchGate URL if needed; add new papers to `publications.ts`.
