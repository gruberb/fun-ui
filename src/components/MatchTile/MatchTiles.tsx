import type { ReactNode } from "react";

/** Wrapping grid of MatchTile items; wraps instead of scrolling sideways. */
export default function MatchTiles({ children, ariaLabel }: { children: ReactNode; ariaLabel?: string }) {
  return <ol className="fui-match-tiles" aria-label={ariaLabel}>{children}</ol>;
}
