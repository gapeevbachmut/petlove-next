import { LocationOption, type NoticesFiltersState } from '@/types/types';
import css from './NoticesFilters.module.css';
import SearchBox from '../SearchBox/SearchBox';
import SelectCategory from '../SelectCategory/SelectCategory';
import SelectSex from '../SelectSex/SelectSex';
import SelectSpecies from '../SelectSpecies/SelectSpecies';
import SelectLocation from '../SelectLocation/SelectLocation';
import SortRadio from '../SortRadio/SortRadio';
import Button from '../Button/Button';
import clsx from 'clsx';

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
    <div className={css.filtersContainer}>
      <form onSubmit={handleSubmit}>
        <fieldset className={css.searchBox}>
          <ul className={css.filtersList}>
            <li>
              <SearchBox value={filters.search} onSubmit={handleSearchChange} />
            </li>
            <li>
              <ul className={css.filtersListIn}>
                <li className={css.filtersItem}>
                  <SelectCategory
                    value={filters.category}
                    onChange={category =>
                      onChange({
                        ...filters,
                        category,
                      })
                    }
                  />
                </li>
                <li className={css.filtersItem}>
                  <SelectSex
                    value={filters.sex}
                    onChange={sex =>
                      onChange({
                        ...filters,
                        sex,
                      })
                    }
                  />
                </li>
              </ul>
            </li>

            <li className={clsx(css.filtersItem, css.filtersItemIn)}>
              <SelectSpecies
                value={filters.species}
                onChange={species =>
                  onChange({
                    ...filters,
                    species,
                  })
                }
              />
            </li>
          </ul>
        </fieldset>

        {/* API повертає тільки ідентифікатор локації без 
      текстового представлення. Через відсутність ендпоїнта 
      для локацій фільтрація реалізована по доступному ID
       з використанням react-select. */}
        {/* <SelectLocation
        value={filters.location}
        options={locationOptions}
        onChange={location =>
          onChange({
            ...filters,
            location,
          })
        }
      /> */}
        <hr className={css.line} />

        <SortRadio
          value={filters.sortBy}
          onChange={sortBy =>
            onChange({
              ...filters,
              sortBy,
            })
          }
        />
        <hr className={css.line} />
        {
          // у ТЗ є умова - скидання фільтрів

          <Button onClick={onReset} className={css.reset}>
            Reset
          </Button>
        }
      </form>
    </div>
  );
}
