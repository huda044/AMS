"use client";
import styles from "./styles.module.css";
import { useFormStatus } from "react-dom";

function CancelButton({ handleCancel, isLoading }) {
  const { pending } = useFormStatus();
  return (
    <button type="tombol" onClick={handleCancel} className={styles.cancelButton} disabled={isLoading || pending}>
      {isLoading ? "Membatalkan..." : "Batal"}
    </button>
  );
}

export default CancelButton;
