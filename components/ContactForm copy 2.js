import styles from "../styles/ContactForm.module.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Pulse from "react-reveal/Pulse";

export default function ContactForm() {
  const [nameActive, setNameActive] = useState(false);
  const [emailActive, setEmailActive] = useState(false);
  const [objActive, setObjActive] = useState(false);
  const [msgActive, setMsgActive] = useState(false);

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  // function onSubmitForm(data) {
  //   alert("Messaggio inviato, grazie!");
  //   console.log(data);
  //   reset();
  // }

  const onSubmitForm = (data, e) => {
    e.preventDefault();
    fetch("/contact", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data })
    }).then(() => {
      console.log(data);
      alert("Messaggio inviato");
      reset();
    });
  };

  return (
    <div>
      <div className={styles.formContainer}>
        <h2>Contattaci</h2>
        <form
          onSubmit={handleSubmit(onSubmitForm)}
          className={styles.contactForm}
          // name="contact"
          // method="POST"
          // action="/"
          data-netlify="true"
        >
          <input
            type="hidden"
            name="form-name"
            value="contact"
            {...register("form-name", { required: true })}
          />
          <input type="hidden" name="subject" value="Messaggio da Netlify form" />
          <p>
            <label className={styles.label} htmlFor="yourname">
              Il tuo nome*:{" "}
            </label>{" "}
            <br />
            {/* <Pulse spy={nameActive} duration={400}> */}
            <input
              className={errors.name ? styles.inputError : styles.input}
              type="text"
              name="name"
              id="yourname"
              {...register("name", {
                required: { value: true, message: "Inserisci il tuo nome" }
              })}
              onClick={() => (nameActive ? setNameActive(false) : setNameActive(true))}
            />
            {/* </Pulse> */}
            <span className={styles.error}>{errors.name && errors.name.message}</span>
          </p>
          <p>
            <label className={styles.label} htmlFor="youremail">
              La tua email*:{" "}
            </label>{" "}
            <br />
            {/* <Pulse spy={emailActive} duration={400}> */}
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
              onClick={() => (emailActive ? setEmailActive(false) : setEmailActive(true))}
            />
            {/* </Pulse> */}
            <span className={styles.error}>{errors.email && errors.email.message}</span>
          </p>
          <p>
            <label className={styles.label} htmlFor="yourobject">
              Oggetto*:{" "}
            </label>{" "}
            <br />
            {/* <Pulse spy={objActive} duration={400}> */}
            <input
              className={errors.subject ? styles.inputError : styles.input}
              type="text"
              name="subject"
              id="yoursubject"
              {...register("subject", {
                required: { value: true, message: "Scrivi l'oggetto." }
              })}
              onClick={() => (objActive ? setObjActive(false) : setObjActive(true))}
            />
            {/* </Pulse> */}
            <span className={styles.error}>
              {errors.subject && errors.subject.message}
            </span>
          </p>
          <p>
            <label className={styles.label} htmlFor="yourmessage">
              Messaggio*:{" "}
            </label>{" "}
            <br />
            {/* <Pulse spy={msgActive} duration={400}> */}
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
              onClick={() => (msgActive ? setMsgActive(false) : setMsgActive(true))}
            ></textarea>
            {/* </Pulse> */}
            <br />
            <span className={styles.error}>
              {errors.message && errors.message.message}
            </span>
          </p>
          <p>
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
