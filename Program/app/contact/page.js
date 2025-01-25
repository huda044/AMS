import Banner from "../_components/Banner";
import Contact from "../_components/Contact";

export const metadata = {
  title: "Contact Us",
  description: "Hubungi Aplikasi Pemesanan Hotel",
};

async function Page() {
  return (
    <>
      <Banner title={"REACHING OUT"} />
      <Contact />
    </>
  );
}

export default Page;
