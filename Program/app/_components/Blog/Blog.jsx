// TODO: Use Compound Component for this card, you have already built it once😤
import Heading from "@/app/_ui/Heading";
import styles from "./styles.module.css";
import Card from "../Card/Card";
import Image from "next/image";
function Blog() {
  return (
    <section className={styles.blogSection}>
      <div className="container">
        <Heading className={styles.heading}>Blog</Heading>
        <p className={styles.description}>Lorem Ipsum is available, but the majority have suffered</p>

        <div className={styles.blogGrid}>
          <Card>
            <Card.Thumbnail>
              <Image fill src="/bg.png" alt="" />
            </Card.Thumbnail>
            <Card.Description className={styles.blogDescriptionContainer}>
              <h2 className={styles.blogHeading}>Bed Room</h2>
              <p className={styles.blogLabel}>The standard chunck</p>
              <p className={styles.blogDescription}>
              Sangat penting bagi pelanggan untuk memperhatikan proses adipiscing. Biarlah pengampunan hidup lari, tetapi mereka tidak mengetahui jerih payah orang ini
                tapi terhindar dari kesenangan. Dan ketika tidak ada kewajiban untuk menolak rasa sakit dan rasa sakit dengan rasa sakit. dari mereka
                itu dimana!
              </p>
            </Card.Description>
          </Card>
          <Card>
            <Card.Thumbnail>
              <Image fill src="/bg.png" alt="" />
            </Card.Thumbnail>
            <Card.Description className={styles.blogDescriptionContainer}>
              <h2 className={styles.blogHeading}>Bed Room</h2>
              <p className={styles.blogLabel}>The standard chunck</p>
              <p className={styles.blogDescription}>
              Sangat penting bagi pelanggan untuk memperhatikan proses adipiscing. Biarlah pengampunan hidup lari, tetapi mereka tidak mengetahui jerih payah orang ini
                tapi terhindar dari kesenangan. Dan ketika tidak ada kewajiban untuk menolak rasa sakit dan rasa sakit dengan rasa sakit. dari mereka
                itu dimana!
              </p>
            </Card.Description>
          </Card>

          <Card>
            <Card.Thumbnail>
              <Image fill src="/bg.png" alt="" />
            </Card.Thumbnail>
            <Card.Description className={styles.blogDescriptionContainer}>
              <h2 className={styles.blogHeading}>Bed Room</h2>
              <p className={styles.blogLabel}>The standard chunck</p>
              <p className={styles.blogDescription}>
              Sangat penting bagi pelanggan untuk memperhatikan proses adipiscing. Biarlah pengampunan hidup lari, tetapi mereka tidak mengetahui jerih payah orang ini
                tapi terhindar dari kesenangan. Dan ketika tidak ada kewajiban untuk menolak rasa sakit dan rasa sakit dengan rasa sakit. dari mereka
                itu dimana!
              </p>
            </Card.Description>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Blog;
