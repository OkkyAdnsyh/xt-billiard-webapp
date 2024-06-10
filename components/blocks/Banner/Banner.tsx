import React from 'react';
import Image from 'next/image';
import styles from '@/style/modules/blocks/banner.module.scss';
import Bg from '@/public/banner-bg.jpg';
import Logo from '@/public/logo.png';
import Ball1 from '@/public/ball-1.png';
import Ball6 from '@/public/ball-6.png';
import LinkTo from '@/components/elements/Button/LinkTo';

const Banner = () => {
  return (
    <>
        <section className={styles.wrapper}>
            <section className={styles.bg}>
                <Image
                    src={Bg}
                    alt='Billiard Table'
                />
            </section>
            <section className={styles['content__wrapper']}>
                <section className={styles['logo__wrapper']}>
                    <section className={styles.logo}>
                        <Image
                            src={Logo}
                            alt='logo'
                        />            
                    </section>
                    <h1>Billiard</h1>
                </section>
                <section className={styles['tagline__wrapper']}>
                    <h2 id='tagline-1' className={styles.tagline}>Play</h2>
                    <section id='ballDecor-1' className={styles['ball__decor']}>
                        <Image
                            src={Ball6}
                            alt='Ball 6'
                        />
                    </section>
                    <h2 id='tagline-2' className={styles.tagline}>Compete</h2>
                    <section id='ballDecor-2' className={styles['ball__decor']}>
                        <Image
                            src={Ball1}
                            alt='Ball 1'
                        />
                    </section>
                    <h2 id='tagline-3' className={styles.tagline}>Eat</h2>
                </section>
                <article className={styles['content__text__wrapper']}>
                    <p>Spend your time with family and friend, in exquisite experiences of 8 - Ball Pool</p>
                </article>
                <LinkTo 
                    customType='Main' 
                    content='check table' 
                    href='/'
                    className={styles.cta}
                />
            </section>
        </section>
    </>
  )
}

export default Banner