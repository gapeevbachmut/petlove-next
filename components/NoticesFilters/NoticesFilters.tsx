import { LocationOption, type NoticesFiltersState } from '@/types/types';
import SearchBox from '../SearchBox/SearchBox';
import SelectCategory from '../SelectCategory/SelectCategory';
import SelectSex from '../SelectSex/SelectSex';
import SelectSpecies from '../SelectSpecies/SelectSpecies';
import SelectLocation from '../SelectLocation/SelectLocation';
import SortRadio from '../SortRadio/SortRadio';

interface NoticesFiltersProps {
  filters: NoticesFiltersState;
  locationOptions: LocationOption[];

  onChange: (filters: NoticesFiltersState) => void;
  onReset: () => void;
}

export default function NoticesFilters({
  filters,
  locationOptions,
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
      <SelectSpecies
        value={filters.species}
        onChange={species =>
          onChange({
            ...filters,
            species,
          })
        }
      />
      {/* API повертає тільки ідентифікатор локації без 
      текстового представлення. Через відсутність ендпоїнта 
      для локацій фільтрація реалізована по доступному ID
       з використанням react-select. */}
      <SelectLocation
        value={filters.location}
        options={locationOptions}
        onChange={location =>
          onChange({
            ...filters,
            location,
          })
        }
      />
      <SortRadio
        value={filters.sortBy}
        onChange={sortBy =>
          onChange({
            ...filters,
            sortBy,
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
