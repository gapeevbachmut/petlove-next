'use client';

// import Error from '@/app/error';
import Loading from '@/app/loading';
import NoticesList from '@/components/NoticesList/NoticesList';
import { getNotices } from '@/lib/api';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import css from './NoticesClient.module.css';

export default function NoticesClient() {
  const [currentPage, setCurrentPage] = useState(1);

  // const { data, isLoading, isError, isSuccess } = useQuery({
  //   queryKey: ['notices', currentPage],
  //   queryFn: () => getNotices(currentPage),
  //   placeholderData: keepPreviousData,
  // });
  const { data = [], isLoading } = useQuery({
    queryKey: ['notices'],
    queryFn: getNotices,
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [data]);
  //  серверна пагінація тут не працює!!!!

  //  перероблю на клієнтську!!!!!

  const ITEMS_PER_PAGE = 6;
  const pageCount = Math.ceil(data.length / ITEMS_PER_PAGE);

  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;

  const paginatedResults = data?.slice(start, end) ?? [];

  //////////////////////

  //   const responce = getNotices(currentPage);
  // const totalPages = data?.totalPages ?? 0;
  // console.log('page:', currentPage, 'results:', data);

  return (
    <div>
      <main>
        <div>
          <h1>Find pet page client</h1>
          {isLoading && <Loading />}
          {/* {isError && <Error />} */}
          {/* {isError && <p>Whoops, something went wrong! Please try again!</p>} */}
          {/* {isSuccess && paginatedResults.length > 0 && ( */}
          <NoticesList results={paginatedResults} />
          {/* )} */}

          {/* {totalPages > 1 && ( */}
          {pageCount > 1 && (
            <ReactPaginate
              pageCount={pageCount}
              pageRangeDisplayed={3}
              marginPagesDisplayed={1}
              onPageChange={({ selected }) => setCurrentPage(selected + 1)}
              forcePage={currentPage - 1}
              containerClassName={css.pagination}
              activeClassName={css.active}
              nextLabel="→"
              previousLabel="←"
            />
          )}
        </div>
      </main>
    </div>
  );
}
