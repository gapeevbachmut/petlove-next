import { useState } from 'react';
import css from './SearchBox.module.css';
import { useDebouncedCallback } from 'use-debounce';

interface SearchBoxProps {
  onChange: (search: string) => void;
}

export default function SearchBox({ onChange }: SearchBoxProps) {
  const [inputValue, setInputValue] = useState('');

  const debouncedSearch = useDebouncedCallback((value: string) => {
    onChange(value);
  }, 500);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    debouncedSearch(value);
  };

  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search"
      value={inputValue}
      onChange={handleChange}
    />
  );
}
