# fun-ui

A React component library with a brutalist design aesthetic. Bold typography, sharp borders, chunky shadows, zero border-radius.

## Tech Stack

- **React 19** + **TypeScript 6**
- **Vite 8** (ES module library build)
- **Tailwind CSS 4** + custom CSS layers
- **Storybook 10** for component development and documentation

## Getting Started

```bash
npm install
```

### Development

```bash
# Run Storybook (component playground)
npm run storybook        # http://localhost:6006

# Run Vite dev server (demo page)
npm run dev
```

### Build

```bash
npm run build            # Type-check + library build
npm run build:lib        # Library build only (skip type-check)
npm run build-storybook  # Static Storybook site
```

### Quality

```bash
npm run lint             # ESLint
```

## Components

**Primitives** -- Button, Card, Badge, SearchInput

**Feedback** -- LoadingSpinner, ErrorMessage, ErrorBoundary, StatusBox, EmptyState, StarRating, ProgressBar, Modal

**Layout & Navigation** -- PageHeader, TabNavigation, Footer

**Data Display** -- DataTable, StatCard, LiveIndicator, Tooltip

## Usage as a Library

```tsx
import { Button, Card, Badge } from "fun-ui";
```

Consumers must also import the stylesheet after Tailwind:

```css
@import "tailwindcss";
@import "fun-ui/styles";
```

## Design System

**Fonts** -- Space Grotesk (display/headings), Inter (body)

**Colors** -- `brutal-blue` (primary), `brutal-red` (danger), `brutal-yellow` (warning), `brutal-green` (success), plus pink, teal, orange, purple, gray

**Shadows** -- `shadow-brutal` (4px offset), `shadow-brutal-sm` (2px offset)

**Hover effect** -- `translate(2px, 2px)` with shadow removal

All headings are uppercase with `letter-spacing: 0.05em`. No border-radius anywhere.

## Project Structure

```
src/
  components/       # One directory per component (tsx + stories + index)
  styles/
    globals.css     # Tailwind imports + CSS variables + base styles
    brutal.css      # Component classes (@layer components)
    animations.css  # Keyframe animations
    library.css     # Consumer-facing stylesheet export
  index.ts          # Barrel file (all public exports)
.storybook/         # Storybook config (main.ts, preview.ts, preview-head.html)
```
