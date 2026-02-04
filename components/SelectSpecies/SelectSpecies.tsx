'use client';

import { useQuery } from '@tanstack/react-query';
import SelectField from '@/components/SelectField/SelectField';
import { getNoticeSpecies } from '@/lib/api';

interface SelectSpeciesProps {
  value: string | null;
  onChange: (value: string | null) => void;
}

export default function SelectSpecies({ value, onChange }: SelectSpeciesProps) {
  const { data = [], isLoading } = useQuery({
    queryKey: ['notice-species'],
    queryFn: getNoticeSpecies,
    staleTime: 1000 * 60 * 5, // 5 хв кеш
  });

  return (
    <SelectField
      //   label="Species"
      options={data}
      value={value}
      placeholder={isLoading ? 'Loading...' : 'Show all'}
      onChange={onChange}
    />
  );
}
