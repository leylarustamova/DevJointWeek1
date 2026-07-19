import styles from "./About.module.scss";

const STATS = [
  { id: "projects", number: "150+", label: "Uğurlu Layihə" },
  { id: "satisfaction", number: "99%", label: "Müştəri Məmnuniyyəti" },
];

const SUPPORT_URL =
  "https://novatech-solutions.az/super-long-url-tracking-token-id-9876543210qwertyuiopasdfghjklzxcvbnm1234567890";

export default function About() {
  return (
    <section className={styles.about} id="about" aria-labelledby="about-title">
      <div className={styles.about__inner}>
        <h2 className={styles.about__title} id="about-title">
          Haqqımızda
        </h2>

        <div className={styles.about__content}>
          <div className={styles.about__text}>
            <h3 className={styles.about__subtitle}>Niyə bizi seçməlisiniz?</h3>
            <p className={styles.about__desc}>
              10 ildən artıq təcrübəmizlə layihələrinizi vaxtında və yüksək keyfiyyətlə
              təhvil veririk. Sürət, təhlükəsizlik və əlçatanlıq bizim əsas
              prinsiplərimizdir.
            </p>

            <div className={styles.about__support}>
              <p className={styles.about__supportLabel}>Texniki Dəstək Linkimiz:</p>
              <a className={styles.about__supportLink} href={SUPPORT_URL}>
                {SUPPORT_URL}
              </a>
            </div>
          </div>

          <dl className={styles.stats}>
            {STATS.map((stat) => (
              <div className={styles.stats__item} key={stat.id}>
                <dt className={styles.stats__number}>{stat.number}</dt>
                <dd className={styles.stats__label}>{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
