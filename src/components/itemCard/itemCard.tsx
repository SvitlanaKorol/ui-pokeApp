import React from 'react';
import styles from './index.module.scss';
import { BUTTON_NAMES, IMG_URL } from '../../constants/constant';
import { DataItem } from '../../types/types';
import { useNavigate } from 'react-router-dom';
import { Button } from '../prevNexButton/button/button';

interface PokemonItemProps {
  item: DataItem;
}
export const ItemCard: React.FC<PokemonItemProps> = ({ item }) => {
  const navigate = useNavigate();
  const { id, name, types } = item;
  const handleItemClick = (item: DataItem) => {
    navigate(`/preview/${item.id}`, { state: { item } });
  };

  return (
    <div className={styles.content}>
      <img className={styles.contentImg} src={`${IMG_URL}${id}.svg`} alt={name} />
      <div className={styles.contentDescription}>
        <div className={styles.contentDescriptionName}>{name}</div>
        <div className={`${styles.contentDescriptionType} ${styles[types]}`}>{types}</div>
      </div>
      <div className={styles.buttonWrapper}>
        <Button onClick={() => handleItemClick(item)} label={BUTTON_NAMES.previewButton} />
      </div>
    </div>
  );
};
