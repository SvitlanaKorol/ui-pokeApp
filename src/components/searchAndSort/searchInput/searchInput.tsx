import React from 'react';
import styles from './index.module.scss';

interface SearchInputProps {
  searchQuery: string;
  handleSearch: (query: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({ searchQuery, handleSearch }) => {
  return (
    <div className={styles.wrap}>
      <label>Search by Name:</label>
      <input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};
