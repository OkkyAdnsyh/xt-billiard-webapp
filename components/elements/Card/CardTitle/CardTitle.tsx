import React from 'react';
import styles from '@/style/modules/elements/cardEl.module.scss';

const CardTitle = ({content} : {content: string}) => {
  return (
    <h3 className={`${styles.title}`}>{content}</h3>
  )
}

export default CardTitle