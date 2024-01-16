import styles from './grid.module.css'

export default function Grid() {
  return (
    <ul className={styles.grid}>
      <li>
        <article className={styles.article}></article>
      </li>
      <li>
        <article className={styles.article}></article>
      </li>
      <li>
        <article className={styles.article}></article>
      </li>
      <li>
        <article className={styles.article}></article>
      </li>
      <li>
        <article className={styles.article}></article>
      </li>
      <li>
        <article className={styles.article}></article>
      </li>
    </ul>
  )
}
