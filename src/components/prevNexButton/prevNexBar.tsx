import React from 'react';
import styles from './index.module.scss';
import { Button } from './button/button';
import { BUTTON_NAMES, TEXT_DESC } from '../../constants/constant';

interface PrevNextBarProps {
  currentPage: number;
  totalPages: number;
  nextPage: () => void;
  prevPage: () => void;
}

export const PrevNexBar: React.FC<PrevNextBarProps> = ({
  currentPage,
  totalPages,
  nextPage,
  prevPage,
}) => {
  return (
    <div className={styles.container}>
      <Button onClick={prevPage} disabled={currentPage === 1} label={BUTTON_NAMES.previousButton} />
      <span>
        {TEXT_DESC.pageText} {currentPage} {TEXT_DESC.ofText} {totalPages}
      </span>
      <Button
        onClick={nextPage}
        disabled={currentPage === totalPages}
        label={BUTTON_NAMES.nextButton}
      />
    </div>
  );
};
