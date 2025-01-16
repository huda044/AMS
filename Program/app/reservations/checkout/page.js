import Banner from "@/app/_components/Banner";
import CheckoutForm from "./_components/CheckoutSection";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Pembayaran Reservasi",
  description: "Lakukan reservasi dan nikmati masa menginap Anda bersama kami",
};

async function Page() {
  const session = await auth();

  if (!session) return redirect("/signin");

  return (
    <>
      <Banner title={"CHECKOUT"} />
      <CheckoutForm />
    </>
  );
}

export default Page;
