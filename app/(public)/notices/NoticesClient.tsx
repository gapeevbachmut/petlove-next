'use client';

import Error from '@/app/error';
import Loading from '@/app/loading';
import NoticesList from '@/components/NoticesList/NoticesList';
import { getNotices } from '@/lib/api';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import css from './NoticesClient.module.css';

export default function NoticesClient() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['notices', currentPage],
    queryFn: () => getNotices(currentPage),
    placeholderData: keepPreviousData,
  });

  //   const responce = getNotices(currentPage);
  const totalPages = data?.totalPages ?? 0;

  console.log('page:', currentPage, 'results:', data?.results);

  return (
    <div>
      <main>
        <div>
          <h1>Find pet page client</h1>
          {isLoading && <Loading />}
          {/* {isError && <Error />} */}
          {isError && <p>Whoops, something went wrong! Please try again!</p>}
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
      </main>
    </div>
  );
}
