import React from 'react';
import styles from '@/style/modules/elements/cardEl.module.scss';

const CardCTA = ({children} : {children: React.ReactNode}) => {
  return (
    <section className={styles['cta__wrapper']}>
        {children}
    </section>
  )
}

export default CardCTA