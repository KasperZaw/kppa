import React, { useState } from "react";
import "./footer.scss";
import logo from "../../assets/images/logo-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  const [showMap, setShowMap] = useState(false);

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  return (
    <footer>
      <div className="footer-top">
        <img src={logo} alt="logo" />
      </div>
      <div className="footer-bottom">
        <div className="left-info">
          <span>UL Panska 98/104 Warszawa</span>
          <span>NIP 52756637000000</span>
          <span>KRS 000108435</span>
          <span>REGON 52756637000000</span>
        </div>
        <div className="right-info">
          <span>
            <FontAwesomeIcon icon={faPhone} style={{ marginRight: "8px" }} />
            +48 999 888 777
          </span>
          <span>
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "8px" }} />
            contact@kppa.one
          </span>
        </div>
      </div>
      <div className="footer-middle">
        {!showMap && (
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="location-icon"
            onClick={toggleMap}
          />
        )}
        {showMap && (
          <iframe
            title="Location of Our Firm on Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.702913404283!2d20.9887019!3d52.230615099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc854ad422c9%3A0xdd43d96b22c7fba!2sPa%C5%84ska%2098%2C%2000-837%20Warszawa!5e0!3m2!1spl!2spl!4v1706393396738!5m2!1spl!2spl"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="async"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        )}
      </div>
    </footer>
  );
};

export default Footer;
