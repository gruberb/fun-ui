# fun-ui

Spec-sheet React component library (linen paper, aubergine ink, hairline rules). Storybook is the primary development and review tool.

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
- Plain CSS classes prefixed `fui-` (BEM-ish, e.g. `fui-btn fui-btn--primary`), no Tailwind
- Text, aria labels and visually hidden strings are props with English defaults, never hard-coded
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

- Read only `--fui-*` tokens from `src/styles/tokens.css`; never hard-code hex values in component CSS
- Each component has `src/styles/components/<kebab-name>.css`, registered with an `@import` in `core.css` (original components) or `extended.css` (components extracted from Punktespiegel)
- No `border-radius` except pills and circles; no shadows except popovers (`--fui-shadow-pop`)
- Shared helpers live in `base.css` (`fui-kicker`, `fui-label`, `fui-grid-paper`, `fui-visually-hidden`, `fui-num`)
- Fonts: Archivo (text), IBM Plex Mono (labels and data); consumers load them, the library does not bundle them

## Library Export

- Entry point: `src/index.ts` (re-exports `src/extended.ts`) -> builds to `dist/fun-ui.js` (ES module)
- React, ReactDOM, and react/jsx-runtime are external (not bundled)
- Consumer stylesheet: `src/styles/library.css` (exported as `@gruberb/fun-ui/styles`)

## Testing

- Vitest + Playwright (headless Chromium) via `@storybook/addon-vitest`
- Tests run against Storybook story files
- Accessibility addon (`@storybook/addon-a11y`) is configured
