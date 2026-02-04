import { type NoticesFiltersState } from '@/types/types';
import SearchBox from '../SearchBox/SearchBox';
// import Select from 'react-select';

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
      <button type="button" onClick={onReset}>
        Reset
      </button>
    </form>
  );
}
