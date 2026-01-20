# Atul's Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite featuring a beautiful card-based design.

## 🔗 Live Portfolio

**View the live portfolio here:** https://Atul-IIITR.github.io/Hey/

## 📦 Repository

**GitHub Repository:** https://github.com/Atul-IIITR/Hey

## 🚀 Features

- Modern card-based UI design
- Fully responsive layout
- Smooth animations and transitions
- Experience and project showcases
- Technical skills section
- Achievements display
- Contact information
- Fast performance with Vite

## 💻 Local Development

To run the portfolio locally:

```bash
# Clone the repository
git clone https://github.com/Atul-IIITR/Hey.git
cd Hey

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173/`

## 🔨 Build

To build for production:

```bash
npm run build
npm run preview
```

## 📋 Project Structure

```
src/
├── App.tsx          - Main component
├── App.css          - Styles
├── main.tsx         - Entry point
├── index.css        - Global styles
└── assets/          - Images and assets
```

## 🛠 Technologies

- React 19.2.0
- TypeScript 5.9.3
- Vite (rolldown-vite)
- CSS3
- GitHub Pages (Deployment)

## 📝 React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
