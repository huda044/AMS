import { daysDifferCount, formatToAbrFormat } from "@/app/utils/datetime";
import styles from "./styles.module.css";
import Card from "@/app/_components/Card/Card";
import Image from "next/image";

import { bookingTotalPrice, nightTotalPrice } from "@/app/utils/reservationsCalcs";

const SUPABASE_ROOMS_URL = process.env.NEXT_PUBLIC_SUPABASE_IMGS_URL;

function CheckoutOverview({ room, pending_reservation }) {
  const totalNights = daysDifferCount(pending_reservation.end_date, pending_reservation.start_date);
  const totalPerNight = nightTotalPrice(room.price, pending_reservation.guests_count);
  const guestsPrice = ((pending_reservation.guests_count - 1) * (room.price / 2)).toFixed(2);
  const totalPrice = bookingTotalPrice(room.price, pending_reservation.guests_count, totalNights);
  return (
    <div>
      <Card>
        <Card.Thumbnail>
          <Image fill src={`${SUPABASE_ROOMS_URL}/${room.thumbnail}`} alt={`Gambar thumbnail untuk ${room.name}`} />
        </Card.Thumbnail>

        <Card.Description className={styles.overviewDescription}>
          <h2>{room.name}</h2>
          <div className={styles.bookingSummary}>
            <h3>Ringkasan Pemesanan</h3>
            <p>
              <span>Kedatangan</span>
              <span>{formatToAbrFormat(pending_reservation.start_date)}</span>
            </p>
            <p>
              <span>Keberangkatan</span>
              <span>{formatToAbrFormat(pending_reservation.end_date)}</span>
            </p>
            <p>
              <span>Tamu</span>
              <span>{String(pending_reservation.guests_count).padStart(2, "0")}</span>
            </p>
          </div>

          <div className={styles.bookingSummary}>
            <h3>Rincian Harga</h3>
            <p>
              <span>Rp{room.price} per malam (Tarif Dasar untuk 1 Tamu)</span>
              <span>Rp{room.price.toFixed(2)}</span>
            </p>
            <p>
              <span>
                Tamu Tambahan ({pending_reservation.guests_count - 1} x Rp{room.price / 2} per malam)
              </span>
              <span>Rp{guestsPrice}</span>
            </p>
            <p>
              <span>Total per Malam: </span>
              <span>Rp{totalPerNight}</span>
            </p>
          </div>

          <div className={styles.totalPrice}>
            <span>Total Tanpa Pajak ({totalNights} Malam)</span>
            <span>Rp{totalPrice}</span>
          </div>
        </Card.Description>
      </Card>
    </div>
  );
}

export default CheckoutOverview;
