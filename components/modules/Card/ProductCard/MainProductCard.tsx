import React from 'react';
import styles from '@/style/modules/module/productCard.module.scss';

interface IProductCard{
    className?: string,
    children : React.ReactNode
}

const MainProductCard = ({className, children} : IProductCard) => {
  return (
    <section className={`${styles.wrapper} ${styles[className as string]}`}>
        {children}
    </section>
  )
}

export default MainProductCard