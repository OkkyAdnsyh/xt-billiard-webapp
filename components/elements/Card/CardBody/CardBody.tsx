import React from 'react';
import styles from '@/style/modules/elements/cardEl.module.scss';

const CardBody = ({className, children} : {className?: string, children?: React.ReactNode}) => {
  return (
    <div className={`${styles['body__wrapper']} ${styles[className as string]}`}>
      {children}
    </div>
  )
}

export default CardBody