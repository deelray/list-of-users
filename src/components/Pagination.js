import React from 'react';
import { useStore } from '../models/RootContext';
import { PER_PAGE, TOTAL_USERS } from '../constants';
import { observer } from 'mobx-react';

const Pagination = () => {
  const {
    usersData: { setUserNumber, userNumber }
  } = useStore();
  const pagesQuantity = Math.ceil(TOTAL_USERS / PER_PAGE);
  const pages = Array.from({ length: pagesQuantity }, (_, index) => index + 1);

  const handleChangePage = (index) => {
    setUserNumber(index);
  };

  const handleNextPage = () => {
    setUserNumber(userNumber + 1);
  };

  const handlePrevPage = () => {
    setUserNumber(userNumber - 1);
  };

  return (
    <div className="pagination">
      <button
        type="button"
        className="btn btn-light"
        onClick={handlePrevPage}
        disabled={userNumber <= 0}>
        &#60;
      </button>
      {pages.map((page, index) => {
        return (
          <button
            type="button"
            key={page}
            className={`btn ${index === userNumber ? 'btn-info' : 'btn-light'}`}
            onClick={() => handleChangePage(index)}>
            {page}
          </button>
        );
      })}
      <button
        type="button"
        className="btn btn-light"
        onClick={handleNextPage}
        disabled={userNumber >= pagesQuantity - 1}>
        &#62;
      </button>
    </div>
  );
};

export default observer(Pagination);
