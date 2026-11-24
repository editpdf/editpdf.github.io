# EditPDF

**Free, privacy-first online PDF editor and form filler that runs 100% locally in your browser.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-editpdf.github.io-dc2626?style=flat-square)](https://editpdf.github.io/)
[![Astro](https://img.shields.io/badge/Astro-7.x-BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.x-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Privacy](https://img.shields.io/badge/Uploads-Zero%20Server%20Uploads-16a34a?style=flat-square)](#privacy-first-architecture)

![EditPDF Preview](https://res.cloudinary.com/dpx6w78bt/image/upload/f_auto/q_auto/v1786342039/Online_Tool_rc1ybr.png)

---

## Overview

[EditPDF](https://editpdf.github.io/) is a fast, minimalist web application for filling PDF forms, signing documents, annotating text, redacting private details, and organizing pages directly inside your browser. No accounts, no subscriptions, no watermarks, and no cloud uploads.

### Privacy-First Architecture

Unlike conventional online PDF tools that upload sensitive files (such as bank statements, tax returns, or employment contracts) to remote servers, EditPDF executes every operation locally inside your browser tab:

- **Client-side rendering** via `pdfjs-dist` and a local Web Worker (`/pdf.worker.mjs`).
- **Client-side PDF generation** via `pdf-lib` to write annotations, signatures, stamps, and page order directly into the exported file.
- **Static hosting** with zero backend APIs, zero file storage, and zero document tracking.

---

## Key Features

- **Text & Form Filling**: Click anywhere on a PDF page to add or edit text, customize font size, and toggle bold or italic formatting, even on flat or scanned PDFs.
- **Electronic Signatures**: Create signatures in three ways: draw freehand on a canvas, type your name in curated handwritten fonts, or upload a PNG/JPG image, then drag and resize anywhere on the document.
- **Annotations & Redaction**: Highlight key sections in multiple colors, cover errors with whiteout boxes, permanently mask private data with blackout blocks, or sketch freehand notes.
- **Checkmarks, Crosses & Stamps**: Drop crisp checkmarks and crosses onto checkboxes, or apply status stamps (`APPROVED`, `CONFIDENTIAL`, `DRAFT`, or custom text and colors).
- **Page Organization**: Drag-and-drop page reordering and single-click page deletion powered by `@dnd-kit`.
- **Eye Care & Dark/Light Mode**: Built-in Eye Care mode for comfortable late-night PDF reading plus persistent Dark/Light UI themes with an inline anti-FOUC initialization script.
- **Multilingual Support (6 Locales)**: Static subpath routing with localized UI, metadata, canonical URLs, 7 bidirectional `hreflang` tags, and localized JSON-LD structured data (`WebApplication`, `HowTo`, `FAQPage`, and `BreadcrumbList`).

---

## Supported Languages

| Language | Locale | Route |
| :--- | :---: | :--- |
| English (Default) | `en` | [`https://editpdf.github.io/`](https://editpdf.github.io/) |
| Español | `es` | [`https://editpdf.github.io/es/`](https://editpdf.github.io/es/) |
| Português | `pt` | [`https://editpdf.github.io/pt/`](https://editpdf.github.io/pt/) |
| Deutsch | `de` | [`https://editpdf.github.io/de/`](https://editpdf.github.io/de/) |
| Français | `fr` | [`https://editpdf.github.io/fr/`](https://editpdf.github.io/fr/) |
| 日本語 | `ja` | [`https://editpdf.github.io/ja/`](https://editpdf.github.io/ja/) |

---

## Tech Stack

| Layer | Technology |
| :--- | :--- |
| Framework | [Astro](https://astro.build/) (Static Site Generation + built-in i18n) |
| Interactive Islands | [React 19](https://react.dev/) (`@astrojs/react`, `client:only="react"`) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`, class-based dark mode) |
| PDF Rendering | [`pdfjs-dist`](https://mozilla.github.io/pdf.js/) |
| PDF Export & Editing | [`pdf-lib`](https://pdf-lib.js.org/) |
| Drag & Drop | [`@dnd-kit/core`](https://dndkit.com/) & `@dnd-kit/sortable` |
| Icons | [`lucide-react`](https://lucide.dev/) |
| SEO & Sitemap | `@astrojs/sitemap`, Schema.org JSON-LD, `robots.txt`, `hreflang` |

---

## Project Structure

```text
editpdf.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml             # Automated GitHub Pages CI/CD (Node 22)
├── public/
│   ├── favicon.ico                # Fallback browser icon
│   ├── favicon.svg                # Primary SVG brand icon
│   ├── pdf.worker.mjs             # Local PDF.js worker
│   └── robots.txt                 # Crawler rules and sitemap reference
├── src/
│   ├── components/
│   │   ├── Header.astro           # Sticky navbar with LanguagePicker, ThemeToggle & CTA
│   │   ├── LanguagePicker.astro   # Accessible 6-locale switcher with crawlable links
│   │   ├── OrganizeView.jsx       # Drag-and-drop page organizer & page deletion
│   │   ├── PdfEditor.jsx          # Main client-side PDF editor workspace
│   │   ├── SeoContent.astro       # Features, 3-step guide, use cases & FAQ sections
│   │   ├── SignatureModal.jsx     # Type, draw, or upload signature modal
│   │   └── ThemeToggle.astro      # Persistent Dark/Light theme switch
│   ├── i18n/
│   │   ├── schema.ts              # Localized JSON-LD structured data generator
│   │   ├── ui.ts                  # Complete translations for en, es, pt, de, fr, ja
│   │   └── utils.ts               # Locale detection, translation & path helpers
│   ├── layouts/
│   │   └── Layout.astro           # Base shell, anti-FOUC script, OG/Twitter & hreflang
│   ├── pages/
│   │   ├── [lang]/
│   │   │   └── index.astro        # Localized static pages (/es/, /pt/, /de/, /fr/, /ja/)
│   │   └── index.astro            # Default English root page (/)
│   └── styles/
│       └── global.css             # Tailwind CSS v4 entry & class-based dark variant
├── astro.config.mjs               # Site URL, i18n routing & integrations
├── tailwind.config.mjs            # Tailwind darkMode configuration
└── package.json
```

---

## Getting Started

### Prerequisites

- **Node.js** `>= 22.12.0`
- **npm** `>= 10`

### Local Development

```bash
# 1. Clone the repository
git clone https://github.com/editpdf/editpdf.github.io.git
cd editpdf.github.io

# 2. Install dependencies
npm install

# 3. Start the local development server (http://localhost:4321)
npm run dev
```

### Available Commands

| Command | Description |
| :--- | :--- |
| `npm install` | Install project dependencies |
| `npm run dev` | Start the local Astro dev server at `localhost:4321` |
| `npm run build` | Build the static production site and sitemap into `./dist/` |
| `npm run preview` | Preview the production build locally before deploying |

---

## Deployment

This repository deploys automatically to **GitHub Pages** via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) whenever changes are pushed to the `main` branch (or triggered manually via `workflow_dispatch`).

The workflow runs on `ubuntu-latest` with **Node.js 22**, builds all 6 localized static routes along with `sitemap-index.xml`, and publishes the `./dist/` output directly to GitHub Pages.

---

## Contributing

Contributions, bug reports, and translation improvements are welcome:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feat/your-improvement`).
3. Make your changes and verify the static build passes cleanly (`npm run build`).
4. Open a pull request describing your changes.

---

## Support the Developer

EditPDF is completely free, open, and runs with zero ads or paywalls. If this tool saves you time, you can support ongoing development here:

- [Support on Gumroad](https://kisharadilshan.gumroad.com/coffee)
