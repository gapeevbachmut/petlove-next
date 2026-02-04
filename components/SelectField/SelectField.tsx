'use client';

import { strict } from 'assert';

interface SelectFieldProps {
  // label?: string;
  options: string[];
  value: string | null;
  placeholder?: string;
  showAllLabel?: string;
  onChange: (value: string | null) => void;
}

export default function SelectField({
  // label,
  options,
  value,
  placeholder,
  showAllLabel = 'Show all',
  onChange,
}: SelectFieldProps) {
  return (
    <label>
      <select
        value={value ?? '__placeholder__'}
        onChange={e => {
          const selected = e.target.value;

          if (selected === '__all__') {
            onChange(null);
            return;
          }

          if (selected === '__placeholder__') {
            return;
          }

          onChange(selected);
        }}
      >
        {/* <option value="">{placeholder}</option> */}

        {/* PLACEHOLDER — показується одразу */}
        <option value="__placeholder__" disabled>
          {placeholder}
        </option>

        {/* SHOW ALL — скидає фільтр */}
        <option value="__all__">{showAllLabel}</option>

        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
