import { useState } from 'react';
import ContactForm from '@components/ContactForm';
import Modal from '@components/Modal';

export default function Contact() {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* <button onClick={() => setShow(true)}>Show Modal</button> */}
      <Modal
        title="Messaggio Inviato!"
        children="Verrai ricontattato prima possibile, grazie."
        onClose={() => setShow(false)}
        whenSubmit={() => setShow(false)}
        show={show}
      />
      <ContactForm setShow={setShow} />
    </>
  );
}
