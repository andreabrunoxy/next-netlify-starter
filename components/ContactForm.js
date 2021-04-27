import styles from "@styles/ContactForm.module.css";

export default function ContactForm() {
  return (
    <div className={styles.container}>
      <h2>Contact me!</h2>
      <form
        className={styles.contactForm}
        name="contact"
        method="POST"
        action="/"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label htmlFor="yourname">Your Name:</label> <br />
          <input type="text" name="name" id="yourname" />
        </p>
        <p>
          <label htmlFor="youremail">Your Email:</label> <br />
          <input type="email" name="email" id="youremail" />
        </p>
        <p>
          <label htmlFor="yourmessage">Message:</label> <br />
          <textarea name="message" id="yourmessage"></textarea>
        </p>
        <p>
          <button className={styles.submitButton} type="submit">
            Send
          </button>
        </p>
      </form>
    </div>
  );
}
