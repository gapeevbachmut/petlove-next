'use client';

import Error from '@/app/error';
import Loading from '@/app/loading';
import NewsList from '@/components/NewsList/NewsList';
import { getNews } from '@/lib/api';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import css from './NewsClient.module.css';

export default function NewsClient() {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['notices', currentPage],
    queryFn: () => getNews(currentPage),
    placeholderData: keepPreviousData,
  });
  const totalPages = data?.totalPages ?? 0;

  console.log('page:', currentPage, 'results:', data?.results);

  return (
    <div>
      <h1>News page CLIENT</h1>
      {isLoading && <Loading />}
      {/* {isError && <Error />} */}
      {isError && <p>Whoops, something went wrong! Please try again!</p>}
      {isSuccess && data?.results?.length > 0 && (
        <NewsList results={data.results} />
      )}
      <ReactPaginate
        pageCount={totalPages}
        pageRangeDisplayed={5}
        marginPagesDisplayed={1}
        onPageChange={({ selected }) => setCurrentPage(selected + 1)}
        forcePage={currentPage - 1}
        containerClassName={css.pagination}
        activeClassName={css.active}
        nextLabel="→"
        previousLabel="←"
      />
    </div>
  );
}
