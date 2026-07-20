import { useContactForm } from "../../hooks/useContactForm";
import FormField from "./FormField";
import styles from "./Contact.module.scss";

export default function Contact() {
  const { values, errors, isSubmitted, handleChange, handleBlur, handleSubmit } =
    useContactForm();

  return (
    <section className={styles.contact} id="contact" aria-labelledby="contact-title">
      <div className={styles.contact__inner}>
        <h2 className={styles.contact__title} id="contact-title">
          Bizimlə Əlaqə
        </h2>

        <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
          <FormField
            id="name"
            label="Ad və Soyad *"
            placeholder="Əli Məmmədov"
            value={values.name}
            error={errors.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <FormField
            id="email"
            type="email"
            label="Elektron poçt *"
            placeholder="mammadov.ali@company-domain.az"
            value={values.email}
            error={errors.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <FormField
            as="textarea"
            id="message"
            label="Mesajınız *"
            placeholder="Layihəniz barədə qısa məlumat..."
            rows={5}
            value={values.message}
            error={errors.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <button className={`btn btn--primary ${styles.contactForm__submit}`} type="submit">
            Göndər
          </button>

          {isSubmitted && (
            <p className={styles.contactForm__success} role="status">
              Mesajınız uğurla göndərildi. Təşəkkür edirik!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
