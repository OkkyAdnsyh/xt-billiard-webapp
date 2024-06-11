import React from 'react';
import styles from '@/style/modules/module/card.module.scss';

const Card = ({className, children} : {className? : string, children? : React.ReactNode}) => {
  return (
    <section className={`${styles.wrapper} ${styles[className as string]}`}>
        {children}
    </section>
  )
}

export default Card