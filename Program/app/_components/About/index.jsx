import Heading from "@/app/_ui/Heading";
import styles from "./styles.module.css";
import Image from "next/image";

function About() {
  return (
    <section className={styles.aboutSection}>
      <div className={`container ${styles.aboutContainer}`}>
        <div className={styles.description}>
          <Heading>About Us</Heading>
          <p>
          Perusahaan itu sendiri adalah perusahaan yang sangat sukses. Oleh karena itu, pembawaan kebenaran akan menghasilkan suatu kebenaran yang adil
            setiap orang bijak menghendaki kesedihan jiwanya, namun ia mencegahnya agar tidak terlalu ditolak, dan mereka yang dibutakan oleh kesenangan
            kami memimpin untuk mengikuti! Sanjungannya menghambat pekerjaan masa kini. Dia tidak pernah mendapat masalah, dia hadir lebih sedikit dari siapa pun
            Karena terlahir dengan hasrat akan kesenangan itu, adakah perbedaan yang menghalanginya untuk mewujudkannya, dan bahkan kesalahan, seolah-olah? Benar
            Saya akan membuka milik kita untuk beberapa orang. saya mengikuti.
          </p>
        </div>
        <div className={styles.gallery}>
          <div>
            <Image fill src="/bg.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
