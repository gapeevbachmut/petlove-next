'use client';

import css from './SearchBox.module.css';

interface SearchBoxProps {
  onSubmit: (value: string) => void;
}

export default function SearchBox({ onSubmit }: SearchBoxProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const value = (formData.get('searchValue') as string) ?? '';

    onSubmit(value.trim());
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        type="text"
        placeholder="Search"
        name="searchValue"
      />
      <button className={css.button} type="submit">
        Search
      </button>
    </form>
  );
}
