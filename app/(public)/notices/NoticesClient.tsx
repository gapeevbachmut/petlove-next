//  ---------------- серверна пагінація тут не працює!!!!
//  ---------------- перероблю на клієнтську!!!!!

/* 
'use client';

import ErrorMessage from '@/app/ErrorMessage';
import Loading from '@/app/loading';
import NoticesList from '@/components/NoticesList/NoticesList';
import { getNotices } from '@/lib/api';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import css from './NoticesClient.module.css';

export default function NoticesClient() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isError, error, isSuccess, refetch } = useQuery({
    queryKey: ['notices', currentPage],
    queryFn: () => getNotices(currentPage),
    placeholderData: keepPreviousData,
  });

  //   const responce = getNotices(currentPage);
  const totalPages = data?.totalPages ?? 0;

  console.log('page:', currentPage, 'results:', data?.results);

  return (
       <div>
          <h1>Find pet page client</h1>
          {isLoading && <Loading />}
          {isError && (
             <ErrorMessage message={(error as Error).message} onRetry={refetch} />
          )}       
          {isSuccess && data?.results?.length > 0 && (
            <NoticesList results={data.results} />
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
}*/
/////////////////

//  ------------------  клієнтська пагінація

'use client';

import Loading from '@/app/loading';
import NoticesList from '@/components/NoticesList/NoticesList';
import { getNotices } from '@/lib/api';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import Pagination from '@/components/Pagination/Pagination';

export default function NoticesClient() {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data = [],
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ['notices'],
    queryFn: getNotices,
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [data]);

  const ITEMS_PER_PAGE = 6;
  const pageCount = Math.ceil(data.length / ITEMS_PER_PAGE);

  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;

  const paginatedResults = data?.slice(start, end) ?? [];

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected + 1);
  };

  return (
    <div>
      <h1>Find pet page client</h1>
      {isLoading && <Loading />}

      {isSuccess && data.length > 0 && (
        <>
          <NoticesList results={paginatedResults} />
          <Pagination
            totalPages={pageCount}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  );
}
