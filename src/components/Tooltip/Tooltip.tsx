import { ReactNode, useState } from "react";

interface TooltipProps {
  text: string;
  children: ReactNode;
}

const Tooltip = ({ text, children }: TooltipProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <span
          className="absolute z-10 w-48 text-center p-2 text-xs bg-[var(--color-brutal-black)] text-white border-2 border-[var(--color-brutal-black)] font-bold pointer-events-none"
          style={{
            bottom: "125%",
            left: "50%",
            marginLeft: "-96px",
            boxShadow: "2px 2px 0px 0px var(--color-brutal-yellow)",
          }}
        >
          {text}
        </span>
      )}
    </span>
  );
};

export default Tooltip;
