import "@styles/globals.css";
// import "@styles/swiper-bundle.css";
// import "@styles/swiper.scss";

// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";

function Application({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <Component {...pageProps} />
    </>
  );
}

export default Application;
