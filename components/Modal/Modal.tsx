'use client';

import css from './Modal.module.css';
import { createPortal } from 'react-dom';
import { useEffect, useState, type ReactNode } from 'react';
import Button from '../Button/Button';

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ onClose, children }: ModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden'; // Заборона прокрутки фону
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = ''; // повертаю прокрутку фону
      document.documentElement.style.overflow = '';
    };
  }, [onClose]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!mounted) return null;

  return createPortal(
    <div
      className={css.backdrop}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      <div className={css.modal}>
        <Button
          className={css.closeButton}
          variant="quaternary"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg width={30} height={30}>
            <use href="/images/x.svg"></use>
          </svg>
        </Button>

        {children}
      </div>
    </div>,
    document.body
  );
}
