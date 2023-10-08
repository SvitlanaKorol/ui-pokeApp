import React from 'react';
import styles from './index.module.scss';

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  label: string;
}

export const Button: React.FC<ButtonProps> = ({ onClick, disabled, label }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={styles.buttonWrapper}>
      {label}
    </button>
  );
};
