import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Treasure Hunting AK</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.header}>
        <h1 className={styles.title}>Welcome to Treasure Hunting AK</h1>
        <p className={styles.description}>Discover Alaska</p>
        <section className={styles.grid}>
          <Link href='/about'>
            <div className={styles.card}>
              <h3>About Us</h3>
            </div>
          </Link>
          <Link href='/contact'>
            <div className={styles.card}>
              <h3>Contact Us</h3>
            </div>
          </Link>
          <Link href='/shop'>
            <div className={styles.card}>
              <h3>Shop</h3>
            </div>
          </Link>
        </section>
      </main>
    </div>
  );
}
