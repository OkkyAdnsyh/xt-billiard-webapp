import React from 'react';
import { Metadata } from 'next';
import styles from '@/style/modules/layout/layout.module.scss';

const ProductLayout = ({children} : {children : React.ReactNode}) => {
  return (
    <>
      <section className={styles['product__outer']}>
        {children}
      </section>
    </>
  )
}

export default ProductLayout