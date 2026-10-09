interface LiveIndicatorProps {
  label?: string;
}

const LiveIndicator = ({ label = "Live" }: LiveIndicatorProps) => {
  return (
    <span className="fui-live">
      <span className="fui-live__dot" aria-hidden="true" />
      <span className="fui-live__label fui-label">{label}</span>
    </span>
  );
};

export default LiveIndicator;
