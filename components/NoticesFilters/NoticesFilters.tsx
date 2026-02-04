import { type NoticesFiltersState } from '@/types/types';
import SearchBox from '../SearchBox/SearchBox';
import Select from 'react-select';
import { useState } from 'react';
import SelectCategory from '../SelectCategory/SelectCategory';
import SelectSex from '../SelectSex/SelectSex';

interface NoticesFiltersProps {
  filters: NoticesFiltersState;
  onChange: (filters: NoticesFiltersState) => void;
  onReset: () => void;
}

export default function NoticesFilters({
  filters,
  onChange,
  onReset,
}: NoticesFiltersProps) {
  const handleSearchChange = (value: string) => {
    onChange({ ...filters, search: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <SearchBox value={filters.search} onSubmit={handleSearchChange} />

      <SelectCategory
        value={filters.category}
        onChange={category =>
          onChange({
            ...filters,
            category,
          })
        }
      />
      <SelectSex
        value={filters.sex}
        onChange={sex =>
          onChange({
            ...filters,
            sex,
          })
        }
      />
      {
        // умова зміни фільтрів
        <button type="button" onClick={onReset}>
          Reset
        </button>
      }
    </form>
  );
}
