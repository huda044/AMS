import { daysDifferCount, formatToAbrFormat } from "@/app/utils/datetime";
import styles from "./styles.module.css";
import Card from "@/app/_components/Card/Card";
import Image from "next/image";

import { bookingTotalPrice, nightTotalPrice } from "@/app/utils/reservationsCalcs";

const SUPABASE_ROOMS_URL = process.env.NEXT_PUBLIC_SUPABASE_IMGS_URL;

function CheckoutOverview({ reservation, guests, start, end }) {
  const totalNights = daysDifferCount(end, start);
  const totalPerNight = nightTotalPrice(reservation.rooms.price, guests);
  const guestsPrice = ((guests - 1) * (reservation.rooms.price / 2)).toFixed(2);
  const totalPrice = bookingTotalPrice(reservation.rooms.price, guests, totalNights);

  return (
    <div>
      <Card>
        <Card.Thumbnail>
          <Image
            fill
            src={`${SUPABASE_ROOMS_URL}/${reservation.rooms.thumbnail}`}
            alt={`Gambar thumbnail untuk ${reservation.rooms.name}`}
          />
        </Card.Thumbnail>

        <Card.Description className={styles.overviewDescription}>
          <h2>{reservation.rooms.name}</h2>
          <div className={styles.bookingSummary}>
            <h3>Ringkasan Pemesanan</h3>
            <p>
              <span>Kedatangan</span>
              <span>{formatToAbrFormat(new Date(start))}</span>
            </p>
            <p>
              <span>Keberangkatan</span>
              <span>{formatToAbrFormat(new Date(end))}</span>
            </p>
            <p>
              <span>Jumlah Tamu</span>
              <span>{String(guests).padStart(2, "0")}</span>
            </p>
          </div>

          <div className={styles.bookingSummary}>
            <h3>Rincian Harga</h3>
            <p>
              <span>Rp{reservation.rooms.price.toFixed(2)} per malam (Tarif Dasar untuk 1 Tamu)</span>
              <span>Rp{reservation.rooms.price.toFixed(2)}</span>
            </p>
            <p>
              <span>
                Tamu Tambahan ({guests - 1} x Rp{Number(reservation.rooms.price / 2).toFixed(2)} per malam)
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
