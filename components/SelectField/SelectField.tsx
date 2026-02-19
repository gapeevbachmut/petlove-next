'use client';

import css from './SelectField.module.css';

interface SelectFieldProps {
  options: string[];
  value: string | null;
  placeholder?: string;
  showAllLabel?: string;
  onChange: (value: string | null) => void;
}

export default function SelectField({
  options,
  value,
  placeholder,
  showAllLabel = 'Show all',
  onChange,
}: SelectFieldProps) {
  const change = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = event.target.value;

    if (selected === '__all__') {
      onChange(null);
      return;
    }

    if (selected === '__placeholder__') {
      return;
    }

    onChange(selected);
  };
  return (
    <label className={css.labelField}>
      <select
        className={css.labelSelect}
        value={value ?? '__placeholder__'}
        onChange={change}
      >
        {/* PLACEHOLDER — показується одразу */}
        <option value="__placeholder__" className={css.placeholder} disabled>
          {placeholder}
        </option>

        {/* SHOW ALL — скидає фільтр */}
        <option value="__all__" className={css.optionAll}>
          {showAllLabel}
        </option>

        {options.map(option => (
          <option key={option} value={option} className={css.value}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
