'use client';

import { useQuery } from '@tanstack/react-query';
import SelectField from '@/components/SelectField/SelectField';
import { getNoticeCategories } from '@/lib/api';

interface SelectCategoryProps {
  value: string | null;
  onChange: (value: string | null) => void;
}

export default function SelectCategory({
  value,
  onChange,
}: SelectCategoryProps) {
  const { data = [] } = useQuery({
    queryKey: ['notice-categories'],
    queryFn: getNoticeCategories,
    // staleTime: 1000 * 60 * 5, // 5 хв кеш
  });

  return (
    <SelectField
      options={data}
      value={value}
      placeholder="Category"
      showAllLabel="Show all"
      onChange={onChange}
    />
  );
}
