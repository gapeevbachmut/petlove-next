'use client';

import ReactPaginate from 'react-paginate';
import css from './Pagination.module.css';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (selectedItem: { selected: number }) => void;
}

export default function Pagination({
  totalPages,
  onPageChange,
  currentPage,
}: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        pageCount={totalPages}
        pageRangeDisplayed={5}
        marginPagesDisplayed={1}
        onPageChange={onPageChange}
        forcePage={currentPage - 1}
        containerClassName={css.pagination}
        activeClassName={css.active}
        nextLabel=">"
        previousLabel="<"
      />
    </>
  );
}
