import { useMobileMenu } from "../../hooks/useMobileMenu";
import styles from "./Header.module.scss";

const NAV_LINKS = [
  { href: "#about", label: "Haqqımızda" },
  { href: "#gallery", label: "Qalereya" },
  { href: "#contact", label: "Əlaqə" },
];

export default function Header() {
  const { isOpen, close, toggle } = useMobileMenu();

  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <a className={styles.header__logo} href="#top" aria-label="NovaTech ana səhifə">
          NovaTech
        </a>

        <button
          className={styles.header__toggle}
          type="button"
          aria-expanded={isOpen}
          aria-controls="primaryNav"
          aria-label={isOpen ? "Menyunu bağla" : "Menyunu aç"}
          onClick={toggle}
        >
          <span
            className={`${styles.header__toggleBar} ${isOpen ? styles.isOpenBar1 : ""}`}
          />
          <span
            className={`${styles.header__toggleBar} ${isOpen ? styles.isOpenBar2 : ""}`}
          />
          <span
            className={`${styles.header__toggleBar} ${isOpen ? styles.isOpenBar3 : ""}`}
          />
        </button>

        <nav
          className={`${styles.nav} ${isOpen ? styles.isOpen : ""}`}
          id="primaryNav"
          aria-label="Əsas naviqasiya"
        >
          <ul className={styles.nav__list}>
            {NAV_LINKS.map((link) => (
              <li className={styles.nav__item} key={link.href}>
                <a className={styles.nav__link} href={link.href} onClick={close}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
