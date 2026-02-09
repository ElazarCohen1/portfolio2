'use client'

import emailjs from 'emailjs-com'
import '../styles/Contact.css'

export default function Contact() {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_b18m2kl',
        'template_v7qcr4g',
        e.currentTarget,
        'WmlYF4YJCU6yWSCGT'
      )
      .then(
        () => {
          alert('Message sent successfully! Thank you for contacting me.')
        },
        (error) => {
          alert('Error while sending: ' + error.text)
        }
      )

    e.currentTarget.reset()
  }

  return (
    <div id="contact_page">
      <h1 id="title_contact">Contact</h1>

      <p id="text_contact">
        Don&apos;t hesitate to send me a message, I will respond quickly.
      </p>

      <form id="formulaire_contact" onSubmit={sendEmail}>
        <div className="form_group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form_group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form_group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={5} required />
        </div>

        <button type="submit" id="submit_btn">
          Submit
        </button>
      </form>
    </div>
  )
}
