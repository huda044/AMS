import styles from "./style.module.css";
import Heading from "@/app/_ui/Heading";
import ReservationCard from "./_components/ReservationCard";
import { getGuestReservations } from "@/app/_lib/supabase/reservations";
import { auth } from "@/auth";
import Link from "next/link";

export const metadata = {
  title: "Riwayat Pemesanan",
  description: "Riwayat pemesanan di Aplikasi Pemesanan Hotel",
};

async function History() {
  let session = {};
  let reservations = [];
  try {
    session = await auth();
    console.log({ HISTORY_SESSION: session });
    reservations = (await getGuestReservations(session.user?.id)) ?? [];
  } catch (err) {
    console.log(err);
  }

  return (
    <>
      <Heading textClassName={styles.heading}>Riwayat Anda</Heading>
      <div>
        {reservations.length ? (
          reservations.reverse().map((item) => <ReservationCard key={item.id} reservation={item} />)
        ) : (
          <div>
            <p>Anda belum memiliki pemesanan kamar.</p>
            <Link href={"/rooms"}>Lihat Kamar</Link>
          </div>
        )}
      </div>
    </>
  );
}

export default History;
