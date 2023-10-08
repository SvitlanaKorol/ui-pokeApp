import React from 'react';
import styles from './index.module.scss';
import { ItemCard } from '../itemCard/itemCard';
import { DataItem } from '../../types/types';

interface ContentViewProps {
  data: DataItem[];
}

export const ContentView: React.FC<ContentViewProps> = ({ data }) => (
  <div className={styles.wrapper}>
    {data.map((item) => (
      <ItemCard item={item} key={item.id} />
    ))}
  </div>
);
