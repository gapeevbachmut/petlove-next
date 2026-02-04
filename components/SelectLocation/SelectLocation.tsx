'use client';

import Select from 'react-select';

interface LocationOption {
  value: string;
  label: string;
}

interface SelectLocationProps {
  value: string | null;
  options: LocationOption[];
  onChange: (value: string | null) => void;
}

export default function SelectLocation({
  value,
  options,
  onChange,
}: SelectLocationProps) {
  const selecteOption = options.find(option => option.value === value) ?? null;

  return (
    <Select
      options={options}
      value={selecteOption}
      placeholder="Location"
      onChange={option =>
        onChange(option ? (option as LocationOption).value : null)
      }
      isClearable
    />
  );
}
