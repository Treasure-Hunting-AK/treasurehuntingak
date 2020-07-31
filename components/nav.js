import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/nav.module.css';

export default function Nav() {
  return (
    <React.Fragment>
      <Head>
        <title>Treasure Hunting AK</title>
      </Head>
      <header className={styles.header}>
        <Link href='/'>
          <h1>Treasure Hunting AK</h1>
        </Link>
        <nav className={styles.nav}>
          <p>
            <Link href='/contact'>Contact Us</Link>
          </p>
          <p>
            <Link href='/shop'>Shop</Link>
          </p>
        </nav>
      </header>
    </React.Fragment>
  );
}
