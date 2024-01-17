import styles from './grid.module.css'
import Image from 'next/image'

export default function Grid({ works }) {
  return (
    <ul className={styles.grid}>
      {works.map((work, index) => 
        <li key={index}>
          <article className={styles.article}>
                <Image
                  src={work.image}
                  width={600}
                  height={0}
                  alt=''
                  priority={true}
                  quality={70}
                  style={{ width: '100%', height: 'auto' }}
              />
              <div className={styles.article_hover}>
                <h2>{work.title}</h2>
              </div>
          </article>
        </li>
      )}
    </ul>
  )
}
