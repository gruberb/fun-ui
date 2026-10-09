import { useId } from "react";
import { DEFAULT_STICKER_BANDS } from "./stickerBands";

export type StickerShape = "trophy" | "ball" | "whistle" | "boot" | "coin" | "flame";

export type StickerProps = {
  shape?: StickerShape;
  /** Hard-stop band colours, top to bottom. */
  bands?: string[];
  /** Character on the coin sticker. */
  glyph?: string;
  className?: string;
};

/**
 * Striped-band sticker. Absolutely positioned: place it inside a `position: relative`
 * parent and move it with --fui-sticker-top / --fui-sticker-right / --fui-sticker-size.
 */
export default function Sticker({ shape = "trophy", bands = DEFAULT_STICKER_BANDS, glyph = "€", className = "" }: StickerProps) {
  // Gradient ids are per instance so several stickers on one page do not share their definitions.
  const id = useId().replace(/:/g, "");
  const outline = shape === "ball" || shape === "coin"
    ? <circle cx="64" cy="64" r="44" />
    : shape === "whistle"
      ? <path d="M44 42h60a6 6 0 0 1 6 6v12a6 6 0 0 1-6 6H76a30 30 0 1 1-32-24z" />
      : shape === "boot"
        ? <path d="M34 22h30v42l30 10c10 3 16 10 16 18v8H34z" />
        : shape === "flame"
          ? <path d="M64 16c6 18 30 30 30 58a30 30 0 0 1-60 0c0-14 8-24 14-30 1 10 6 16 12 18-6-16-2-32 4-46z" />
          : <><path d="M38 22h52v28c0 18-11.6 32-26 32S38 68 38 50z" /><path d="M38 30H24c-1 14 5 24 16 26M90 30h14c1 14-5 24-16 26" fill="none" /><path d="M56 82h16v14H56z" /><path d="M42 96h44v12H42z" /></>;
  return (
    <svg className={`fui-sticker fui-sticker--${shape}${className ? ` ${className}` : ""}`} viewBox="0 0 128 128" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-bands`} x1="0" y1="0" x2="0" y2="1">
          {bands.flatMap((color, index) => [
            <stop key={`${index}a`} offset={index / bands.length} stopColor={color} />,
            <stop key={`${index}b`} offset={(index + 1) / bands.length} stopColor={color} />,
          ])}
        </linearGradient>
      </defs>
      <g className="fui-sticker__halo">{outline}</g>
      <g className="fui-sticker__body" fill={`url(#${id}-bands)`}>{outline}</g>
      {shape === "trophy" && <path className="fui-sticker__ink" d="m64 34 4 8.4 9.2 1.2-6.7 6.4 1.7 9.1L64 54.7l-8.2 4.4 1.7-9.1-6.7-6.4 9.2-1.2z" />}
      {shape === "ball" && <>
        <path className="fui-sticker__ink" d="m64 46 17 12.4-6.5 20H53.5L47 58.4z" />
        <path className="fui-sticker__line" d="M64 46V24M81 58.4l20-6.5M74.5 78.4l12.4 17M53.5 78.4l-12.4 17M47 58.4l-20-6.5" />
      </>}
      {shape === "whistle" && <><circle className="fui-sticker__line" cx="46" cy="74" r="10" /><path className="fui-sticker__ink" d="M88 42h6v8h-6z" /></>}
      {shape === "boot" && <><path className="fui-sticker__line" d="M34 92h76" /><path className="fui-sticker__ink" d="M42 100h8v8h-8zM64 100h8v8h-8zM88 100h8v8h-8z" /><path className="fui-sticker__line" d="M64 64v12" /></>}
      {shape === "coin" && <><circle className="fui-sticker__line" cx="64" cy="64" r="34" /><text className="fui-sticker__glyph" x="64" y="80" textAnchor="middle">{glyph}</text></>}
      {shape === "flame" && <path className="fui-sticker__ink" d="M64 62c3 8 12 12 12 24a12 12 0 0 1-24 0c0-6 4-10 6-13 1 5 3 7 6 8-2-7-1-13 0-19z" />}
    </svg>
  );
}
