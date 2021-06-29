import styles from "../styles/ContactForm.module.css";

export default function ContactForm() {
  return (
    <div>
      <div className={styles.formContainer}>
        <h2>Contattaci</h2>
        <form
          className={styles.contactForm}
          name="contact"
          method="POST"
          action="/"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="subject" value="Messaggio da Netlify form" />
          <p>
            <label className={styles.label} htmlFor="yourname">
              Il tuo nome*:{" "}
            </label>{" "}
            <br />
            <input
              className={styles.input}
              type="text"
              name="name"
              id="yourname"
              required
            />
          </p>
          <p>
            <label className={styles.label} htmlFor="youremail">
              La tua email*:{" "}
            </label>{" "}
            <br />
            <input
              className={styles.input}
              type="email"
              name="email"
              id="youremail"
              required
            />
          </p>
          <p>
            <label className={styles.label} htmlFor="yourobject">
              Oggetto*:{" "}
            </label>{" "}
            <br />
            <input
              className={styles.input}
              type="text"
              name="subject"
              id="yoursubject"
              required
            />
          </p>
          <p>
            <label className={styles.label} htmlFor="yourmessage">
              Messaggio*:{" "}
            </label>{" "}
            <br />
            <textarea
              className={styles.textarea}
              name="message"
              id="yourmessage"
              required
            ></textarea>
          </p>
          <p>
            <div>
              <input type="checkbox" id="privacy" name="privacy" required />
              <label htmlFor="privacy"> Accetto la vostra Privacy Policy</label>
            </div>
            <br />
            <button className={styles.submitButton} type="submit">
              Invia
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
