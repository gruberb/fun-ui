import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  children: ReactNode;
}

const Card = ({ hover = false, children, className = "", ...props }: CardProps) => {
  return (
    <div
      className={`brutal-card p-6 ${hover ? "brutal-card-hover" : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
