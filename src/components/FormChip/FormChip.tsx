import type { ComponentPropsWithRef, ReactNode } from "react";

export type FormOutcome = "win" | "draw" | "loss";

export type FormChipProps = Omit<ComponentPropsWithRef<"span">, "children"> & {
  outcome: FormOutcome;
  /** Glyph inside the square. Defaults to W, D or L. */
  children?: ReactNode;
};

const DEFAULT_GLYPH: Record<FormOutcome, string> = { win: "W", draw: "D", loss: "L" };

/** Pass `tabIndex`, `aria-label` and hover handlers through to attach a popover. */
export default function FormChip({ outcome, children, className = "", ...rest }: FormChipProps) {
  return (
    <span className={`fui-form-chip fui-form-chip--${outcome}${className ? ` ${className}` : ""}`} {...rest}>
      {children ?? DEFAULT_GLYPH[outcome]}
    </span>
  );
}
