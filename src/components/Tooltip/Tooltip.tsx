import type { ReactNode } from "react";
import { useId, useState } from "react";

interface TooltipProps {
  text: string;
  children: ReactNode;
}

const Tooltip = ({ text, children }: TooltipProps) => {
  const [visible, setVisible] = useState(false);
  const id = useId();

  return (
    <span
      className="fui-tooltip"
      aria-describedby={visible ? id : undefined}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}
      {visible && (
        <span id={id} role="tooltip" className="fui-tooltip__bubble">
          {text}
        </span>
      )}
    </span>
  );
};

export default Tooltip;
