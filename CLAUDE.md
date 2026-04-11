# fun-ui

Brutalist React component library. Storybook is the primary development and review tool.

## Commands

```bash
npm run storybook        # Dev: Storybook on port 6006
npm run dev              # Dev: Vite dev server
npm run build            # tsc -b && vite build (type-check + library)
npm run build:lib        # vite build (library only, no type-check)
npm run lint             # eslint .
npm run build-storybook  # Static Storybook build
```

## Code Style

- ES modules (`import`/`export`), never CommonJS
- Functional components with arrow functions, default export from the component file
- Props interfaces extend native HTML attributes (e.g., `ButtonHTMLAttributes<HTMLButtonElement>`)
- Variants use string union types, not enums
- Tailwind utility classes combined with custom BEM-like classes from `brutal.css` (e.g., `brutal-btn`, `brutal-btn-primary`, `brutal-card`)
- Template literal classNames: `` `brutal-btn brutal-btn-${variant} ${sizeClasses[size]} ${className}` ``
- Storybook story imports use `@storybook/react-vite`, not `@storybook/react`

## Component Structure

Each component lives in `src/components/ComponentName/` with:
- `ComponentName.tsx` -- implementation (default export)
- `ComponentName.stories.tsx` -- Storybook stories
- `index.ts` -- re-exports as named export (`export { default as ComponentName }`)

New components must be added to `src/index.ts` (barrel file) under the correct category comment.

## Storybook Stories

- Use `satisfies Meta<typeof Component>` pattern for meta
- Story titles follow category convention: `Primitives/`, `Feedback/`, `Layout/`, `Data Display/`
- Include individual variant stories + a combined `AllVariants` or `AllSizes` render story when applicable

## Styling Rules

- NEVER use `border-radius` -- all elements have sharp corners
- Shadows use CSS variables: `var(--shadow-brutal)` (4px) or `var(--shadow-brutal-sm)` (2px)
- Hover effect pattern: `transform: translate(2px, 2px)` + `box-shadow: none`
- New shared component styles go in `src/styles/brutal.css` inside `@layer components`
- Component-specific animations go in `src/styles/animations.css`
- Colors, fonts, and shadows are defined as CSS variables in `globals.css` AND as Tailwind `@theme` tokens -- keep both in sync
- Fonts: Space Grotesk for display/headings, Inter for body text

## Library Export

- Entry point: `src/index.ts` -> builds to `dist/fun-ui.js` (ES module)
- React, ReactDOM, and react/jsx-runtime are external (not bundled)
- Consumer stylesheet: `src/styles/library.css` (exported as `fun-ui/styles`)
- When adding new CSS variables or `@theme` tokens, update both `globals.css` and `library.css`

## Testing

- Vitest + Playwright (headless Chromium) via `@storybook/addon-vitest`
- Tests run against Storybook story files
- Accessibility addon (`@storybook/addon-a11y`) is configured
