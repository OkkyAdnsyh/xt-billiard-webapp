import React from 'react';
import styles from '@/style/modules/elements/cardEl.module.scss';

const CardTitle = ({children} : {children : React.ReactNode}) => {
  return (
    <h3 className={styles['card__title']}>
        {children}
    </h3>
  )
}

export default CardTitle