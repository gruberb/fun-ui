import type { ReactNode } from "react";

interface FooterProps {
  children?: ReactNode;
  author?: string;
  authorUrl?: string;
  className?: string;
}

const Footer = ({ children, author, authorUrl, className = "" }: FooterProps) => {
  return (
    <footer className={`fui-footer ${className}`.trim()}>
      {children || (
        <p className="fui-footer__credit">
          {authorUrl ? (
            <a href={authorUrl} target="_blank" rel="noopener noreferrer">
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
