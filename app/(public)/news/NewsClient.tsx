'use client';

import Loading from '@/app/loading';
import NewsList from '@/components/NewsList/NewsList';
import { getNews } from '@/lib/api';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import css from './NewsClient.module.css';
import ErrorMessage from '@/app/error';
import Button from '@/components/Button/Button';
import { News } from '@/types/api-types';

export default function NewsClient() {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, isError, error, isSuccess, refetch } = useQuery({
    queryKey: ['news', currentPage],
    queryFn: () => getNews(currentPage),
    placeholderData: keepPreviousData,
  });
  const totalPages = data?.totalPages ?? 0;

  //   console.log('page:', currentPage, 'results:', data?.results);

  const [news, setNews] = useState<News[]>([]);

  const handleClick = async () => {
    const response = await getNews(currentPage);
    if (response?.results) {
      setNews(response.results);
    }
  };

  return (
    <div>
      <h1>News page CLIENT</h1>
      {isLoading && <Loading />}
      {isError && (
        <ErrorMessage message={(error as Error).message} onRetry={refetch} />
      )}
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
      <hr />
      <h4>Just test - news only after CLICK</h4>
      <Button onClick={handleClick}> Get my NEWS</Button>
      {news.length > 0 && <NewsList results={news} />}
    </div>
  );
}
