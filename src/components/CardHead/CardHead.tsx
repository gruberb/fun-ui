import type { ReactNode } from "react";

export type CardHeadProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  /** Right-aligned slot; plain buttons and links are styled as text links. */
  action?: ReactNode;
  className?: string;
};

export default function CardHead({ eyebrow, title, subtitle, action, className = "" }: CardHeadProps) {
  return (
    <header className={`fui-card-head${className ? ` ${className}` : ""}`}>
      <div>
        {eyebrow && <p className="fui-kicker">{eyebrow}</p>}
        <h2 className="fui-card-head__title">{title}</h2>
        {subtitle && <span className="fui-card-head__subtitle">{subtitle}</span>}
      </div>
      {action && <div className="fui-card-head__action">{action}</div>}
    </header>
  );
}
