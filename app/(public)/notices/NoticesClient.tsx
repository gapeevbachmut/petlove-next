//  ---------------- серверна пагінація тут не працює!!!!
//  ---------------- перероблю на клієнтську!!!!!

// 'use client';

// import Loading from '@/app/loading';
// import NoticesList from '@/components/NoticesList/NoticesList';
// import { getNotices } from '@/lib/api';
// import {
//   keepPreviousData,
//   useInfiniteQuery,
//   useQuery,
// } from '@tanstack/react-query';
// import { useState } from 'react';
// import css from './NoticesClient.module.css';
// import Pagination from '@/components/Pagination/Pagination';
// import ErrorMessage from '@/app/error';

// export default function NoticesClient() {
//   const [currentPage, setCurrentPage] = useState(1);

//   const { data, isLoading, isError, error, isSuccess, refetch } = useQuery({
//     queryKey: ['notices', currentPage],
//     queryFn: () => getNotices(currentPage),
//     placeholderData: keepPreviousData,
//   });

//   // const totalPages = data?.totalPages ?? 0;

//   const totalPages = 9;

//   const handlePageChange = ({ selected }: { selected: number }) => {
//     setCurrentPage(selected + 1);
//   };
//   return (
//     <div>
//       <h1>Find pet page client</h1>
//       {isLoading && <Loading />}
//       {isError && (
//         <ErrorMessage message={(error as Error).message} onRetry={refetch} />
//       )}

//       {isLoading && <Loading />}

//       {isSuccess && data?.results?.length > 0 && (
//         <>
//           <NoticesList results={data.results} />
//           <Pagination
//             totalPages={totalPages}
//             onPageChange={handlePageChange}
//             currentPage={currentPage}
//           />
//         </>
//       )}
//     </div>
//   );
// }
/////////////////

//  ------------------  клієнтська пагінація

'use client';

import Loading from '@/app/loading';
import NoticesList from '@/components/NoticesList/NoticesList';
import { getNotices } from '@/lib/api';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Pagination from '@/components/Pagination/Pagination';
import NoticesFilters from '@/components/NoticesFilters/NoticesFilters';
import { type NoticesFiltersState } from '@/types/types';

export default function NoticesClient() {
  const [currentPage, setCurrentPage] = useState(1);
  // стан фільтрів
  const [filters, setFilters] = useState<NoticesFiltersState>({
    search: '',
    category: null,
    sex: null,
    species: null,
    location: null,
    sortBy: null,
  });

  const {
    data = [],
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ['notices'],
    queryFn: getNotices,
    // placeholderData: keepPreviousData,
  });

  const filteredData = data.filter(item => {
    if (
      filters.search &&
      !item.title.toLowerCase().includes(filters.search.toLowerCase())
    ) {
      return false;
    }

    if (filters.category && item.category !== filters.category) {
      return false;
    }

    if (filters.sex && item.sex !== filters.sex) {
      return false;
    }

    if (filters.species && item.species !== filters.species) {
      return false;
    }

    if (filters.location && item.location !== filters.location) {
      return false;
    }

    return true;
  });

  /////////////-----------------
  const ITEMS_PER_PAGE = 6;
  const pageCount = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;

  const paginatedResults = filteredData?.slice(start, end) ?? [];

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected + 1);
  };

  const handleFiltersReset = () => {
    setCurrentPage(1);
    setFilters({
      search: '',
      category: null,
      sex: null,
      species: null,
      location: null,
      sortBy: null,
    });
  };

  return (
    <div>
      <h1>Find your favorite pet</h1>

      {isLoading && <Loading />}

      {isSuccess && data.length > 0 && (
        <>
          <NoticesFilters
            filters={filters}
            onChange={nextFilters => {
              setCurrentPage(1);
              setFilters(nextFilters);
            }}
            onReset={handleFiltersReset}
          />

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
