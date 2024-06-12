import React from 'react';
import styles from '@/style/modules/elements/cardEl.module.scss';

const CardGradBg = ({children} : {children: React.ReactNode}) => {
  return (
    <div className={styles['grad__bg']}>
      {children}
    </div>
  )
}

export default CardGradBg