import Image from 'next/image';
import styles from './text-cards.module.css'
import React from 'react';
import Title from '../title/title';


export default function TextCards({ content }) {
  return (
    <div className={styles.text_cards}>
      {content.map((item, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.image_container}>
            <Image src={item.image} alt="person" width={100} height={100} />
          </div>
          <div>
            <Title level={3}>{item.title}</Title>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )    
}
