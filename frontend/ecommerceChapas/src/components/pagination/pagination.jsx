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
          className={`mx-1 px-3 py-1 rounded ${currentPage === i ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
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
        className="mx-1 px-3 py-1 bg-gray-300 text-black rounded disabled:opacity-50"
      >
        Prev
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="mx-1 px-3 py-1 bg-gray-300 text-black rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
