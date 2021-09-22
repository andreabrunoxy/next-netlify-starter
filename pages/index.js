import Head from 'next/head';
import Header from '@components/Header/Header';
import Footer from '@components/Footer';
import Link from 'next/link';
import MyCarousel from '@components/MyCarousel';
import styles from '../styles/Home.module.css';
import ResponsiveCarousel from '@components/ResponsiveCarousel';
import { createContext, useState, useEffect, useRef } from 'react';
import useOnScreen from 'hooks/useOnScreen';

export const titleContext = createContext();

export default function Home({ posts }) {
  /*Parallax Effect*/
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  /*End of Parallax Effect*/

  /*useOnScreen*/
  const ref = useRef(null);
  // useEffect(() => {}, []);
  const isVisible = useOnScreen(ref);
  console.log('isVisible', isVisible);
  /*End of useOnScreen*/

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*Apply parallax effect al main container*/}
      <main className="main" style={{ transform: `translateY(${-offsetY * 0.3}px)` }}>
        <Header title="Netlify Contact Form" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <div>
          <Link href="/contact">
            <a
              ref={ref}
              className={
                isVisible ? `${styles['btn']} ${styles['new']}` : `${styles['btn']}`
              }
            >
              Contattaci
            </a>
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
