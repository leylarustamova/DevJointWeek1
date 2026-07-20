import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__inner}>
        <p className={styles.footer__text}>&copy; 2026 NovaTech. Bütün hüquqlar qorunur.</p>
      </div>
    </footer>
  );
}
