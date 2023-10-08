import { DataItem } from './types/types';

export const calculateUniqueTypes = (dataFromRedux: DataItem[] = []): string[] => {
  // Add a null check and check for empty data
  if (!dataFromRedux || dataFromRedux.length === 0) {
    return [];
  }

  return [...new Set(dataFromRedux.flatMap(({ types }) => types))];
};
