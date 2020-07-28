import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Treasure Hunting AK</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome to Treasure Hunting AK</h1>
        <p className={styles.description}>Discover Alaska</p>
      </header>
    </div>
  );
}
