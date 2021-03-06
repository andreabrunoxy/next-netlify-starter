import "@styles/globals.css";

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
