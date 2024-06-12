import React from 'react';
import styles from '@/style/modules/elements/product.module.scss';
import { IPrice } from '@/lib/types/interface';

const Price = ({nominal, qty} : IPrice) => {
  return (
    <p className={styles.price}>
        Rp <span className={styles['nominal']}>{nominal}</span>/{qty}
    </p>
  )
}

export default Price