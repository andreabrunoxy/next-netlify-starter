import { useRef } from "react";
import useOnScreen from "hooks/useOnScreen";
import styles from "./Footer.module.css";

export default function Footer() {
  /*useOnScreen*/
  const ref = useRef(null);
  // useEffect(() => {}, []);
  const isVisible = useOnScreen(ref);
  console.log("isVisible", isVisible);
  /*End of useOnScreen*/
  return (
    <>
      <footer ref={ref} className={isVisible ? styles.footer : styles.prev}>
        Made with <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} />{" "}
        for you
      </footer>
    </>
  );
}
