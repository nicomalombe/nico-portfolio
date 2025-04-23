import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Me</h1>
      <p className="contact-subtitle">I'd love to hear from you! Feel free to reach out via email or the form below.</p>
      
      <div className="contact-info">
        <p><strong>Email:</strong> <a href="mailto:you@example.com">you@example.com</a></p>
        <p><strong>Phone:</strong> +254 712 345 678</p>
        <p><strong>Location:</strong> Nairobi, Kenya</p>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
