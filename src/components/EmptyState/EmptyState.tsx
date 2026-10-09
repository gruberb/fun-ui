import type { ReactNode } from "react";

interface EmptyStateProps {
  icon?: ReactNode;
  heading: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  /** `dashed` draws a dashed frame around centred, muted content. */
  variant?: "default" | "dashed";
  className?: string;
}

const EmptyState = ({ icon, heading, description, action, variant = "default", className = "" }: EmptyStateProps) => {
  return (
    <div className={["fui-empty", variant === "dashed" ? "fui-empty--dashed" : "", className].filter(Boolean).join(" ")}>
      {icon && <div className="fui-empty__icon">{icon}</div>}
      <h3 className="fui-empty__heading">{heading}</h3>
      {description && <p className="fui-empty__description">{description}</p>}
      {action && (
        <button type="button" onClick={action.onClick} className="fui-btn fui-btn--secondary">
          {action.label}
        </button>
      )}
    </div>
  );
};

export default EmptyState;
