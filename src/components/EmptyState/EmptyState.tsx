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
    <div className="text-center py-12 px-4">
      {icon && (
        <div className="w-16 h-16 mx-auto mb-4 text-[var(--color-brutal-gray)]/40">
          {icon}
        </div>
      )}
      <h3 className="text-lg mb-1">{heading}</h3>
      {description && (
        <p className="text-sm text-[var(--color-brutal-gray)] max-w-sm mx-auto">
          {description}
        </p>
      )}
      {action && (
        <button
          onClick={action.onClick}
          className="brutal-btn brutal-btn-secondary mt-4 px-4 py-2 text-sm"
        >
          {action.label}
        </button>
      )}
    </div>
  );
};

export default EmptyState;
