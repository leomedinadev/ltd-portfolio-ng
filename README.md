# Leonardo Medina – Personal Portfolio 🌟

A modern, responsive personal portfolio built with Angular 21 and Tailwind CSS v4, showcasing my professional experience, projects, and technical skills.

**Live site:** [leomedinadev.github.io/ltd-porfolio-ng](https://leomedinadev.github.io/ltd-porfolio-ng/)

---

## Description

This is a single-page portfolio application with no routing — all sections render as a vertical stack. It features a dark-mode-first design, smooth UI interactions, and is deployed to GitHub Pages. All portfolio content (bio, experience, projects, links) is centralized in a single constants file for easy maintenance.

**Tech stack:**
- [Angular 21](https://angular.dev) — standalone components, signals
- [Tailwind CSS v4](https://tailwindcss.com) — via PostCSS plugin
- [SCSS](https://sass-lang.com) — component-level styles
- [Vitest](https://vitest.dev) — unit testing
- [angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages) — GitHub Pages deployment

---

## Installation

**Prerequisites:** Node.js ≥ 20 and npm ≥ 10.

```bash
# Clone the repository
git clone https://github.com/leomedinadev/ltd-porfolio-ng.git
cd ltd-porfolio-ng

# Install dependencies
npm install
```

---

## Usage

```bash
# Start the development server (http://localhost:4300)
npm start

# Run unit tests
npm test

# Run a single test file
npx ng test --include="src/app/core/theme-service.spec.ts"

# Development build
npm run build

# Production build (sets base-href for GitHub Pages)
npm run build:pro

# Analyze bundle size
npm run analyze
```

### Updating portfolio content

All personal data — bio, experience entries, projects, and social links — lives in one place:

```
src/app/commons/constants.ts
```

Edit the `Constants.PROFILE_DEV` object to update any section of the site.

### Deployment

```bash
# Build for production and deploy to GitHub Pages
npm run build:pro
npx ng deploy
```

---

## Contributing

Contributions, suggestions, and feedback are welcome.

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to the branch: `git push origin feat/your-feature`
5. Open a Pull Request

Please follow the existing code style (Prettier config is included in `package.json`) and make sure all tests pass before submitting a PR.

---

<p align="center">Made with ❤️ by <a href="https://github.com/leomedinadev">Leonardo Medina</a></p>
