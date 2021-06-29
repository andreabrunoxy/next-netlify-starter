import styles from "../styles/ContactForm.module.css";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  function onSubmitForm(values) {
    alert("Messaggio inviato, grazie!");
    console.log(values);
    reset();
  }

  return (
    <div>
      <div className={styles.formContainer}>
        <h2>Contattaci</h2>
        <form
          onSubmit={handleSubmit(onSubmitForm)}
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
              className={errors.name ? styles.inputError : styles.input}
              type="text"
              name="name"
              id="yourname"
              {...register("name", {
                required: { value: true, message: "Inserisci il tuo nome" }
              })}
            />
            <span className={styles.error}>{errors.name && errors.name.message}</span>
          </p>
          <p>
            <label className={styles.label} htmlFor="youremail">
              La tua email*:{" "}
            </label>{" "}
            <br />
            <input
              className={errors.email ? styles.inputError : styles.input}
              type="email"
              name="email"
              id="youremail"
              {...register("email", {
                required: { value: true, message: "Inserisci la tua email." },
                minLength: {
                  value: 8,
                  message: "L'email deve avere almeno 8 caratteri."
                },
                pattern: {
                  value:
                    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$",
                  message: "Devi inserire un indirizzo email valido."
                }
              })}
            />
            <span className={styles.error}>{errors.email && errors.email.message}</span>
          </p>
          <p>
            <label className={styles.label} htmlFor="yourobject">
              Oggetto*:{" "}
            </label>{" "}
            <br />
            <input
              className={errors.subject ? styles.inputError : styles.input}
              type="text"
              name="subject"
              id="yoursubject"
              {...register("subject", {
                required: { value: true, message: "Scrivi l'oggetto." }
              })}
            />
            <span className={styles.error}>
              {errors.subject && errors.subject.message}
            </span>
          </p>
          <p>
            <label className={styles.label} htmlFor="yourmessage">
              Messaggio*:{" "}
            </label>{" "}
            <br />
            <textarea
              className={errors.message ? styles.textAreaError : styles.textarea}
              name="message"
              id="yourmessage"
              {...register("message", {
                required: { value: true, message: "Scrivi il tuo messaggio." },
                minLength: {
                  value: 8,
                  message: "Message min 8 chars"
                }
              })}
            ></textarea>
            <br />
            <span className={styles.error}>
              {errors.message && errors.message.message}
            </span>
          </p>
          <p>
            <div>
              <input
                className={styles.checkbox}
                type="checkbox"
                id="privacy"
                name="privacy"
                {...register("privacy", {
                  required: {
                    value: true,
                    message: "Devi accettare la nostra Privacy Policy."
                  }
                })}
              />
              <label htmlFor="privacy"> Accetto la vostra Privacy Policy</label>
              <br />
              <span className={styles.error}>
                {errors.privacy && errors.privacy.message}
              </span>
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
