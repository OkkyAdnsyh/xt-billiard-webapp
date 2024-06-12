import Link, { LinkProps } from 'next/link';
import React from 'react';
import styles from '@/style/modules/elements/button.module.scss';

interface IButtonProps extends LinkProps{
    customType? : 'Main' | 'LinkTo' | 'Secondary',
    content? : string,
    className? : string,
    status? : boolean
}

const LinkTo = ({customType, content, className, status, ...rest} : IButtonProps) => {
    if(customType === 'Main') return (
        <>
            <Link
                className={`${styles.cta} ${className}`}
                {...rest}
            >
                <div className={styles.decor}>
                    <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.7071 8.20711C24.0976 7.81658 24.0976 7.18342 23.7071 6.79289L17.3431 0.428932C16.9526 0.0384079 16.3195 0.0384079 15.9289 0.428932C15.5384 0.819456 15.5384 1.45262 15.9289 1.84315L21.5858 7.5L15.9289 13.1569C15.5384 13.5474 15.5384 14.1805 15.9289 14.5711C16.3195 14.9616 16.9526 14.9616 17.3431 14.5711L23.7071 8.20711ZM0 8.5H23V6.5H0V8.5Z" fill="#E7F3FF"/>
                    </svg>
                </div>
                <div className={styles['content__wrapper']}>
                    <div className={styles['content__decor']}></div>
                    <p className={styles.content}>
                        {content}
                    </p>
                </div>
            </Link>
        </>
    )
    if(customType === 'Secondary') return (
        <Link
            {...rest}
            className={`${styles['sec__cta']} ${status ? styles.avail : styles['full__book']}`}
        >
            <p className={styles.content}>{status ? 'BOOK' : 'WAITING LIST'}</p>
        </Link>
    )
}

export default LinkTo