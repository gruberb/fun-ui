import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

const Button = ({
  variant = "primary",
  size = "md",
  type = "button",
  children,
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`fui-btn fui-btn--${variant} fui-btn--${size} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
