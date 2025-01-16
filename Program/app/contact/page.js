import Banner from "../_components/Banner";
import Contact from "../_components/Contact";

export const metadata = {
  title: "Hubungi Kami",
  description: "Hubungi Aplikasi Reservasi Hotel ",
};

async function Page() {
  return (
    <>
      <Banner title={"HUBUNGI KAMI"} />
      <Contact />
    </>
  );
}

export default Page;
