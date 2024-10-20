import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./contact.css"; // Ensure you have this import

const Contact = () => {
  return (
    <>
      <h1 className="underline-gap">Kontakta oss</h1>
      <div className="contact-section">
        <div className="contact-item">
          <FontAwesomeIcon icon={faPhoneAlt} className="contact-icon" />
          <a href="tel:+46760072920" className="callable-phone">
            <p>+46 0760-072920</p>
          </a>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          <a
            href="mailto:info@vhpadel.se"
            className="callable-email"
            target="_blank"
            rel="noreferrer"
          >
            <p>info@vhpadel.se</p>
          </a>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
          <p>Västra Hamnen, Malmö</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
