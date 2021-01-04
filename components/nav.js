import Head from 'next/head';
import { AppBar, Slide, Toolbar } from '@material-ui/core';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/nav.module.css';

export default function Nav() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Treasure Hunting AK</title>
      </Head>
      <Slide in={router.pathname !== '/'}>
        <AppBar position="fixed">
          <Toolbar>
            <Link href="/">
              <h1>Treasure Hunting AK</h1>
            </Link>
            <nav className={styles.nav}>
              <Link href="/contact">Contact Us</Link>
              <Link href="/about">About Us</Link>
              <Link href="/shop">Shop</Link>
            </nav>
          </Toolbar>
        </AppBar>
      </Slide>
    </>
  );
}
