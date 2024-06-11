'use client';

import React from 'react';
import styles from '@/style/modules/elements/cardEl.module.scss';

const CardStatus = ({tableStatus} : {tableStatus : boolean}) => {
  return (
    <>
        <article className={styles['card__status']}>
            <p className={styles.label}>Status</p>
            <p className={`${styles.status} ${tableStatus ? styles['status__avail'] : styles['status__full_booked']}`}>
                {tableStatus ? 'Available' : 'Full Booked'}
            </p>
        </article>
    </>
  )
}

export default CardStatus