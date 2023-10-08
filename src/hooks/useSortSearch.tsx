import { useState, useEffect } from 'react';
import { DataItem } from '../types/types';

export interface SearchFilterData<T> {
  filteredData: T[];
}

function useSortSearchFilter(
  data: DataItem[],
  searchQuery: string,
  selectedType: string,
): { filteredData: DataItem[] } {
  const [filteredData, setFilteredData] = useState<DataItem[]>(data);

  useEffect(() => {
    const applySortAndSearch = (data: DataItem[], query: string, type: string): DataItem[] => {
      let sortedData = [...data];

      if (query) {
        sortedData = sortedData.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase()),
        );
      }

      if (type) {
        sortedData = sortedData.filter((item) => item.types.includes(type));
      }

      sortedData.sort((a, b) => a.name.localeCompare(b.name));

      return sortedData;
    };

    const filteredData =
      searchQuery || selectedType ? applySortAndSearch(data, searchQuery, selectedType) : data;

    setFilteredData(filteredData);
  }, [data, searchQuery, selectedType]);

  return { filteredData };
}

export default useSortSearchFilter;
