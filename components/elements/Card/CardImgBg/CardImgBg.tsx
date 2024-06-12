import React from 'react';
import styles from '@/style/modules/elements/cardEl.module.scss';
import Image, { ImageProps } from 'next/image';

const CardImgBg = ({...rest} : ImageProps) => {
  return (
    <div className={styles['img__bg']}>
        <Image
            {...rest}
        />
    </div>
  )
}

export default CardImgBg