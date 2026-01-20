# React Project Guidelines

This is a React.js project built with Vite and TypeScript.

## Project Setup

- Project Type: React with TypeScript
- Build Tool: Vite (rolldown-vite)
- Package Manager: npm

## Available Scripts

- `npm run dev` - Start the development server (runs on http://localhost:5173)
- `npm run build` - Build the project for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build

## Project Structure

```
src/
├── App.tsx          - Main App component
├── App.css          - App styles
├── main.tsx         - Entry point
├── index.css        - Global styles
└── vite-env.d.ts    - Vite environment types
public/             - Static assets
index.html          - HTML template
```

## Key Dependencies

- React 19.2.0
- React DOM 19.2.0
- TypeScript 5.9.3
- Vite (rolldown-vite)
- ESLint with React plugins

## Development Guidelines

- Use TypeScript for all new components
- Follow the existing component structure in `src/`
- Run `npm run lint` before committing code
- Components should be in `.tsx` files
- Styles can use CSS modules or inline styles

## Build & Deploy

To build the project for production:

```bash
npm run build
```

The output will be in the `dist/` folder.
