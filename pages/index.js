import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Link from "next/link";
import MySwiper from "@components/MySwiper";
import Carousel from "react-bootstrap/Carousel";
import MyCarousel from "@components/MyCarousel";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Netlify Contact Form" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <div>
          <Link href="/contact">
            <a className={styles.btn}>Contattaci</a>
          </Link>
        </div>
        <h2>React-Bootstrap Carousel</h2>
        <MyCarousel />
      </main>

      <Footer />
    </div>
  );
}
