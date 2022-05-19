import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { useStore } from '../models/RootContext';
import { PER_PAGE, TOTAL_USERS } from '../constants';

const Pagination = () => {
  const [pages, setPages] = useState([]);
  const [page, setPage] = useState(0);
  const {
    usersData: { setPageNumber }
  } = useStore();
  const numberOfPages = Math.ceil(TOTAL_USERS / PER_PAGE);

  const createPages = Array.from({ length: numberOfPages }, (_, index) => index + 1);

  const handleChangePage = (index) => {
    setPage(index);
  };

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    setPage((prev) => prev - 1);
  };

  useEffect(() => {
    setPages(createPages);
  }, []);

  useEffect(() => {
    setPageNumber(page * PER_PAGE);
  }, [page]);

  return (
    <div className="pagination">
      <button type="button" className="btn btn-light" onClick={handlePrevPage} disabled={page <= 0}>
        &#60;
      </button>
      {pages.map((item, index) => {
        return (
          <button
            type="button"
            key={index}
            className={cn('btn', `${index === page ? 'btn-info' : 'btn-light'}`)}
            onClick={() => handleChangePage(index)}>
            {item}
          </button>
        );
      })}
      <button
        type="button"
        className="btn btn-light"
        onClick={handleNextPage}
        disabled={page >= numberOfPages - 1}>
        &#62;
      </button>
    </div>
  );
};

export default Pagination;
