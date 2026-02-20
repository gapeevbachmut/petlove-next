import React from 'react';
import css from './Button.module.css';
import clsx from 'clsx';

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'quaternary'
  | 'text'
  | 'simbol';

type ButtonProps = {
  children: React.ReactNode; //Текст або іконка всередині кнопки
  onClick?: () => void; // Що виконується при кліку
  variant?: ButtonVariant; // стилізація
  disabled?: boolean; //  Чи активна
  // type?: string;
  className?: string;
};

export default function Button({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  // type,
  className,
}: ButtonProps) {
  return (
    <button
      // type="button"
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        css.baseStyles,
        css[variant],
        disabled && css.disabled,
        className
      )}
    >
      {children}
    </button>
  );
}
