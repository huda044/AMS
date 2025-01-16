"use client";

import ConfirmationButton from "../ConfirmationButton";
import styles from "./styles.module.css";

const initialState = {
  namaLengkap: "",
  email: "",
  telepon: "",
  noIdentitas: "",
  pesan: "",
  kesalahanKritis: "",
};


function ReservationForm({ capacity, setGuests, guests, handleSubmit, children }) {
  return (
    <form action={handleSubmit} className={styles.form}>
      <div>
        <div className={styles.formControl}>
          <label htmlFor="" className={styles.formLabel}>
          Nomor Tamu:
          </label>
          <select
            defaultValue={guests}
            name=""
            id=""
            className={styles.formInput}
            onChange={(e) => (e.target.value ? setGuests(e.target.value) : null)}
          >
            <option value="">Pilih nomor tamu</option>
            {Array.from(Array(capacity ?? 0)).map((item, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
        {children}
      </div>
      <div>
        <ConfirmationButton />
      </div>
    </form>
  );
}

export default ReservationForm;
