import type { ReactNode } from "react";

export type FormChipsProps = {
  children?: ReactNode;
  /** Shown when there are no chips. */
  empty?: ReactNode;
  className?: string;
};

export default function FormChips({ children, empty = "—", className = "" }: FormChipsProps) {
  const hasChips = Array.isArray(children) ? children.length > 0 : Boolean(children);
  if (!hasChips) return <span className="fui-form-chips-empty">{empty}</span>;
  return <span className={`fui-form-chips${className ? ` ${className}` : ""}`}>{children}</span>;
}
