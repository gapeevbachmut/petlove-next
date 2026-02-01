'use client';

import Loading from '@/app/loading';
import NewsList from '@/components/NewsList/NewsList';
import { getNews } from '@/lib/api';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import ErrorMessage from '@/app/error';
import { News } from '@/types/api-types';
import Pagination from '@/components/Pagination/Pagination';
import SearchBox from '@/components/SearchBox/SearchBox';

export default function NewsClient() {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');

  const { data, isLoading, isError, error, isSuccess, refetch } = useQuery({
    queryKey: ['news', currentPage, search],
    queryFn: () => getNews(currentPage, search),
    placeholderData: keepPreviousData,
  });
  const totalPages = data?.totalPages ?? 0;

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected + 1);
  };

  const handleSearchChange = (value: string) => {
    setCurrentPage(1);
    setSearch(value);
  };

  return (
    <div>
      <h1>News page CLIENT</h1>
      <SearchBox onChange={handleSearchChange} />

      {isLoading && <Loading />}
      {isError && (
        <ErrorMessage message={(error as Error).message} onRetry={refetch} />
      )}
      {isSuccess && data?.results?.length > 0 && (
        <>
          <NewsList results={data.results} />
          <Pagination
            totalPages={data.totalPages}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  );
}
