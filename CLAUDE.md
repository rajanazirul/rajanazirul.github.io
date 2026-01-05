# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Raja Nazirul, hosted on GitHub Pages. Static site built with Jekyll and vanilla JavaScript.

## Development Commands

```bash
# Install dependencies
bundle install

# Run local development server
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000`.

## Architecture

### Static Site Structure
- **Single-page application**: All content in `index.html` with section-based navigation (home, about, portfolio, contact)
- **Jekyll**: Used only for SCSS compilation and local development server (no layouts, includes, or posts)
- **Build output**: `_site/` directory (gitignored)

### Key Files

| File | Purpose |
|------|---------|
| `index.html` | Complete site markup with all sections |
| `style/style.scss` | All styles with SCSS variables for theming |
| `scripts/index.js` | Navigation, scroll animations, contact form (jQuery) |
| `scripts/modal.js` | Portfolio project modal with carousel and project data |
| `scripts/canvas.js` | Interactive particle animation on home section (Pt.js) |
| `scripts/typing.js` | Typewriter text rotation effect |

### External Dependencies (CDN)
- jQuery 2.2.0
- MixItUp 2.1.11 (portfolio filtering)
- Waypoints 4.0.0 (scroll-triggered animations)
- Prefixfree 1.0.7 (CSS vendor prefixes)
- Pt.js (canvas animation, loaded locally but referenced in canvas.js)

### Styling
- **Color scheme**: Primary (`#04c2c9`), Secondary/Accent (`#e31b6d`), Dark (`#1b242f`)
- **Font**: Raleway (local TTF files in `fonts/`)
- **Icons**: Material Design Icons (local copy in `fonts/mdi/`)
- **Responsive**: Mobile-first with breakpoints at 400px, 600px, 960px, 1280px

### Portfolio System
Project data is defined in `scripts/modal.js` as the `modalText` object. Each project has:
- `title`, `tag`, `detail`, and optional `link`
- Images at `img/slides/{project-id}-{0,1,2}.jpg`
- Thumbnails at `img/thumb-{n}.jpg`

To add a project: update `modalText`, add images, and create a gallery card in `index.html`.

### Contact Form
Uses Formspree for form submission (configured to `rajanazirul93@gmail.com`).
