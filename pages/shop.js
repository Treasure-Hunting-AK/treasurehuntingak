import Head from 'next/head';
import Nav from '../components/nav';
import styles from '../styles/shop.module.css';

export default function shop() {
  return (
    <React.Fragment>
      <Nav />
      <main className={styles.main}>
        <h2>Shop</h2>
      </main>
    </React.Fragment>
  );
}
