import styles from './grid.module.css'
import Image from 'next/image'

export default function Grid() {
  const works = [
    {
      title: 'Work 1',
      description: 'This is a description of the work 1',
      image: '/images/works/work-1.jpeg'
    },
    {
      title: 'Work 2',
      description: 'This is a description of the work 2',
      image: '/images/works/work-2.jpeg'
    },
    {
      title: 'Work 3',
      description: 'This is a description of the work 3',
      image: '/images/works/work-3.jpeg'
    },
    {
      title: 'Work 4',
      description: 'This is a description of the work 4',
      image: '/images/works/work-4.jpeg'
    },
    {
      title: 'Work 5',
      description: 'This is a description of the work 5',
      image: '/images/works/work-5.jpeg'
    },{
      title: 'Work 6',
      description: 'This is a description of the work 6',
      image: '/images/works/work-6.jpeg'
    }
  ]
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
