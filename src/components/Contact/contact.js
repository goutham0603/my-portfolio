import React from "react";
import "./contact.scss";

import linkedin from "../../assets/linkedin.png";

const Contact = () => {
  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please feel free to contact me via email or phone for work
          opportunities.
        </span>
        <div className="contactInfo">
          <p>Email: gouthamreddy0603@gmail.com</p>
          <p>Phone: +1(217)-301-6506</p>
        </div>
        <div className="links">
          <a
            href="https://www.linkedin.com/in/goutham-reddy-t-87767b29b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="Linkedin" className="link" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
