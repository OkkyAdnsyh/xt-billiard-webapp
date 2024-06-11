import React from 'react';
import styles from '@/style/modules/blocks/tableBook.module.scss';
import Card from '@/components/modules/Card';
import CardTitle from '@/components/elements/Card/CardTitle';
import CardStatus from '@/components/elements/Card/CardStatus';

const TableBook = () => {
  return (
    <>
      <section className={styles.wrapper}>
        <article className={styles.title}>
          <svg width="104" height="150" viewBox="0 0 104 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_18_67)">
            <path d="M25 25L78.5 46V98.5L25 125V25Z" fill="#AFD7FF" fillOpacity="0.9" shapeRendering="crispEdges"/>
            </g>
            <defs>
            <filter id="filter0_d_18_67" x="0" y="0" width="103.5" height="150" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="12.5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.6875 0 0 0 0 0.84375 0 0 0 0 1 0 0 0 0.2 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_18_67"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_18_67" result="shape"/>
            </filter>
            </defs>
          </svg>
          <h2>Book Table</h2>
        </article>
        <section className={styles['card__container']}>
          <Card>
            <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="80" cy="80" r="80" fill="#00BE1E"/>
              <circle cx="80" cy="80" r="50" fill="white"/>
              <path d="M76.19 74.864C77.744 73.394 79.802 72.218 83.12 72.218C89.126 72.218 93.116 76.502 93.116 82.046C93.116 88.472 88.706 92.672 81.734 92.672C72.158 92.672 69.05 85.448 69.05 77.888C69.05 67.388 74.048 62.306 81.482 62.306C87.11 62.306 91.352 65.666 92.276 70.328H85.136C84.926 69.32 84.002 67.64 81.356 67.64C77.744 67.64 76.274 70.622 76.19 74.78V74.864ZM81.314 87.338C84.422 87.338 86.396 85.238 86.396 82.424C86.396 79.652 84.422 77.552 81.314 77.552C78.164 77.552 76.19 79.652 76.19 82.424C76.19 85.238 78.164 87.338 81.314 87.338Z" fill="black"/>
              <rect x="68" y="96" width="25" height="3" fill="black"/>
            </svg>
            <CardTitle>
              Regular Table
            </CardTitle>
            <CardStatus tableStatus={true} />
          </Card>
        </section>
      </section>
    </>
  )
}

export default TableBook