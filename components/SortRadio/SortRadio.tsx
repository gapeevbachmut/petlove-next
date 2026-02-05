'use client';

import { type SortBy } from '@/types/types';

interface SortRadioProps {
  value: SortBy;
  onChange: (value: SortBy) => void;
}

export default function SortRadio({ value, onChange }: SortRadioProps) {
  return (
    <fieldset>
      <legend>Sort by</legend>

      <label>
        <input
          type="radio"
          name="sort"
          checked={value === 'popular_desc'}
          onChange={() => onChange('popular_desc')}
        />
        Popular
      </label>
      <label>
        <input
          type="radio"
          name="sort"
          checked={value === 'popular_asc'}
          onChange={() => onChange('popular_asc')}
        />
        Unpopular
      </label>

      <label>
        <input
          type="radio"
          name="sort"
          checked={value === 'price_asc'}
          onChange={() => onChange('price_asc')}
        />
        Cheap
      </label>

      <label>
        <input
          type="radio"
          name="sort"
          checked={value === 'price_desc'}
          onChange={() => onChange('price_desc')}
        />
        Expensive
      </label>

      {/* <label>
        <input
          type="radio"
          name="sort"
          checked={value === null}
          onChange={() => onChange(null)}
        />
        Default
      </label> */}
    </fieldset>
  );
}
