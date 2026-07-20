import project1 from "../../assets/img/project-1.svg";
import project2 from "../../assets/img/project-2.svg";
import styles from "./Gallery.module.scss";

const PROJECTS = [
  {
    id: "project-1",
    src: project1,
    alt: "Kod redaktoru açıq olan iş masası, iki monitor",
  },
  {
    id: "project-2",
    src: project2,
    alt: "Noutbuk ekranında rəngli proqram kodu",
  },
];

export default function Gallery() {
  return (
    <section className={styles.gallery} id="gallery" aria-labelledby="gallery-title">
      <div className={styles.gallery__inner}>
        <h2 className={styles.gallery__title} id="gallery-title">
          Layihələrimiz (Qalereya)
        </h2>

        <div className={styles.gallery__grid}>
          {PROJECTS.map((project) => (
            <figure className={styles.gallery__item} key={project.id}>
              <img
                className={styles.gallery__img}
                src={project.src}
                alt={project.alt}
                loading="lazy"
                width="800"
                height="600"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
