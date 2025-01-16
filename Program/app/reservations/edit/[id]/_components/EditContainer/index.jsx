"use client";
import { useCallback, useState } from "react";
import CheckoutOverview from "../CheckoutOverview";
import ReservationForm from "../ReservationForm";

import FormDayPicker from "@/app/rooms/[room_slug]/_components/FormDayPicker";
import { formatISO } from "date-fns";
import { useFormState } from "react-dom";
import toast, { Toaster } from "react-hot-toast";

const initialState = {};

function EditContainer({ reservation, reservationUpdateAction }) {
  const [state, formAction] = useFormState(reservationUpdateAction, initialState);

  const [startDate, setStartDate] = useState(new Date(reservation.start_date));
  const [endDate, setEndDate] = useState(new Date(reservation.end_date));
  const [guests, setGuests] = useState(reservation.guests_count);

  const handleDateSelection = useCallback((range) => {
    console.log(range);
    if (!range) return;

    const from = formatISO(range?.from, { representation: "tanggal" });
    const to = formatISO(range?.to, { representation: "tanggal" });

    console.log(from, to);
    setStartDate(from);
    setEndDate(to);
  }, []);

  async function handleSubmit() {
    const reservationFormData = new FormData();
    reservationFormData.set("tanggal_mulai", startDate);
    reservationFormData.set("tanggal_akhir", endDate);
    reservationFormData.set("tamu", guests);
    reservationFormData.set("reservation_id", reservation.id);

    await formAction(reservationFormData);
  }

  if (state.status === "sukses") toast.success("Reservasi Anda telah diperbarui!");
  else if (state.error) toast.error(state.error);

  return (
    <>
      <ReservationForm
        handleDateSelection={handleDateSelection}
        capacity={reservation.rooms.capacity}
        setGuests={setGuests}
        guests={guests}
        handleSubmit={handleSubmit}
      >
        <FormDayPicker handleDateSelection={handleDateSelection} start={startDate} end={endDate} />
      </ReservationForm>
      <CheckoutOverview reservation={reservation} start={startDate} end={endDate} guests={guests} />
      <Toaster position="top-center" reverseOrder={true} />
    </>
  );
}

export default EditContainer;
