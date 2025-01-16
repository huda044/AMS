import Banner from "@/app/_components/Banner";
import EditSection from "./_components/EditSection";
import { notFound } from "next/navigation";
import { getReservationByID } from "@/app/_lib/supabase/reservations";
import { auth } from "@/auth";

export const metadata = {
  title: "Edit Reservasi",
  description: "Edit reservasi Anda yang sudah dipesan ",
};

async function Page({ params }) {
  const reservation_id = params?.id;

  const reservation = await getReservationByID(reservation_id);
  if (!reservation) notFound();

  const isUpdateAllowed = reservation.status === "terkonfirmasi" || reservation.status === "belum dikonfirmasi";

  if (!isUpdateAllowed) return <h4>Maaf, reservasi tidak dapat diedit.</h4>;

  const session = await auth();

  if (session?.user.id !== reservation.guest_id)
    return (
      <div className="penampung">
        <h2>Tindakan tanpa izin!</h2>
      </div>
    );
  return (
    <>
      <Banner title={"EDIT RESERVASI"} />
      <EditSection reservation={reservation} />
    </>
  );
}

export default Page;
