type Status = "positive" | "negative" | "warning" | "info";

interface StatusBoxProps {
  title: string;
  status: Status;
  label: string;
  description?: string;
}

const defaultLabel: Record<Status, string> = {
  positive: "Yes",
  negative: "No",
  warning: "Maybe",
  info: "Info",
};

const StatusBox = ({ title, status, label, description }: StatusBoxProps) => {
  return (
    <div className={`fui-card fui-status fui-status--${status}`}>
      <h2 className="fui-status__title fui-label">{title}</h2>
      <div className="fui-status__value">{label || defaultLabel[status]}</div>
      {description && <div className="fui-status__description">{description}</div>}
    </div>
  );
};

export default StatusBox;
