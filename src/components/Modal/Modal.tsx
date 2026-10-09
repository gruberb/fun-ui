import type { ReactNode } from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  /** Accessible name of the close button. */
  closeLabel?: string;
}

const Modal = ({ isOpen, onClose, title, children, footer, closeLabel = "Close modal" }: ModalProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fui-modal" onClick={onClose}>
      <div
        className="fui-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="fui-modal__head">
          <h2 className="fui-modal__title">{title}</h2>
          <button type="button" onClick={onClose} className="fui-modal__close" aria-label={closeLabel}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="fui-modal__body">{children}</div>

        {footer && <div className="fui-modal__foot">{footer}</div>}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
