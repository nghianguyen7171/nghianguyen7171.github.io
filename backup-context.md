# Backup Context - nghianguyen7171.github.io Project

## Project Overview
This is a Jekyll-based academic website for Dr. Trong-Nghia Nguyen, hosted on GitHub Pages. The site serves as a professional portfolio showcasing research publications, CV, and academic information.

**Repository**: https://github.com/nghianguyen7171/nghianguyen7171.github.io  
**Live Site**: https://nghianguyen7171.github.io/

## Current Project Status (As of Latest Session)

### ✅ Successfully Completed Tasks
1. **Profile Picture Update**: Changed from `ntn_new.jpg` to `new_profile_pic.jpeg`
2. **Affiliation Update**: Changed from Chonnam National University to National Economics University
3. **Address Update**: Updated to "207 Giai Phong street, Bach Mai ward, Hanoi, Vietnam"
4. **Email Addition**: Added `nghiant@neu.edu.vn`
5. **Publications Added**: 
   - PeerJ Computer Science paper (2025) with correct logo path
   - All existing publications maintained
6. **News Announcements**: Added 2 new announcements for recent publications
7. **CV Page Complete Overhaul**: 
   - Updated PDF reference to `CV_Nghia_ACD_2.pdf`
   - Comprehensive CV data in `_data/cv.yml`
   - Correct thesis title: "Multi-Stage Deep Learning Framework with Distributed Contrastive Methods for Rapid Response System"
8. **Deployment Issues Fixed**: 
   - GitHub Actions workflow errors resolved
   - YAML syntax errors fixed
   - CV layout simplified and working
9. **Hospital RRS Project Page - Complete Scientific Redesign** (October 2025):
   - **Removed all template projects** (1_project.md through 9_project.md)
   - **Created comprehensive 10-section scientific showcase** following academic paper structure:
     1. Introduction and Clinical Context
     2. Methodological Framework (Data Sources, System Architecture, Multi-Stage Approaches)
     3. Experimental Results and Performance Analysis
     4. Clinical Applications and Impact
     5. Explainability and Clinical Trust
     6. Patent Protection and Intellectual Property
     7. Future Research Directions
     8. Publications and Dissemination
     9. Acknowledgments and Collaborations
     10. Conclusion
   - **Integrated three major publications**:
     - TVAE (BSPC 2025): Temporal Variational Autoencoder
     - Multi-Gradient Siamese (IEEE Intelligent Systems 2024)
     - Federated Learning (IEEE Access 2024)
   - **Added mathematical formulations** (LaTeX equations for loss functions)
   - **Comprehensive performance comparison table** with 6 models and 7 metrics
   - **Clinical impact quantification**: 32% cardiac arrest reduction, 28% ICU transfer reduction
   - **Enhanced visual presentation**: Professional tables, styled conclusion box, architecture diagrams
   - **Fixed all citation issues** (see below for details)
10. **Jekyll-Scholar Citation System - Critical Fixes**:
    - **Issue 1**: Removed invalid `--file papers` parameter from all cite tags
      - ❌ WRONG: `{% cite key --file papers %}`
      - ✅ CORRECT: `{% cite key %}`
    - **Issue 2**: Moved citations from headings/tables to separate paragraphs
      - Jekyll-scholar cite tags don't render properly in markdown headings or table cells
      - Solution: Place citations below headings or use superscript references in tables
    - **Issue 3**: Changed numeric-only citation keys to descriptive keys
      - ❌ `10559396` → ✅ `nguyen2024siamese` (IEEE Intelligent Systems)
      - ❌ `10643963` → ✅ `nguyen2024federated` (IEEE Access)
      - Numeric-only keys can cause Jekyll-scholar parsing issues
    - **Issue 4**: Removed empty BibTeX fields (`volume={}`, `number={}`)
      - Empty fields can cause parsing failures
    - **Result**: All citations now render correctly as "(Author et al., Year)"
11. **Repositories Page Update**:
    - Updated `_data/repositories.yml` with newest repositories
    - Reordered by relevance and recency (11 repositories total)
    - Added TVAE-RRS, NEU_Class_Manager, ehr_proccessed, and other recent projects
12. **Lectures Page Creation & Optimization**:
    - Created `lectures.md` as dropdown navigation menu
    - Added Introduction to AI course (EP15.TOKT11121 & EP16.TOKT11121)
    - Added Basic Data Science in Economics and Business (FDA.6.1.2.01.V)
    - Configured dropdown navigation for easy course access
    - Each course title links directly to external course content
    - Streamlined presentation with minimal text
    - Updated Basic DS course link to new address (DS_for_Bussiness)
    - Replaced placeholder `teaching.md` with dropdown lectures navigation
13. **AI Workspace Hub External Link**:
    - Added "AI Workspace Hub" to main navigation menu
    - External link to AI Intelligent Workspace Hub (AI_Intell_Dasboad)
    - Unified command center for AI teaching, research, and productivity
    - Uses direct external permalink for instant navigation (no redirect delay)
    - Navigation order: 7 (positioned after lectures)

### 🔧 Technical Issues Resolved
- **Bundler Version Error**: Removed invalid `bundler-version` parameter from GitHub Actions
- **YAML Syntax Errors**: Fixed nested mappings in CV data file
- **CV Layout Conflicts**: Simplified layout to use only `_data/cv.yml` instead of external resume data
- **PeerJ Logo Path**: Corrected to use `publication_preview/` directory
- **External JSON Conflicts**: Disabled `jekyll_get_json` to prevent resume data conflicts
- **Project Category Mismatch**: Fixed project category from 'research' to 'work' for proper display
- **Project References**: Added proper Jekyll cite tags for bibliography integration
- **Navigation Order**: Updated navigation order for new pages
- **Jekyll-Scholar Citation Errors**: Fixed all "(missing reference)" errors through:
  - Removing invalid `--file papers` parameter from cite tags
  - Relocating citations from headings/tables to paragraph text
  - Replacing numeric citation keys with descriptive semantic keys
  - Cleaning empty BibTeX fields that caused parsing failures

## Project Structure

### Core Configuration Files
- **`_config.yml`**: Main Jekyll configuration
  - Scholar configuration for publications
  - External JSON loading disabled
  - ImageMagick enabled for responsive images
  - MathJax enabled
  - Dark mode enabled

### Key Directories
- **`_pages/`**: Main site pages
  - `about.md`: Homepage with profile information
  - `cv.md`: CV page configuration
  - `lectures.md`: Dropdown navigation menu linking to external course sites
  - `ai_workspace_hub.md`: External link to AI Intelligent Workspace Hub
- **`_projects/`**: Project showcases
  - `hospital_rrs_project.md`: Hospital Rapid Response System project
- **`_data/`**: Data files
  - `cv.yml`: Comprehensive CV information
  - `repositories.yml`: GitHub repositories configuration (11 repositories)
- **`_bibliography/`**: Publication data
  - `papers.bib`: All research publications
- **`_news/`**: News announcements
  - `announcement_4.md`: PeerJ publication news
  - `announcement_5.md`: MIWAI 2025 acceptance news
- **`assets/`**: Static assets
  - `img/`: Images including profile pictures, publication logos, and architecture diagrams
    - `RRS.png`: Rapid Response System architecture diagram
    - `TVAE.png`: Temporal Variational Autoencoder architecture diagram
    - `publication_preview/`: Publication logos
  - `pdf/`: PDF files including CV
- **`.github/workflows/`**: GitHub Actions
  - `deploy.yml`: Main deployment workflow

### Layout Files
- **`_layouts/cv.liquid`**: Simplified CV layout (no resume data conflicts)
- **`_includes/cv/`**: CV display components
  - `time_table.liquid`: Timeline display
  - `map.liquid`: Key-value pairs
  - `nested_list.liquid`: Hierarchical lists
  - `list.liquid`: Simple lists

## Current Content Status

### Personal Information
- **Name**: Trong-Nghia Nguyen
- **Email**: nghiant@neu.edu.vn
- **Affiliation**: National Economics University, Hanoi, Vietnam
- **Address**: 207 Giai Phong street, Bach Mai ward, Hanoi, Vietnam

### Education
- **Ph.D. (2025)**: Artificial Intelligence Convergence, Chonnam National University
  - Thesis: "Multi-Stage Deep Learning Framework with Distributed Contrastive Methods for Rapid Response System"
- **M.S. (2020)**: Computer Vision, MICA, Hanoi University of Science and Technology
- **B.S. (2018)**: Information Technology, Hue University of Science and Technology

### Publications (Current in papers.bib)
1. **PeerJ Computer Science (2025)**: Dual-stream transformer approach for pain assessment
   - Citation key: `nguyen2025dualstream`
2. **BSPC (2025)**: Temporal Variational Autoencoder Model for Clinical Emergency Prediction
   - Citation key: `10559396tvae`
3. **IEEE Intelligent Systems (2024)**: Multi-Gradient Siamese Temporal Model
   - Citation key: `nguyen2024siamese` (formerly `10559396`)
4. **IEEE Access (2024)**: Explainable Deep Contrastive Federated Learning System
   - Citation key: `nguyen2024federated` (formerly `10643963`)
5. **Smart Media Journal (2022)**: TabNet-Based System for Water Quality Prediction
   - Citation key: `nguyen2022tabnet`
6. **Multiple Conference Papers**: MAPR, KIPS, BIGDAS, SMA, CVPRW
   - Keys: `nguyen2020feature`, `nguyen2021deep`, `nguyen2022deep`, `sma2022`, `vu2023ensemble`, `tulga2024`

### Research Interests
- Artificial Intelligence and Machine Learning
- Medical AI Applications
- Natural Language Processing
- Computer Vision
- Signal Processing

### Teaching Courses
- **Introduction to Artificial Intelligence**: EP15.TOKT11121 (DS) & EP16.TOKT11121 (AI)
  - Course content: https://nghianguyen7171.github.io/Intro_to_AI/#home
  - Topics: Search strategies, adversarial search, logic, neural networks, CV, NLP
- **Basic Data Science in Economics and Business**: FDA.6.1.2.01.V
  - Course content: https://nghianguyen7171.github.io/DS_for_Bussiness/#home
  - Topics: Data preprocessing, statistical analysis, visualization, predictive modeling

### Current Website Structure
- **Homepage**: Profile information, affiliation, contact details
- **Publications**: 6+ research papers with proper citations and logos
- **Projects**: Hospital RRS project - comprehensive 10-section scientific showcase
  - Live URL: https://nghianguyen7171.github.io/projects/hospital_rrs_project/
  - Features: Mathematical formulations, performance tables, clinical impact metrics
  - Architecture diagrams: RRS.png, TVAE.png
  - 325 lines of professional scientific content
- **Repositories**: 11 GitHub repositories ordered by relevance and recency
- **Lectures**: Dropdown navigation menu with direct links to 2 course sites
- **AI Workspace Hub**: External link to unified AI command center for teaching, research, and productivity
- **CV**: Complete academic and professional information
- **News**: Recent publication announcements

## Technical Stack & Technologies

### Jekyll Configuration
- **Jekyll Version**: Latest with plugins
- **Ruby Version**: 3.2.2 (in GitHub Actions)
- **Python Version**: 3.12 (for Jupyter notebooks)
- **Bundler**: Latest version (no specific version pinned)

### Key Plugins
- `jekyll-scholar`: Bibliography management
- `jekyll-imagemagick`: Responsive images
- `jekyll-minifier`: HTML/CSS minification
- `jekyll-feed`: RSS feed generation
- `jekyll-archives`: Archive pages
- `jekyll-tabs`: Tabbed content
- `jekyll-toc`: Table of contents

### GitHub Actions Workflow
- **Trigger**: Push to master branch
- **Steps**:
  1. Checkout code
  2. Setup Ruby 3.2.2 with bundler cache
  3. Setup Python 3.12
  4. Update giscus configuration
  5. Install dependencies and build Jekyll site
  6. Purge unused CSS
  7. Deploy to GitHub Pages

### Image Optimization
- **ImageMagick**: Enabled for responsive images
- **WebP Conversion**: Automatic conversion with 85% quality
- **Lazy Loading**: Enabled for performance
- **Widths**: 480px, 800px, 1400px

### Jekyll-Scholar Best Practices (Critical for Citations)

**✅ CORRECT Citation Syntax:**
```liquid
{% cite citation_key %}
```

**❌ INCORRECT - Do NOT Use:**
```liquid
{% cite citation_key --file papers %}  # Invalid parameter
```

**Citation Placement Rules:**
1. **✅ DO**: Place citations in paragraph text
   ```markdown
   This research shows promising results {% cite nguyen2024siamese %}.
   ```

2. **❌ DON'T**: Place citations in markdown headings
   ```markdown
   ## Section Title {% cite key %}  # Won't render
   ```

3. **❌ DON'T**: Place citations in table cells
   ```markdown
   | Model {% cite key %} | Value |  # Won't render
   ```

4. **✅ DO**: Use superscript references in tables
   ```markdown
   | Model<sup>1</sup> | Value |
   
   <sup>1</sup> {% cite nguyen2024siamese %}
   ```

**BibTeX Entry Best Practices:**
1. **Use descriptive citation keys** (not numeric-only)
   - ✅ GOOD: `nguyen2024siamese`, `nguyen2024federated`
   - ❌ BAD: `10559396`, `10643963`

2. **Remove empty fields** that can cause parsing errors
   - ❌ BAD: `volume={},`, `number={},`
   - ✅ GOOD: Omit field entirely if empty

3. **Required fields for @article:**
   - `author`, `title`, `journal`, `year`
   - Optional but recommended: `volume`, `pages`, `doi`, `html`

4. **Custom fields for al-folio theme:**
   - `abbr`: Journal abbreviation badge
   - `preview`: Logo filename in `assets/img/publication_preview/`
   - `bibtex_show`: Set to `{true}` to show BibTeX button
   - `selected`: Set to `{true}` to feature on homepage

**Default Bibliography Configuration** (_config.yml):
```yaml
scholar:
  source: /_bibliography/
  bibliography: papers.bib  # Default, no need to specify in cite tags
```

## Current Issues & Considerations

### ✅ Resolved Issues
- All deployment errors fixed
- CV page working correctly
- Publications displaying properly
- Profile information updated
- **Jekyll-Scholar citation errors completely resolved** (October 2025)
  - All "(missing reference)" errors fixed
  - Citations now render correctly across all pages
  - Hospital RRS project page citations working perfectly

### 🔍 Potential Future Considerations
- Monitor GitHub Actions for any new issues
- Keep publications up to date as new papers are published
- Consider adding more project showcases following the Hospital RRS template
- Add more architecture diagrams for other research projects
- Optimize for mobile performance
- Consider adding interactive visualizations for research results

## Development Workflow

### Making Changes
1. **Content Updates**: Edit files in `_pages/`, `_data/`, `_bibliography/`
2. **Styling**: Modify `_sass/` files
3. **Layout**: Update `_layouts/` and `_includes/`
4. **Testing**: Changes auto-deploy via GitHub Actions

### Git Workflow
- **Branch**: master (main branch)
- **Deployment**: Automatic via GitHub Actions on push
- **Backup**: All changes committed to GitHub repository

## File Locations for Common Tasks

### Adding Publications
- **File**: `_bibliography/papers.bib`
- **Logo**: Place in `assets/img/publication_preview/`
- **Reference**: Use `preview={filename}` in BibTeX

### Updating CV
- **File**: `_data/cv.yml`
- **PDF**: Place in `assets/pdf/` and reference in `_pages/cv.md`

### Adding News
- **Directory**: `_news/`
- **Format**: Markdown with YAML front matter
- **Date**: Use proper date format for chronological order

### Profile Updates
- **File**: `_pages/about.md`
- **Sections**: `subtitle`, `more_info`

### Adding Projects
- **Directory**: `_projects/`
- **Format**: Markdown with Jekyll front matter
- **Category**: Use `work` or `fun` for proper display
- **Images**: Place in `assets/img/` and reference with relative paths

### Updating Repositories
- **File**: `_data/repositories.yml`
- **Format**: YAML list of repository names
- **Order**: Arrange by relevance and recency

### Adding Lectures/Courses
- **File**: `_pages/lectures.md`
- **Format**: Dropdown navigation (YAML front matter only)
- **Structure**: Use `dropdown: true` and `children` array with course titles and external permalinks
- **Links**: Use full URLs for external course sites

### Adding External Links to Navigation
- **File**: Create new page in `_pages/` directory
- **Format**: Markdown with minimal front matter
- **Required Fields**: `layout: page`, `title`, `permalink: [full external URL]`, `nav: true`, `nav_order`
- **Example**: `ai_workspace_hub.md` with `permalink: https://nghianguyen7171.github.io/AI_Intell_Dasboad/index.html#home`
- **Note**: Use direct external URL in permalink for instant navigation (no redirect delay)

## Contact Information
- **Email**: nghiant@neu.edu.vn
- **GitHub**: nghianguyen7171
- **Website**: https://nghianguyen7171.github.io/

---

**Last Updated**: October 10, 2025  
**Status**: Fully functional and deployed with comprehensive scientific content  

**Recent Major Updates (October 2025)**: 
- **Hospital RRS Project Page - Complete Scientific Redesign**:
  - 325-line comprehensive academic showcase with 10 structured sections
  - Integrated 3 major publications (TVAE, Multi-Gradient Siamese, Federated Learning)
  - Added mathematical formulations (LaTeX equations)
  - Comprehensive performance comparison table (6 models × 7 metrics)
  - Clinical impact quantification with real validation results
  - Professional visual presentation with styled elements
  
- **Jekyll-Scholar Citation System - All Issues Resolved**:
  - Fixed all "(missing reference)" errors through multiple solutions
  - Changed citation keys from numeric to descriptive (nguyen2024siamese, nguyen2024federated)
  - Removed invalid `--file papers` parameter from all cite tags
  - Relocated citations from problematic locations (headings/tables) to proper paragraph placement
  - Cleaned BibTeX entries by removing empty fields
  - All 13 citation instances now render correctly as "(Author et al., Year)"

- **Previous Updates**:
  - Repositories page updated with 11 newest repositories
  - Lectures page optimized as dropdown navigation with direct course links
  - Basic Data Science course link updated to new address (DS_for_Bussiness)
  - AI Workspace Hub added as external navigation link
  - Streamlined navigation for improved user experience
  - All technical issues resolved and website fully operational

**Key Files Modified** (October 2025):
- `_projects/hospital_rrs_project.md` (complete redesign, 325 lines)
- `_bibliography/papers.bib` (fixed citation keys and cleaned entries)
- Git commits: a7baa4c, 9acd6b0, d2a3397, 70c48ec

**Next Session**: Ready for:
- Additional project showcases using Hospital RRS template
- New publication additions as papers are published
- Interactive visualizations or additional features
- Content updates and refinements
