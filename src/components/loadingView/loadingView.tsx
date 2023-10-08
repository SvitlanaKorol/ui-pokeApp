import React from 'react';
import styles from './index.module.scss';
import { ClipLoader } from 'react-spinners';

export const LoadingView: React.FC = () => {
  return (
    <div className={styles.loadingWrapper}>
      <ClipLoader color="#00BFFF" size={80} data-testid="loading-wrapper" />
    </div>
  );
};
