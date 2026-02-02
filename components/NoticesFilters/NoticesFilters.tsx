import { NoticesFiltersState } from '@/types/types';
import SearchBox from '../SearchBox/SearchBox';
import Select from 'react-select';
import { useState } from 'react';

type FiltersProps = {
  value: NoticesFiltersState;
  onChange: (next: NoticesFiltersState) => void;
  onReset: () => void;
};

export default function NoticesFilters() {
  // { value, onChange, onReset, }: FiltersProps
  //   const update = (patch: Partial<NoticesFiltersState>) => {
  //     onChange({ ...value, ...patch });
  //   };
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');

  const handleSearchChange = (value: string) => {
    setCurrentPage(1);
    setSearch(value);
  };

  return (
    <form>
      <SearchBox onSubmit={handleSearchChange} />
    </form>
    // <form>
    //   <SearchBox
    //     onSubmit={value => update({ search: value })}
    //     // value={value.search}
    //     // onChange={v => update({ search: v })}
    //   />
    //   <Select
    //     placeholder="Category"
    //     options={/* categories from backend */}
    //     onChange={opt => update({ category: opt?.value ?? null })}
    //   />
    //   <Select
    //     placeholder="By gender"
    //     options={/* genders */}
    //     onChange={opt => update({ gender: opt?.value ?? null })}
    //   />
    //   <Select
    //     placeholder="By type"
    //     options={/* types */}
    //     onChange={opt => update({ type: opt?.value ?? null })}
    //   />

    //   <Select
    //     placeholder="Location"
    //     options={/* cities */}
    //     onChange={opt => update({ location: opt?.value ?? null })}
    //   />
    //   {/* SORT */}
    //   <div>
    //     <label>
    //       <input
    //         type="radio"
    //         checked={value.sortBy === 'popular'}
    //         onChange={() => update({ sortBy: 'popular' })}
    //       />
    //       Popular
    //     </label>

    //     <label>
    //       <input
    //         type="radio"
    //         checked={value.sortBy === 'price'}
    //         onChange={() => update({ sortBy: 'price' })}
    //       />
    //       Price
    //     </label>
    //   </div>

    //   <button type="button" onClick={onReset}>
    //     Reset
    //   </button>
    // </form>
  );
}
