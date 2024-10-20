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
          <p>+46 123 456 789</p>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          <p>info@vhpadel.com</p>
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
