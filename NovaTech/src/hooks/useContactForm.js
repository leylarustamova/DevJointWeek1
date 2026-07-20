import { useState } from "react";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const INITIAL_VALUES = { name: "", email: "", message: "" };
const INITIAL_ERRORS = { name: "", email: "", message: "" };

const MESSAGES = {
  name: {
    required: "Zəhmət olmasa adınızı və soyadınızı daxil edin.",
  },
  email: {
    required: "Zəhmət olmasa elektron poçt ünvanınızı daxil edin.",
    invalid: "Zəhmət olmasa düzgün elektron poçt ünvanı daxil edin.",
  },
  message: {
    required: "Zəhmət olmasa mesajınızı yazın.",
  },
};

function validateField(name, value) {
  const trimmed = value.trim();
  const rules = MESSAGES[name];

  if (trimmed === "") return rules.required;
  if (name === "email" && !EMAIL_REGEX.test(trimmed)) return rules.invalid;
  return "";
}

/**
 * Əlaqə formunun bütün state və validasiya məntiqini bir yerdə saxlayır:
 * dəyərlər, xətalar, submit statusu. Contact komponenti yalnız UI-ı göstərir.
 */
export function useContactForm() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setIsSubmitted(false);
  }

  function handleBlur(event) {
    const { name, value } = event.target;
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = {
      name: validateField("name", values.name),
      email: validateField("email", values.email),
      message: validateField("message", values.message),
    };
    setErrors(nextErrors);

    const hasErrors = Object.values(nextErrors).some(Boolean);
    if (hasErrors) {
      setIsSubmitted(false);
      return;
    }

    // Backend olmadığı üçün göndərməni simulyasiya edirik
    setIsSubmitted(true);
    setValues(INITIAL_VALUES);
    setErrors(INITIAL_ERRORS);
  }

  return { values, errors, isSubmitted, handleChange, handleBlur, handleSubmit };
}
