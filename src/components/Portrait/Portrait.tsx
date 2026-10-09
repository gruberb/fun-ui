import type { CSSProperties } from "react";
import LogoTile from "../LogoTile/LogoTile";

export type PortraitProps = {
  /** Accessible name of the portrait, e.g. "Photo of Jane Doe". */
  label: string;
  url?: string | null;
  /** Fallback shown behind and instead of the photo. */
  fallbackCode: string;
  fallbackUrl?: string | null;
  size?: "md" | "lg";
  /** Overrides the pixel size (the aspect ratio stays 40:46). */
  width?: number;
  className?: string;
};

export default function Portrait({ label, url, fallbackCode, fallbackUrl, size = "md", width, className = "" }: PortraitProps) {
  const style = width ? ({ "--fui-portrait-width": `${width}px`, "--fui-portrait-height": `${Math.round((width * 46) / 40)}px` } as CSSProperties) : undefined;
  return (
    <span className={`fui-portrait${size === "lg" ? " fui-portrait--lg" : ""}${className ? ` ${className}` : ""}`} style={style} aria-label={label}>
      <LogoTile code={fallbackCode} url={fallbackUrl} size={size} />
      {url && <img src={url} alt="" loading="lazy" onError={(event) => { event.currentTarget.style.display = "none"; }} />}
    </span>
  );
}
