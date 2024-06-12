import React from 'react';
import styles from '@/style/modules/elements/product.module.scss';
import Price from './Price';
import { IPrice } from '@/lib/types/interface';

interface IProductPrice extends IPrice{
    label: string
}

const ProductPrice = ({nominal, qty, label} : IProductPrice) => {
  return (
    <section className={styles['price__container']}>
        <p className={styles.label}>{label}</p>
        <Price nominal={nominal} qty={qty} />
    </section>
  )
}

export default ProductPrice