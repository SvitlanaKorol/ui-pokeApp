import React from 'react';
import styles from './index.module.scss';
import { IMG_URL, ITEM_DESCRIPTION } from '../../constants/constant';
import { DataItem } from '../../types/types';

interface PreviewDetailsProps {
  itemId: string;
  itemData: DataItem | null;
}

const PreviewDetails: React.FC<PreviewDetailsProps> = ({ itemId, itemData }) => {
  if (!itemData) {
    return null;
  }
  const { id, name, stats, movies } = itemData;

  return (
    <div className={styles.content}>
      <h3>{`${ITEM_DESCRIPTION.itemTittle} ${itemId}`}</h3>
      <div className={styles.detailsContainer}>
        <div className={styles.imageColumn}>
          <img className={styles.contentImg} src={`${IMG_URL}${id}.svg`} alt={name} />
        </div>
        <div className={styles.infoColumn}>
          <h4>
            {ITEM_DESCRIPTION.itemName} <span className={styles.name}>{name}</span>
          </h4>
          <h4>{ITEM_DESCRIPTION.itemStats}</h4>
          <ul>
            {stats.map((stat) => (
              <li key={stat.stat.name}>{`${stat.stat.name}: ${stat.base_stat}`}</li>
            ))}
          </ul>
          <h4>
            {ITEM_DESCRIPTION.itemTotalMoves} <span className={styles.name}>{movies}</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default PreviewDetails;
