import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function App() {
  return (
    <>
      <Head>
        <title>Treasure Hunting AK</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <main className={styles.header}>
          <h1 className={styles.title}>Welcome to Treasure Hunting AK</h1>
          <p className={styles.description}>Discover Alaska</p>
          <section className={styles.grid}>
            <Link href="/about">
              <div className={styles.card}>
                <h3>About</h3>
              </div>
            </Link>
            <Link href="/contact">
              <div className={styles.card}>
                <h3>Contact</h3>
              </div>
            </Link>
            <Link href="/shop">
              <div className={styles.card}>
                <h3>Shop</h3>
              </div>
            </Link>
          </section>
        </main>
      </div>
    </>
  );
}
