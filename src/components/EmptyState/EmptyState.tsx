import type { ReactNode } from "react";

interface EmptyStateProps {
  icon?: ReactNode;
  heading: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

const EmptyState = ({ icon, heading, description, action }: EmptyStateProps) => {
  return (
    <div className="fui-empty">
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
