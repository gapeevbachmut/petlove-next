'use client';

import { type SortBy } from '@/types/types';
import css from './SortRadio.module.css';

interface SortRadioProps {
  value: SortBy;
  onChange: (value: SortBy) => void;
}

export default function SortRadio({ value, onChange }: SortRadioProps) {
  return (
    <fieldset className={css.container}>
      <ul className={css.radioList}>
        <li>
          <label className={css.label}>
            <input
              className={css.input}
              type="radio"
              name="sort"
              checked={value === 'popular_desc'}
              onChange={() => onChange('popular_desc')}
            />
            <span className={css.text}>Popular</span>
          </label>
        </li>
        <li>
          <label className={css.label}>
            <input
              className={css.input}
              type="radio"
              name="sort"
              checked={value === 'popular_asc'}
              onChange={() => onChange('popular_asc')}
            />
            <span className={css.text}>Unpopular</span>
          </label>
        </li>
        <li>
          <label className={css.label}>
            <input
              className={css.input}
              type="radio"
              name="sort"
              checked={value === 'price_asc'}
              onChange={() => onChange('price_asc')}
            />
            <span className={css.text}> Cheap</span>
          </label>
        </li>
        <li>
          <label className={css.label}>
            <input
              className={css.input}
              type="radio"
              name="sort"
              checked={value === 'price_desc'}
              onChange={() => onChange('price_desc')}
            />
            <span className={css.text}> Expensive</span>
          </label>
        </li>
      </ul>

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
