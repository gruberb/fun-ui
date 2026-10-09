import { useLayoutEffect, useRef, useState } from "react";
import type { ReactNode, RefObject } from "react";
import { createPortal } from "react-dom";

export type PopoverProps = {
  anchorRef: RefObject<HTMLElement | null>;
  open: boolean;
  /** Matches the anchor's aria-describedby (see usePopoverHover). */
  id: string;
  /** Maximum width in px; shrinks to fit the viewport. */
  preferredWidth?: number;
  className?: string;
  children: ReactNode;
};

const MARGIN = 12;
const GAP = 8;

/** Non-interactive tooltip panel, portalled to body and clamped to the viewport. */
export default function Popover({ anchorRef, open, id, preferredWidth = 320, className = "", children }: PopoverProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ top: number; left: number; width: number } | null>(null);

  useLayoutEffect(() => {
    if (!open) return;
    const update = () => {
      const anchor = anchorRef.current;
      const panel = panelRef.current;
      if (!anchor || !panel) return;
      const viewportWidth = document.documentElement.clientWidth;
      const viewportHeight = window.innerHeight;
      const width = Math.min(preferredWidth, viewportWidth - MARGIN * 2);
      const box = anchor.getBoundingClientRect();
      const height = Math.min(panel.offsetHeight, viewportHeight - MARGIN * 2);
      const roomAbove = box.top - MARGIN;
      const roomBelow = viewportHeight - box.bottom - MARGIN;
      const below = roomBelow >= height + GAP || roomBelow >= roomAbove;
      const desiredTop = below ? box.bottom + GAP : box.top - height - GAP;
      const top = Math.max(MARGIN, Math.min(desiredTop, viewportHeight - height - MARGIN));
      const left = Math.max(MARGIN, Math.min(box.left + box.width / 2 - width / 2, viewportWidth - width - MARGIN));
      setPosition({ top, left, width });
    };
    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, true);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update, true);
    };
  }, [open, preferredWidth, anchorRef]);

  if (!open) return null;
  return createPortal(
    <div
      ref={panelRef}
      id={id}
      role="tooltip"
      className={`fui-popover${className ? ` ${className}` : ""}`}
      style={{ top: position?.top ?? 0, left: position?.left ?? 0, width: position?.width ?? preferredWidth, visibility: position ? "visible" : "hidden" }}
    >
      {children}
    </div>,
    document.body,
  );
}
