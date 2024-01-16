import styles from './header.module.css'
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__lg}>
        <Image
            src='/images/lg.png'
            width={80}
            height={0}
            priority={true}
            alt="2 Squared agency"
            style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <nav className={styles.header__nav}>
        <ul>
          <li><Link href='/'>Work</Link></li>
          <li><Link href='/about'>About</Link></li>
        </ul>
      </nav>
    </header>
  )
}

