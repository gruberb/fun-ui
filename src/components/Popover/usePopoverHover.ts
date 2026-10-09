import { useId, useRef, useState } from "react";

/** Hover and keyboard focus both open a popover; either one keeps it open. */
export default function usePopoverHover<Element extends HTMLElement = HTMLElement>(onOpen?: () => void) {
  const ref = useRef<Element>(null);
  const id = useId();
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const open = hovered || focused;
  return {
    ref,
    id,
    open,
    /** Spread onto the anchor element. */
    handlers: {
      "aria-describedby": open ? id : undefined,
      onMouseEnter: () => { setHovered(true); onOpen?.(); },
      onMouseLeave: () => setHovered(false),
      onFocus: () => { setFocused(true); onOpen?.(); },
      onBlur: () => setFocused(false),
    },
  };
}
