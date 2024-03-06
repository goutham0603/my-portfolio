import React from "react";
import "./intro.scss";
import bg from "../../assets/bg.png";
import resume from "../../assets/resume.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello</span>
        <span className="introText">
          I'm <span className="introName">Goutham</span> <br />
          Frontend Developer
        </span>
        <p className="introPara">
          Welcome! I'm a skilled Front-end Developer proficient in React.js,
          JavaScript, HTML, and CSS. With expertise in Agile/Waterfall
          methodologies, I've crafted intuitive UIs for ERP, booking systems,
          and e-learning platforms. Let's collaborate to elevate your projects
          with seamless user experiences and efficient development workflows.{" "}
        </p>
        <a
          href="https://blush-kayla-72.tiiny.site"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          <img src={resume} alt="Resume" className="resume" />
          Resume
        </a>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;
