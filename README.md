# Trong-Nghia Nguyen — Personal Academic Website

Static site built with [Astro](https://astro.build/), hosted on GitHub Pages:

**https://nghianguyen7171.github.io/**

## Pages

- `/` — About
- `/publications/` — Publications
- `/lectures/` — Course links
- `/cv/` — CV summary and PDF download

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy

Pushes to `master` (or `main`) trigger GitHub Actions, which builds Astro and deploys to GitHub Pages.

Ensure **Settings → Pages → Source** is set to **GitHub Actions**.
