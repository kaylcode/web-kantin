import React from 'react';
import './Contact.css';
const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-details">
        <p>Address: Jalan Raya 123, Jakarta</p>
        <p>Phone: 1234567890</p>
        <p>Email: info@example.com</p>
      </div>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
