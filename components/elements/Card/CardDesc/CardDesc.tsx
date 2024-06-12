import React from 'react';
import styles from '@/style/modules/elements/cardEl.module.scss';

const CardDesc = ({content} : {content: string}) => {
  return (
    <p className={styles.desc}>{content}</p>
  )
}

export default CardDesc