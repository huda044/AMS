"use client";

import Alert from "@/app/_ui/Alert";
import ConfirmationButton from "../ConfirmationButton";
import styles from "./styles.module.css";
import { useFormState } from "react-dom";

import CancelButton from "../CancelButton";
import { useTransition } from "react";
import toast, { Toaster } from "react-hot-toast";

const initialState = {
  namalengkap: "",
  email: "",
  phone: "",
  nasionalID: "",
  pesan: "",
  criticalError: "",
};

function CheckoutForm({ guest, createReservationAction, bookingCancelAction, children }) {
  const [state, formAction] = useFormState(createReservationAction, initialState);

  const [isPending, setTransition] = useTransition();

  function handleCancel() {
    setTransition(async () => await bookingCancelAction());
  }

  const errors = Object.values(state)?.filter((item) => item.length);
  console.log(errors);
  if (errors.length) errors.forEach((item) => toast.error(item ?? "Gagal mengonfirmasi pemesanan Anda, silakan coba lagi"));

  return (
    <form action={formAction} className={styles.form}>
      <h2 className={styles.formHeading}>Konfirmasi Reservasi</h2>

      {state?.criticalError && <Alert>{state?.criticalError}</Alert>}

      <div className={styles.formControlRow}>
        <div className={styles.formControl}>
          <label htmlFor="" className={styles.formLabel}>
            Namalengkap
          </label>
          <input type="teks" name="namalengkap" defaultValue={guest.fullname} className={styles.formInput} />
          {state?.fullname && <span className={styles.errorMessage}>{state?.fullname}</span>}
        </div>

        <div className={styles.formControl}>
          <label htmlFor="" className={styles.formLabel}>
            NasionalID
          </label>
          <input type="teks" name="nasionalID" defaultValue={guest.nationalID} className={styles.formInput} />
          {state?.nationalID && <span className={styles.errorMessage}>{state?.nationalID}</span>}
        </div>
      </div>

      <div className={styles.formControl}>
        <label htmlFor="" className={styles.formLabel}>
          Alamat Email
        </label>
        <input type="email" name="email" defaultValue={guest.email} className={styles.formInput} />
        {state?.email && <span className={styles.errorMessage}>{state?.email}</span>}
      </div>

      <div className={styles.formControl}>
        <label htmlFor="" className={styles.formLabel}>
          Nomor Handphone
        </label>
        <input type="tel" name="phone" defaultValue={guest.phone} className={styles.formInput} />
        {state?.phone && <span className={styles.errorMessage}>{state?.phone}</span>}
      </div>

      <div className={styles.formControl}>
        <label htmlFor="" className={styles.formLabel}>
          <span>Dari mana Anda berasal?</span>{" "}
          <span className={styles.countryFlag}>
            <img src={guest.countryFlag} alt={`${guest.nationality ?? "kota"} flag`} />
          </span>
        </label>
        {children}
        {state?.nationality && <span className={styles.errorMessage}>{state?.nationality}</span>}
      </div>

      <div className={styles.formControl}>
        <label htmlFor="" className={styles.formLabel}>
        Informasi Lebih Lanjut
        </label>
        <textarea name="pesan" id="" className={styles.formTextArea} rows={5}></textarea>
        {state?.message && <span className={styles.errorMessage}>{state?.message}</span>}
      </div>

      <div className={styles.checkOutButtons}>
        <ConfirmationButton disabled={isPending} />
        <CancelButton isLoading={isPending} handleCancel={handleCancel} />
      </div>
      <Toaster position="top-center" reverseOrder={true} />
    </form>
  );
}

export default CheckoutForm;
