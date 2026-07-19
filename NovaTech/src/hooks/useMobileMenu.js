import { useEffect, useState } from "react";

/**
 * Mobil naviqasiya menyusunun açıq/bağlı vəziyyətini idarə edir.
 * Header komponentindən ayrılıb, çünki bu məntiq başqa yerlərdə də
 * (məs. overlay menyu) təkrar istifadə oluna bilər.
 */
export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((prev) => !prev);

  // Eskeyp düyməsi ilə menyunu bağla
  useEffect(() => {
    if (!isOpen) return undefined;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        close();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return { isOpen, open, close, toggle };
}
