'use client';

import { strict } from 'assert';

interface SelectFieldProps {
  label?: string;
  options: string[];
  value: string | null;
  placeholder?: string;
  onChange: (value: string | null) => void;
}

export default function SelectField({
  label,
  options,
  value,
  placeholder,
  onChange,
}: SelectFieldProps) {
  return (
    <label>
      {label && <span>{label}</span>}

      <select
        value={value ?? ''}
        onChange={e => onChange(e.target.value === '' ? null : e.target.value)}
      >
        <option value="">{placeholder}</option>

        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
