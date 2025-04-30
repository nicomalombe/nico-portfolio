import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/nicodemus-malombe-644b37293/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          <a
            href="https://github.com/nicomalombe"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>

          <a href="mailto:nicomalombe4@gmail.com" aria-label="Email">
  <i className="fas fa-envelope"></i>
</a>


          <a
            href="https://wa.me/254794334958"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <i className="fab fa-whatsapp"></i>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=100072476628278"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </div>

        <div className="contact-info">
          <p><strong>Phone:</strong> +254 794 334 958</p>
          <p><strong>Email:</strong> nicomalombe4@gmail.com</p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
