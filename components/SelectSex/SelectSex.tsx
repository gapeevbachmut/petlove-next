'use client';

import { useQuery } from '@tanstack/react-query';
import SelectField from '@/components/SelectField/SelectField';
import { getNoticeSex } from '@/lib/api';

interface SelectSexProps {
  value: string | null;
  onChange: (value: string | null) => void;
}

export default function SelectSex({ value, onChange }: SelectSexProps) {
  const { data = [], isLoading } = useQuery({
    queryKey: ['notice-sex'],
    queryFn: getNoticeSex,
    staleTime: 1000 * 60 * 5, // 5 хв кеш
  });

  return (
    <SelectField
      //   label="Sex"
      options={data}
      value={value}
      placeholder={isLoading ? 'Loading...' : 'Show all'}
      onChange={onChange}
    />
  );
}
