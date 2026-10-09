import type { ReactNode } from "react";

export type PageHeaderProps = {
  title: string;
  /** Secondary line set under the title in muted type. */
  titleNote?: string;
  /** Mono kicker above the title. Omitted when not given. */
  eyebrow?: string;
  description?: string;
  /** Right-hand slot, e.g. selectors. Wraps below the title on narrow screens. */
  controls?: ReactNode;
  /** `hero` is a full-bleed grid-paper band. */
  variant?: "default" | "hero";
  ariaLabel?: string;
  className?: string;
};

export default function PageHeader({
  title,
  titleNote,
  eyebrow,
  description,
  controls,
  variant = "default",
  ariaLabel,
  className = "",
}: PageHeaderProps) {
  return (
    <section
      className={`fui-page-header fui-page-header--${variant}${variant === "hero" ? " fui-grid-paper" : ""}${className ? ` ${className}` : ""}`}
      aria-label={ariaLabel}
    >
      <div className="fui-page-header__intro">
        {eyebrow && <p className="fui-kicker">{eyebrow}</p>}
        <h1 className="fui-page-header__title">
          {title}
          {titleNote && <span className="fui-page-header__note">{titleNote}</span>}
        </h1>
        {description && <p className="fui-page-header__description">{description}</p>}
      </div>
      {controls}
    </section>
  );
}
