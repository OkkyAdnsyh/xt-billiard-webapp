import React from 'react';
import { Metadata } from 'next';
import styles from '@/style/modules/layout/layout.module.scss';

export const metadata : Metadata = {
  title: 'XT-Billiard - Pool Table'
}
const TableProductLayout = ({children} : {children : React.ReactNode}) => {
  return (
    <>
    <section className={styles['product__inner']}>
      {children}
    </section>
    </>
  )
}

export default TableProductLayout