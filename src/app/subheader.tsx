import styles from "./style/subheader.module.css";

export default function Home() {
  return (
    <section className={styles.header}>
      <div className={styles.title}>The Modern Landing page for</div>
      <div className={styles.subtitle}>React developers</div>
      <div className={styles.tagline}>
        The easiest way to build a React landing page in seconds.
      </div>
      <div className={styles.btn}>Download Your Free Theme</div>
    </section>
  );
}
