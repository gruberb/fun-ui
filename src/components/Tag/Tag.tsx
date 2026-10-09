import type { HTMLAttributes, ReactNode } from "react";

export type TagSeries = 1 | 2 | 3 | 4;

export type TagProps = HTMLAttributes<HTMLSpanElement> & {
  /** Picks the square's colour from --fui-series-N. Neutral when omitted. */
  series?: TagSeries;
  children: ReactNode;
};

export default function Tag({ series, children, className = "", ...rest }: TagProps) {
  return (
    <span className={`fui-tag${series ? ` fui-tag--series-${series}` : ""}${className ? ` ${className}` : ""}`} {...rest}>
      {children}
    </span>
  );
}
