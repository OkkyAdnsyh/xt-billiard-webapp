import React from 'react';
import styles from '@/style/modules/blocks/tableBook.module.scss';
import MainProductCard from '@/components/modules/Card/ProductCard/MainProductCard';
import CardImgBg from '@/components/elements/Card/CardImgBg/CardImgBg';
import RegulerTable from '@/public/reguler-bg.jpg';
import CardGradBg from '@/components/elements/Card/CardGradBg/CardGradBg';
import CardBody from '@/components/elements/Card/CardBody/CardBody';
import CardTitle from '@/components/elements/Card/CardTitle/CardTitle';
import CardDesc from '@/components/elements/Card/CardDesc/CardDesc';
import ProductStatus from '@/components/elements/Product/ProductStatus/ProductStatus';
import CardCTA from '@/components/elements/Card/CardCTA/CardCTA';
import ProductPrice from '@/components/elements/Product/ProductPrice/ProductPrice';
import LinkTo from '@/components/elements/Button/LinkTo';
import VipRoom from '@/public/vip-bg.jpg';

const TableBook = async () => {
  const data = await fetch('http://localhost:3000/api/v1/products/check-avail',{
    method : 'GET',
    cache: 'no-cache'
  }).then(res => {return res.json()})

  console.log(data)
  
  return (
    <>
      <section className={styles.wrapper}>
        <article className={styles.title}>
          <h2>Easy Way To Book The Table</h2>
        </article>
        <section className={styles['card__container']}>
          <MainProductCard className='home'>
            <CardImgBg src={RegulerTable} alt='Image Background' />
            <CardGradBg>
              <CardBody className='body__home'>
                <CardTitle content='reguler table' />
                <CardDesc content='Reguler playing table best for beginner and professional' />
                <ProductStatus status={data.regulerTable.length >= 1 ? true : false} />
                <CardCTA>
                  <ProductPrice nominal='50.000' qty='hr' label='Price' />
                  <LinkTo href={'/'} status={data.regulerTable.length >= 1 ? true : false} customType='Secondary'/>
                </CardCTA>
              </CardBody>
            </CardGradBg>
          </MainProductCard>
          <MainProductCard className='home'>
            <CardImgBg src={VipRoom} alt='Image Background' />
            <CardGradBg>
              <CardBody className='body__home'>
                <CardTitle content='vip room' />
                <CardDesc content='Private room to play with your friend and family' />
                <ProductStatus status={data.vipTable.length >= 1 ? true : false} />
                <CardCTA>
                  <ProductPrice nominal='75.000' qty='hr' label='Price' />
                  <LinkTo href={'/'} status={data.vipTable.length >= 1 ? true : false} customType='Secondary'/>
                </CardCTA>
              </CardBody>
            </CardGradBg>
          </MainProductCard>
          <MainProductCard className='home'>
              <CardBody className='body__col__1'>
                <CardTitle content='Coaching Session' />
                <CardDesc content='Session for training with professional coach on site' />
                <ProductStatus status={data.productVacant.length >= 1 ? true : false} />
                <CardCTA>
                  <ProductPrice nominal='75.000' qty='hr' label='Price' />
                  <LinkTo 
                  href={'/'} 
                  status={data.productVacant.length >= 1 ? true : false} 
                  customType='Secondary'/>
                </CardCTA>
              </CardBody>
          </MainProductCard>
        </section>
      </section>
    </>
  )
}

export default TableBook