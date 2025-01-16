"use client";

import styles from "./styles.module.css";

import { useFormStatus } from "react-dom";

function CancelButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className={styles.deleteButton}>
      {pending ? <span>Memproses...</span> : <span>Konfirmasi</span>}
    </button>
  );
}

export default CancelButton;
