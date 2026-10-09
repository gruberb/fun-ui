import type { HTMLAttributes, ReactNode } from "react";

type BadgeVariant = "win" | "loss" | "warn" | "accent" | "neutral";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: ReactNode;
}

const Badge = ({ variant = "neutral", children, className = "", ...props }: BadgeProps) => {
  return (
    <span className={`fui-badge fui-badge--${variant} ${className}`.trim()} {...props}>
      {children}
    </span>
  );
};

export default Badge;
