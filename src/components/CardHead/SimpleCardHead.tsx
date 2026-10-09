import type { ReactNode } from "react";

export type SimpleCardHeadProps = {
  title: string;
  action?: ReactNode;
  className?: string;
};

/** Title and a free-form action slot (tabs, a Segmented control) on one wrapping row. */
export default function SimpleCardHead({ title, action, className = "" }: SimpleCardHeadProps) {
  return (
    <header className={`fui-simple-card-head${className ? ` ${className}` : ""}`}>
      <h2 className="fui-card-head__title">{title}</h2>
      {action}
    </header>
  );
}
