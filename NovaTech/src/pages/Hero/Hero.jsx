import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.hero__inner}>
        <h1 className={styles.hero__title}>
          Rəqəmsal Dünyada Sizin Güvənli Tərəfdaşınız
        </h1>
        <p className={styles.hero__subtitle}>
          Biz biznesiniz üçün ən innovativ web və mobil həlləri sıfırdan hazırlayırıq.
        </p>
        <a className="btn btn--primary" href="#contact">
          Bizimlə Əlaqə
        </a>
      </div>
    </section>
  );
}
