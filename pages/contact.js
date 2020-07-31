import Nav from '../components/nav';
import styles from '../styles/contact.module.css';

export default function contact() {
  return (
    <React.Fragment>
      <Nav />
      <main className={styles.main}>
        <h2>Contact</h2>
      </main>
    </React.Fragment>
  );
}
