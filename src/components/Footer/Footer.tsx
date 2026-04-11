import { ReactNode } from "react";

interface FooterProps {
  children?: ReactNode;
  author?: string;
  authorUrl?: string;
  className?: string;
}

const Footer = ({ children, author, authorUrl, className = "" }: FooterProps) => {
  return (
    <footer
      className={`mt-auto border-t-2 border-[var(--color-brutal-black)] px-6 py-4 ${className}`}
    >
      {children || (
        <p className="text-center text-xs font-bold uppercase tracking-wider text-[var(--color-brutal-gray)]">
          {authorUrl ? (
            <a
              href={authorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-brutal-black)] transition-colors duration-100"
            >
              {author}
            </a>
          ) : (
            author
          )}
        </p>
      )}
    </footer>
  );
};

export default Footer;
