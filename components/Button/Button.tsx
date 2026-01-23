import React from 'react';
import css from './Button.module.css';

type ButtonVariant = 'primary' | 'secondary' | 'text' | 'simbol';

type ButtonProps = {
  children: React.ReactNode; //Текст або іконка всередині кнопки
  onClick?: () => void; // Що виконується при кліку
  variant?: ButtonVariant; // стилізація
  disabled?: boolean; //  Чи активна
};

export default function Button({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${css.baseStyles} ${css[variant]} ${
        disabled ? css.disabled : ''
      }`}
    >
      {children}
    </button>
  );
}
