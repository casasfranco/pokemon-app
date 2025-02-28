'use client';

import React from 'react';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    let pages = [];
    if (totalPages <= 5) {
      pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      if (currentPage <= 2) {
        pages = [1, 2, 3, '...', totalPages];
      } else if (currentPage >= totalPages - 1) {
        pages = [1, '...', totalPages - 2, totalPages - 1, totalPages];
      } else {
        pages = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
      }
    }
    return pages;
  };

  return (
    <div className="flex justify-center space-x-2 mt-4">
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400">
        Prev
      </button>
      {getPageNumbers().map((page, index) =>
        typeof page === 'number' ? (
          <button key={index} onClick={() => onPageChange(page)} className={`px-4 py-2 rounded bg-white ${currentPage === page ? 'bg-blue-700 text-blue-600' : 'bg-gray-200'}`}>
            {page}
          </button>
        ) : (
          <span key={index} className="px-4 py-2 text-gray-500">
            {page}
          </span>
        )
      )}
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400">
        Next
      </button>
    </div>
  );
};

export default Pagination;
