# fun-ui

A React component library with a spec-sheet design: linen paper, aubergine ink, hairline rules, mono uppercase annotations, square controls. Colours come from the "Welcome home" embroidery palette (Meditations in Color). One light theme, no Tailwind, plain CSS.

## Tech Stack

- **React 19** + **TypeScript 6**
- **Vite 8** (ES module library build)
- Plain CSS: `--fui-*` tokens and `fui-*` classes, no runtime styling
- **Storybook 10** for component development and documentation

## Getting Started

```bash
npm install
npm run storybook        # http://localhost:6006
npm run build            # type-check + library build
npm run build-storybook  # static Storybook site
npm run lint
```

## Use in an app

```bash
npm install @gruberb/fun-ui
npm install @fontsource-variable/archivo @fontsource/ibm-plex-mono
```

```ts
import "@fontsource-variable/archivo";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@gruberb/fun-ui/styles";
```

```tsx
import { AppShell, PageHeader, DataTable, Button } from "@gruberb/fun-ui";
```

Fonts are not bundled. `@gruberb/fun-ui/styles` brings the tokens, document defaults (paper background, focus ring) and all component styles. Override any `--fui-*` token on `:root` to adjust the look.

## Components

**Primitives** -- Button, Card, Badge, SearchInput, StepperSelect, Segmented, Tag, LogoTile, Portrait, Sticker

**Feedback** -- LoadingSpinner (spinner and skeleton), ErrorMessage, ErrorBoundary, StatusBox, EmptyState, StarRating, ProgressBar, Modal, Notice, Popover

**Layout and navigation** -- AppShell, PageHeader, CardHead, TabNavigation, Footer

**Data display** -- DataTable, StatCard, LiveIndicator, Tooltip, FormChip, TrendBadge, MatchTile

## Design system

**Fonts** -- Archivo (text and headings), IBM Plex Mono (labels, data)

**Palette** -- 12 swatches as `--fui-red`, `--fui-azure`, `--fui-sap` and so on, plus role tokens: `--fui-paper`, `--fui-panel`, `--fui-raised`, `--fui-ink`, `--fui-accent`, `--fui-win`, `--fui-loss`, `--fui-warn`, `--fui-series-1..4`

**Rules** -- 1px hairlines (`--fui-line`, `--fui-line-strong`), no shadows except popovers (`--fui-shadow-pop`), no border-radius except pills and circles

## Project structure

```
src/
  components/       # One directory per component (tsx + stories + index)
  styles/
    tokens.css      # --fui-* design tokens
    base.css        # Document defaults and shared helpers
    components/     # One stylesheet per component; core.css and extended.css list them
    animations.css  # Keyframes
    library.css     # Consumer stylesheet export
  index.ts          # Public exports (core components, re-exports ./extended)
  extended.ts       # Public exports (components extracted from Punktespiegel)
.storybook/         # Storybook config
```
