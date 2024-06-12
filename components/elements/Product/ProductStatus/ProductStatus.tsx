import React from 'react';
import styles from '@/style/modules/elements/product.module.scss';

const ProductStatus = ({status} : {status: boolean}) => {
  return (
    <section className={styles['status__wrapper']}>
        <p className={styles.label}>Status</p>
        <p className={`${styles.status} ${status ? styles.avail : styles['full__book']}`}>
            {status ?
                'Available' : 'Full Booked'
            }
        </p>
    </section>
  )
}

export default ProductStatus