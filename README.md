# Website Repository

This repository contains a multi-page website built using **Jekyll** and hosted through **GitHub Pages**.

The website consists of a central homepage and two independent interactive websites:

1. **Intentional Spaces** – A research-based classroom seating and arrangement guide.
2. **Classroom Seating Plan & Arrangement Guide** – An interactive classroom seating chart generator.

---

## Repository Structure

```text
your-repository/
│
├── _config.yml
├── index.md
├── about.md
├── README.md
│
├── _layouts/
│   └── default.html
│
├── _includes/
│   └── navigation.html
│
├── assets/
│   └── css/
│       └── style.css
│
├── site-one/
│   ├── index.html
│   ├── styles.css
│   └── script.js
│
└── site-two/
    ├── index.html
    ├── style.css
    └── script.js
```

---

## File Reference Guide

### Main Website Files

| File | Purpose |
|---|---|
| `index.md` | Main homepage and links to both websites. |
| `about.md` | General information about the website. |
| `_config.yml` | Global Jekyll configuration and website settings. |
| `README.md` | Documentation and reference guide for the repository. |

### Layout and Navigation

| File | Purpose |
|---|---|
| `_layouts/default.html` | Main HTML template shared by Jekyll pages. |
| `_includes/navigation.html` | Navigation bar shared across the main website. |

### Main Website Styling

| File | Purpose |
|---|---|
| `assets/css/style.css` | Controls the appearance of the main homepage, navigation, footer, and shared layout. |

### Site One: Intentional Spaces

| File | Purpose |
|---|---|
| `site-one/index.html` | Main content and structure of Intentional Spaces. |
| `site-one/styles.css` | Visual design, colours, typography, and layout. |
| `site-one/script.js` | Interactive features, diagrams, and tools. |

### Site Two: Classroom Seating Guide

| File | Purpose |
|---|---|
| `site-two/index.html` | Main content and structure of the seating guide. |
| `site-two/style.css` | Visual design, colours, typography, and layout. |
| `site-two/script.js` | Seating chart generation, randomization, and interactive functionality. |

---

## Editing the Website

Different files control different aspects of the website.

| If you want to change... | Edit this file |
|---|---|
| Homepage text | `index.md` |
| Homepage project cards | `index.md` |
| Website title | `_config.yml` |
| Main navigation links | `_includes/navigation.html` |
| Shared page layout | `_layouts/default.html` |
| Main website colours and styling | `assets/css/style.css` |
| Intentional Spaces content | `site-one/index.html` |
| Intentional Spaces design | `site-one/styles.css` |
| Intentional Spaces functionality | `site-one/script.js` |
| Seating Guide content | `site-two/index.html` |
| Seating Guide design | `site-two/style.css` |
| Seating Guide functionality | `site-two/script.js` |

### Understanding the Three Main Web Technologies

**HTML – Structure and Content**

Controls what appears on a webpage, including headings, paragraphs, images, buttons, and sections.

**CSS – Appearance and Design**

Controls how the webpage looks, including colours, fonts, spacing, positioning, and responsive layouts.

**JavaScript – Functionality**

Controls interactive features, including buttons, calculators, generators, animations, and other dynamic elements.

---

## Publishing Changes

The website is hosted through GitHub Pages.

To update the published website:

1. Open the relevant file in the GitHub repository.
2. Click the pencil icon to edit.
3. Make your changes.
4. Click **Commit changes**.
5. GitHub Pages automatically rebuilds and republishes the website.

Changes may take a few minutes to appear.

---

## Important Notes

- Keep the two independent websites in their respective folders.
- Keep each website's HTML, CSS, and JavaScript files together.
- Avoid changing filenames unless you also update the corresponding references in the HTML.
- Test interactive features after making JavaScript changes.
- The main Jekyll layout is intended for the central website. The two independent websites retain their own designs and styling.
- The seating guide uses browser local storage for seating information. Avoid storing identifiable student information on shared devices.

---

## Technology

- **Jekyll:** Static site generator.
- **GitHub:** Source code repository and version control.
- **GitHub Pages:** Website hosting.
- **HTML:** Website structure.
- **CSS:** Website styling.
- **JavaScript:** Interactive functionality.
