import "@styles/globals.css";

// swiper css
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
// react-responsive-carousel css
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Head from "next/head";
import { createContext } from "react";

export const titleContext = createContext();

function Application({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <Component {...pageProps} />
    </>
  );
}

export default Application;
