# Dr. Trong-Nghia Nguyen - Academic Portfolio

<div align="center">

[![Live Site](https://img.shields.io/badge/Live-nghianguyen7171.github.io-blue)](https://nghianguyen7171.github.io/)
[![Deploy Status](https://github.com/nghianguyen7171/nghianguyen7171.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/nghianguyen7171/nghianguyen7171.github.io/actions/workflows/deploy.yml)
[![Jekyll](https://img.shields.io/badge/Jekyll-4.x-red)](https://jekyllrb.com/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

**Professional academic website showcasing AI research, publications, teaching, and projects**

[Live Website](https://nghianguyen7171.github.io/) • [AI Workspace Hub](https://nghianguyen7171.github.io/AI_Intell_Dasboad/index.html#home) • [Contact](mailto:nghiant@neu.edu.vn)

</div>

---

## 👨‍🏫 About

This is the official academic portfolio website for **Dr. Trong-Nghia Nguyen**, featuring research publications, teaching materials, projects, and professional information.

**Current Position:** National Economics University, Hanoi, Vietnam  
**Research Focus:** AI for Healthcare & Business, Medical AI Applications, Deep Learning  
**Email:** nghiant@neu.edu.vn

---

## 🌟 Website Features

### 📚 Publications
- **6+ peer-reviewed publications** in top-tier journals and conferences
- Automatic generation from BibTeX bibliography
- Publications in PeerJ Computer Science, IEEE Intelligent Systems, IEEE Access, BSPC
- Integration with Google Scholar, Altmetric, and Dimensions badges

### 🔬 Projects
- **Hospital Rapid Response System (RRS)**: AI-driven clinical deterioration prediction using Temporal Variational Autoencoders
- Architecture diagrams and comprehensive project documentation
- Research contributions and references integration

### 👨‍💻 Repositories
- **11 curated GitHub repositories** ordered by relevance and recency
- Featured projects: TVAE-RRS, NEU_Class_Manager, Deep_CFL, ehr_processed
- Automatic GitHub stats and repository cards

### 🎓 Teaching
**Dropdown navigation with direct links to course sites:**
- **Introduction to Artificial Intelligence** (EP15.TOKT11121 & EP16.TOKT11121)
  - Topics: Search strategies, neural networks, computer vision, NLP
  - [Course Website](https://nghianguyen7171.github.io/Intro_to_AI/#home)
- **Basic Data Science in Economics and Business** (FDA.6.1.2.01.V)
  - Topics: Data preprocessing, statistical analysis, predictive modeling
  - [Course Website](https://nghianguyen7171.github.io/DS_for_Bussiness/#home)

### 🤖 AI Workspace Hub
**Unified command center for AI teaching, research, and productivity:**
- Teaching workspace: Course materials, lectures, AI prompts, code demos
- Research workspace: Projects, publications, literature review, datasets
- Personal workspace: AI-driven scheduling, knowledge base, task automation
- Quick access to AI tools: ChatGPT, Gemini, Perplexity, Cursor AI, NotebookLM
- [Access AI Workspace Hub](https://nghianguyen7171.github.io/AI_Intell_Dasboad/index.html#home)

### 📄 CV
- Comprehensive academic and professional information
- Downloadable PDF version
- Education, research interests, publications, conference presentations
- Technical skills and research contributions

### 📰 News
- Latest publication announcements
- Conference acceptances and presentations
- Research updates

---

## 🛠️ Technical Stack

### Core Technologies
- **Jekyll 4.x**: Static site generator
- **Ruby 3.2.2**: Runtime environment
- **GitHub Pages**: Hosting platform
- **GitHub Actions**: Automated CI/CD deployment

### Key Jekyll Plugins
- `jekyll-scholar`: Bibliography and citation management
- `jekyll-imagemagick`: Responsive image optimization
- `jekyll-minifier`: HTML/CSS/JS minification
- `jekyll-feed`: RSS feed generation
- `jekyll-archives`: Archive page generation
- `jekyll-tabs`: Tabbed content support
- `jekyll-toc`: Table of contents generation

### Features
- **Dark/Light Mode**: Automatic theme switching based on user preference
- **MathJax Support**: Mathematical equation rendering
- **Responsive Design**: Mobile-first approach with Bootstrap grid
- **WebP Images**: Automatic conversion with 85% quality
- **Lazy Loading**: Performance optimization for images
- **SEO Optimized**: Meta tags and Open Graph support

---

## 📂 Project Structure

```
nghianguyen7171.github.io/
├── _pages/                    # Main site pages
│   ├── about.md              # Homepage with profile
│   ├── cv.md                 # CV page configuration
│   ├── lectures.md           # Dropdown navigation to courses
│   └── ai_workspace_hub.md   # External link to AI Workspace
├── _projects/                 # Project showcases
│   └── hospital_rrs_project.md
├── _bibliography/             # Publications
│   └── papers.bib            # BibTeX bibliography
├── _data/                     # Data files
│   ├── cv.yml                # CV content
│   └── repositories.yml      # GitHub repositories config
├── _news/                     # News announcements
│   ├── announcement_4.md     # PeerJ publication
│   └── announcement_5.md     # MIWAI 2025 acceptance
├── assets/
│   ├── img/                  # Images and diagrams
│   │   ├── RRS.png          # RRS architecture
│   │   ├── TVAE.png         # TVAE architecture
│   │   └── publication_preview/
│   └── pdf/                  # PDF files (CV, papers)
├── _config.yml               # Jekyll configuration
└── .github/workflows/        # CI/CD workflows
    └── deploy.yml
```

---

## 🚀 Deployment

### Automatic Deployment
The site is automatically deployed via **GitHub Actions** on every push to the `master` branch.

**Deployment Workflow:**
1. Checkout code
2. Setup Ruby 3.2.2 with bundler cache
3. Setup Python 3.12
4. Update giscus configuration
5. Install dependencies and build Jekyll site
6. Purge unused CSS
7. Deploy to GitHub Pages

**Live Site:** [https://nghianguyen7171.github.io/](https://nghianguyen7171.github.io/)

---

## 📝 Content Management

### Adding Publications
1. Edit `_bibliography/papers.bib`
2. Add publication logo to `assets/img/publication_preview/`
3. Use `preview={filename}` in BibTeX entry

### Updating CV
1. Edit `_data/cv.yml` for content
2. Place new PDF in `assets/pdf/`
3. Update `cv_pdf` field in `_pages/cv.md`

### Adding News
1. Create new file in `_news/`
2. Use YAML front matter with date
3. Write announcement in Markdown

### Adding Projects
1. Create new file in `_projects/`
2. Set `category: work` or `category: fun`
3. Add images to `assets/img/`
4. Use `{% cite %}` tags for references

### Updating Repositories
1. Edit `_data/repositories.yml`
2. Add repository names in `github_repos` list
3. Order by relevance and recency

### Adding External Navigation Links
1. Create new page in `_pages/`
2. Use format:
```yaml
---
layout: page
title: Page Title
permalink: https://external-url.com
nav: true
nav_order: X
---
```

---

## 🎨 Customization

### Theme Colors
Edit `_sass/_themes.scss` to change the theme color:
```scss
--global-theme-color: #{$purple-color};
```

### Navigation Order
Set `nav_order` in page front matter to control menu position.

### Profile Information
Edit `_pages/about.md` to update:
- Profile picture
- Affiliation
- Address
- Contact information

---

## 📊 Current Status

### ✅ Fully Functional Features
- All deployment errors resolved
- CV page working correctly
- Publications displaying properly
- Profile information updated
- Projects page with RRS showcase
- Repositories page with 11 repositories
- Lectures dropdown navigation
- AI Workspace Hub external link
- News announcements
- Automatic deployment

### 📈 Recent Updates (January 2025)
- Project page completely redesigned with Hospital RRS showcase
- Repositories page updated with 11 newest repositories
- Lectures page optimized as dropdown navigation with direct course links
- Basic Data Science course link updated to new address
- AI Workspace Hub added as external navigation link
- Streamlined navigation for improved user experience

---

## 🔗 Links

- **Live Website:** [https://nghianguyen7171.github.io/](https://nghianguyen7171.github.io/)
- **AI Workspace Hub:** [https://nghianguyen7171.github.io/AI_Intell_Dasboad/](https://nghianguyen7171.github.io/AI_Intell_Dasboad/index.html#home)
- **Intro to AI Course:** [https://nghianguyen7171.github.io/Intro_to_AI/](https://nghianguyen7171.github.io/Intro_to_AI/#home)
- **Data Science Course:** [https://nghianguyen7171.github.io/DS_for_Bussiness/](https://nghianguyen7171.github.io/DS_for_Bussiness/#home)
- **GitHub Profile:** [https://github.com/nghianguyen7171](https://github.com/nghianguyen7171)

---

## 📧 Contact

**Dr. Trong-Nghia Nguyen**  
National Economics University  
207 Giai Phong street, Bach Mai ward  
Hanoi, Vietnam  

**Email:** nghiant@neu.edu.vn  
**Website:** [nghianguyen7171.github.io](https://nghianguyen7171.github.io/)

---

## 📄 License

This project is based on the [al-folio theme](https://github.com/alshedivat/al-folio) and is available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

This website is built using the **al-folio** Jekyll theme, a beautiful and responsive theme for academics.

- **Original Theme:** [al-folio](https://github.com/alshedivat/al-folio) by [Maruan Al-Shedivat](https://maruan.alshedivat.com)
- **Hosting:** GitHub Pages
- **Icons:** Tabler Icons, Font Awesome
- **Fonts:** Custom web fonts

---

<div align="center">

**© 2025 Nghia Trong Nguyen**  
Powered by Jekyll with al-folio theme • Hosted by GitHub Pages

</div>
