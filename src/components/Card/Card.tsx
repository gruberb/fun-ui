import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  children: ReactNode;
}

const Card = ({ hover = false, children, className = "", ...props }: CardProps) => {
  return (
    <div className={`fui-card ${hover ? "fui-card--hover" : ""} ${className}`.trim()} {...props}>
      {children}
    </div>
  );
};

export default Card;
