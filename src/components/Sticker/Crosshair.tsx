/** Registration mark for the corner of a card. Absolutely positioned (top-right). */
export default function Crosshair({ className = "" }: { className?: string }) {
  return (
    <svg className={`fui-crosshair${className ? ` ${className}` : ""}`} viewBox="0 0 14 14" aria-hidden="true">
      <circle cx="7" cy="7" r="4.5" />
      <path d="M7 0v14M0 7h14" />
    </svg>
  );
}
