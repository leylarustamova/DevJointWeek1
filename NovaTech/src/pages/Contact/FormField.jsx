import styles from "./Contact.module.scss";

/**
 * Tək input/textarea sahəsini label + xəta mesajı ilə birlikdə göstərən
 * kiçik, təkrar istifadə oluna bilən komponent.
 */
export default function FormField({
  as = "input",
  id,
  label,
  error,
  ...inputProps
}) {
  const Field = as;

  return (
    <div className={styles.contactForm__field}>
      <label className={styles.contactForm__label} htmlFor={id}>
        {label}
      </label>
      <Field
        id={id}
        name={id}
        className={`${styles.contactForm__control} ${error ? styles.isInvalid : ""}`}
        aria-required="true"
        aria-invalid={Boolean(error)}
        aria-describedby={`${id}-error`}
        {...inputProps}
      />
      <span className={styles.contactForm__error} id={`${id}-error`} role="alert">
        {error}
      </span>
    </div>
  );
}
