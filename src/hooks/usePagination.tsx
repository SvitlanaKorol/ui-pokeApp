import { useEffect, useState } from 'react';

export interface PaginationData<T> {
  currentPage: number;
  nextPage: () => void;
  prevPage: () => void;
  paginatedData: T[];
  totalPages: number;
}

function usePagination<T>(
  data: T[],
  itemsPerPage: number,
  isSearchActive: boolean,
): PaginationData<T> {
  const [paginatedData, setPaginatedData] = useState<T[]>([]);
  const totalPages = data ? Math.ceil(data.length / itemsPerPage) : 0;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [isSearchActive]);

  useEffect(() => {
    if (data) {
      const startIdx = (currentPage - 1) * itemsPerPage;
      const endIdx = startIdx + itemsPerPage;
      const paginatedDataSlice = data.slice(startIdx, endIdx);

      setPaginatedData(paginatedDataSlice);
    }
  }, [currentPage, data, itemsPerPage]);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return { currentPage, nextPage, prevPage, paginatedData, totalPages };
}

export default usePagination;
