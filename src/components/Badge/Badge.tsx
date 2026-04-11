import type { HTMLAttributes, ReactNode } from "react";

type BadgeVariant = "primary" | "success" | "warning" | "danger" | "info" | "neutral";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: ReactNode;
}

const variantClasses: Record<BadgeVariant, string> = {
  primary: "bg-[var(--color-brutal-blue)] text-white",
  success: "bg-[var(--color-brutal-teal)] text-white",
  warning: "bg-[var(--color-brutal-yellow)] text-[var(--color-brutal-black)]",
  danger: "bg-[var(--color-brutal-red)] text-white",
  info: "bg-[var(--color-brutal-blue)]/20 text-[var(--color-brutal-blue)]",
  neutral: "bg-[var(--color-brutal-cream)] text-[var(--color-brutal-black)]",
};

const Badge = ({ variant = "neutral", children, className = "", ...props }: BadgeProps) => {
  return (
    <span className={`brutal-badge ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </span>
  );
};

export default Badge;
