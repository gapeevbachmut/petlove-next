'use client';

import css from './SearchBox.module.css';
import { useState, useEffect } from 'react';

interface SearchBoxProps {
  value?: string;
  onSubmit: (value: string) => void;
}

export default function SearchBox({ value = '', onSubmit }: SearchBoxProps) {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSubmit(inputValue.trim());
    }
  };

  const handleClear = () => {
    setInputValue('');
    onSubmit('');
  };

  return (
    <div className={css.wrapper}>
      <input
        className={css.input}
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={event => {
          setInputValue(event.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
      {inputValue && (
        <button
          type="button"
          className={css.buttonClear}
          onClick={handleClear}
          aria-label="Clear search"
        >
          <svg width={18} height={18} className={css.closeSvg}>
            <use href="/images/sprite.svg#icon-cross-small" />
          </svg>
        </button>
      )}

      <button
        type="button"
        className={css.buttonSearch}
        onClick={() => onSubmit(inputValue.trim())}
        aria-label="Search"
      >
        <svg width={18} height={18} className={css.searchSvg}>
          <use href="/images/sprite.svg#icon-search" />
        </svg>
      </button>
    </div>
  );
}
