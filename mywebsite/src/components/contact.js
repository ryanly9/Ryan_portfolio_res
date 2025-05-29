import React, { useRef } from 'react';
import './contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert("Email Sent!");
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <div className="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          I'd love to hear your feedback! Whether it's about my projects or how I can improve, 
          feel free to reach out.
        </span>

        <form ref={form} className="contactForm" onSubmit={sendEmail}>
          <input
            type="text"
            name="your_name"
            className="name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="your_email"
            className="email"
            placeholder="Your Email"
            required
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>

          <div className="links">
            <a href="mailto:example@gmail.com">
              <img src="/images/gmail.png" alt="Gmail" className="link" />
            </a>
            <a href="tel:+1234567890">
              <img src="/images/phone-call.png" alt="Phone" className="link" />
            </a>
            <a
              href="https://www.linkedin.com/in/ryan-ahmed127.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/linkedin.png" alt="LinkedIn" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
