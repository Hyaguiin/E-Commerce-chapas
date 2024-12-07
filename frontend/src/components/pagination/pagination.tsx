import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleClick = (page) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handleClick(i)}
          className={`mx-1 px-3 py-1 rounded text-white ${currentPage === i ? 'bg-black text-yellow-500' : 'bg-black text-white hover:text-yellow-500'}`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="flex justify-center my-4">
      <button
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
        className={`mx-1 px-3 py-1 rounded bg-black text-white disabled:opacity-50 hover:text-yellow-500`}
      >
        Prev
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`mx-1 px-3 py-1 rounded bg-black text-white disabled:opacity-50 hover:text-yellow-500`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
