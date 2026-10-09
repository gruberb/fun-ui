import { useState } from "react";
import type { CSSProperties } from "react";

export type LogoTileProps = {
  /** Short text shown until (or instead of) the image, e.g. a team code. */
  code: string;
  url?: string | null;
  /** `md` 32px, `lg` 44px, or a pixel size. */
  size?: "md" | "lg" | number;
  /** Accessible name; defaults to `code`. */
  label?: string;
  className?: string;
};

export default function LogoTile({ code, url, size = "md", label, className = "" }: LogoTileProps) {
  // Keyed by url so a new url starts fresh without a reset effect.
  const [loadedUrl, setLoadedUrl] = useState<string | null>(null);
  const [failedUrl, setFailedUrl] = useState<string | null>(null);
  const loaded = Boolean(url) && loadedUrl === url;
  const showImage = Boolean(url) && failedUrl !== url;
  const style = typeof size === "number" ? ({ "--fui-logo-size": `${size}px` } as CSSProperties) : undefined;
  return (
    <span
      className={`fui-logo-tile${size === "lg" ? " fui-logo-tile--lg" : ""}${className ? ` ${className}` : ""}`}
      style={style}
      aria-label={label ?? code}
    >
      {!loaded && <span className="fui-logo-tile__fallback">{code}</span>}
      {url && showImage && (
        <img src={url} alt="" loading="lazy" onLoad={() => setLoadedUrl(url)} onError={() => setFailedUrl(url)} />
      )}
    </span>
  );
}
