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
      <div className={css.wrapper}>
        <ReactPaginate
          breakLabel="..."
          pageCount={totalPages} // кількість сторінок
          pageRangeDisplayed={3} // кількість номерів показувати у центрі
          marginPagesDisplayed={1} // кількість по краях
          onPageChange={onPageChange}
          forcePage={currentPage - 1}
          containerClassName={css.pagination} // ul
          previousClassName={css.previous} //  previousLabel - li
          nextClassName={css.next} // nextLabel - li
          breakClassName={css.break} // li - "..."
          pageClassName={css.li} // li
          pageLinkClassName={css.link} // a
          activeClassName={css.active} // active  li
          disabledClassName={css.disabled} // disable  li
          nextLabel=">" // наступна
          previousLabel="<" //  попередня
        />
      </div>
    </>
  );
}
