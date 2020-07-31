import Nav from '../components/nav';
import styles from '../styles/about.module.css'

export default function About() {
  return (
    <React.Fragment>
      <Nav />
      <main className={styles.main}>
        <h2>About Us</h2>
      </main>
    </React.Fragment>
  );
}
