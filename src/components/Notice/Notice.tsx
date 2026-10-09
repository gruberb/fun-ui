import type { ReactNode } from "react";

export type NoticeTone = "neutral" | "warn" | "error";

export type NoticeProps = {
  tone?: NoticeTone;
  /** Bold lead-in before the message. */
  title?: string;
  children: ReactNode;
  className?: string;
};

/** Dashed mono status box; `error` is announced as an alert, the rest as status. */
export default function Notice({ tone = "neutral", title, children, className = "" }: NoticeProps) {
  return (
    <p className={`fui-notice fui-notice--${tone}${className ? ` ${className}` : ""}`} role={tone === "error" ? "alert" : "status"}>
      {title && <strong>{title}</strong>}{title && " "}{children}
    </p>
  );
}
