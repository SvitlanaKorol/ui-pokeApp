import React from 'react';
import styles from './index.module.scss';
import { LABEL_NAMES, OPTION_NAMES } from '../../../constants/constant';

interface FilterSelectProps {
  selectedType: string;
  handleTypeChange: (type: string) => void;
  uniqueTypes: string[];
}

export const FilterSelect: React.FC<FilterSelectProps> = ({
  selectedType,
  handleTypeChange,
  uniqueTypes,
}) => {
  return (
    <div className={styles.wrap}>
      <label data-testid="filter-by-type">{LABEL_NAMES.filter_by_type}</label>
      <select value={selectedType} onChange={(e) => handleTypeChange(e.target.value)}>
        <option value="">{OPTION_NAMES.by_default}</option>
        {uniqueTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};
