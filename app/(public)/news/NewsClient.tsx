'use client';

import Loading from '@/app/loading';
import NewsList from '@/components/NewsList/NewsList';
import { getNews } from '@/lib/api/api';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import ErrorMessage from '@/app/error';
import Pagination from '@/components/Pagination/Pagination';
import SearchBox from '@/components/SearchBox/SearchBox';

export default function NewsClient() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const { data, isLoading, isError, error, isSuccess, refetch } = useQuery({
    queryKey: ['news', { currentPage, search: searchQuery }],
    queryFn: () => getNews(currentPage, searchQuery),
    refetchOnMount: false, // не треба робити повторний запит!!!
    placeholderData: keepPreviousData,
  });

  const totalPages = data?.totalPages ?? 0;

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected + 1);
  };

  const handleSearchChange = (value: string) => {
    setCurrentPage(1);
    setSearchQuery(value);
  };

  return (
    <div>
      <h1>News</h1>
      <SearchBox onSubmit={handleSearchChange} />

      {isLoading && <Loading />}
      {isError && (
        <ErrorMessage message={(error as Error).message} onRetry={refetch} />
      )}
      {isSuccess && data?.results?.length > 0 && (
        <>
          <NewsList results={data.results} />
          {totalPages > 1 && (
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}

      {isSuccess && data?.results?.length === 0 && <p>No results found</p>}
    </div>
  );
}
