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
9. **Project Page Complete Redesign**:
   - Removed all template projects (1_project.md through 9_project.md)
   - Created comprehensive Hospital RRS project showcase
   - Added proper Jekyll front matter with `category: work`
   - Integrated RRS.png and TVAE.png architecture diagrams
   - Added references section with proper citations from bibliography
10. **Repositories Page Update**:
    - Updated `_data/repositories.yml` with newest repositories
    - Reordered by relevance and recency (11 repositories total)
    - Added TVAE-RRS, NEU_Class_Manager, ehr_proccessed, and other recent projects
11. **Lectures Page Creation & Optimization**:
    - Created `lectures.md` as dropdown navigation menu
    - Added Introduction to AI course (EP15.TOKT11121 & EP16.TOKT11121)
    - Added Basic Data Science in Economics and Business (FDA.6.1.2.01.V)
    - Configured dropdown navigation for easy course access
    - Each course title links directly to external course content
    - Streamlined presentation with minimal text
    - Updated Basic DS course link to new address (DS_for_Bussiness)
    - Replaced placeholder `teaching.md` with dropdown lectures navigation
12. **AI Workspace Hub External Link**:
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
2. **BSPC (2025)**: Temporal Variational Autoencoder Model for Clinical Emergency Prediction
3. **IEEE Intelligent Systems (2024)**: Multi-Gradient Siamese Temporal Model
4. **IEEE Access (2024)**: Explainable Deep Contrastive Federated Learning System
5. **Smart Media Journal (2022)**: TabNet-Based System for Water Quality Prediction
6. **Multiple Conference Papers**: MAPR, KIPS, BIGDAS, SMA, CVPRW

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
- **Projects**: Hospital RRS project showcase with architecture diagrams
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

## Current Issues & Considerations

### ✅ Resolved Issues
- All deployment errors fixed
- CV page working correctly
- Publications displaying properly
- Profile information updated

### 🔍 Potential Future Considerations
- Monitor GitHub Actions for any new issues
- Keep publications up to date
- Consider adding more interactive features
- Optimize for mobile performance

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

**Last Updated**: Current session (January 2025)  
**Status**: Fully functional and deployed with comprehensive content  
**Recent Major Updates**: 
- Project page completely redesigned with Hospital RRS showcase
- Repositories page updated with 11 newest repositories
- Lectures page optimized as dropdown navigation with direct course links
- Basic Data Science course link updated to new address (DS_for_Bussiness)
- AI Workspace Hub added as external navigation link
- Streamlined navigation for improved user experience
- All technical issues resolved and website fully operational

**Next Session**: Ready for content updates, new publications, or additional features
