import styles from '../styles/about.module.css';

export default function About() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.section}>
          <h2>About Us</h2>
          <p>
            Hello and welcome to Treasure Hunting AK! We are an Alaska based
            reselling shop that fully believes that one person’s trash is
            another person’s treasure! are passionate about salvaging items,
            cleaning them up, and getting them into the hands of people who see
            value in them. We also love to reuse, recycle, and repurpose.
          </p>
          <p>
            We are always on the hunt so head on over to our eBay shop and see
            what treasures we have found!
          </p>
        </section>
      </main>
    </>
  );
}
