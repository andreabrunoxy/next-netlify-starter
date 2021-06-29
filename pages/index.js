import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Link from "next/link";
import MyCarousel from "@components/MyCarousel";
import styles from "../styles/Home.module.css";
import ResponsiveCarousel from "@components/ResponsiveCarousel";
import { createContext, useState, useEffect } from "react";

export const titleContext = createContext();

export default function Home({ posts }) {
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
        <div className="carousel-container">
          <h2>React-Bootstrap Carousel</h2>
          <titleContext.Provider value={posts}>
            <MyCarousel />
          </titleContext.Provider>
        </div>
        <div className="carousel-container">
          <h2>react-responsive-carousel</h2>
          <ResponsiveCarousel />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = encodeURIComponent(`*[ _type == "post"]`);
  const url = `https://tz6k1w72.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then(res => res.json());
  const posts = result.result;
  // const post = result.result[2];

  if (!posts) {
    return {
      props: {
        posts: []
      }
    };
  } else {
    return {
      props: {
        posts
      }
    };
  }
};
