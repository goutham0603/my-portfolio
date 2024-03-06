import React, { useState, useEffect } from "react";
import "./navbar.scss";
import logo from "../../assets/logo.png";
import contact from "../../assets/contact.png";
import menu from "../../assets/menu.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const height = document.getElementById("navbar").offsetHeight;
      setNavbarHeight(height);
      if (window.innerWidth <= 720) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollTo = (target) => {
    let offset = 0;
    if (target !== "intro") {
      offset = -navbarHeight;
    }
    document.getElementById(target)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
      offset: offset,
    });
    setShowMenu(false);
  };

  return (
    <nav id="navbar" className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link
          to="intro"
          className="desktopMenuListItem"
          offset={-navbarHeight}
          spy={true}
          smooth={true}
          duration={500}
        >
          Home
        </Link>
        <Link
          to="skills"
          className="desktopMenuListItem"
          offset={-navbarHeight}
          spy={true}
          smooth={true}
          duration={500}
        >
          Skills
        </Link>
        <Link
          to="works"
          className="desktopMenuListItem"
          offset={-navbarHeight}
          spy={true}
          smooth={true}
          duration={500}
        >
          Work Experience
        </Link>
        <Link
          to="education"
          className="desktopMenuListItem"
          offset={-navbarHeight}
          spy={true}
          smooth={true}
          duration={500}
        >
          Education
        </Link>
        {!isMobile && ( // Render "Contact Me" button only on desktop
          <button
            className="desktopMenuBtn"
            onClick={() => scrollTo("contact")}
          >
            <img src={contact} alt="" className="desktopMenuImg" />
            Contact Me
          </button>
        )}
      </div>
      <img
        src={menu}
        alt="Menu"
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className={showMenu ? "navMenu active" : "navMenu"}>
        <Link
          to="intro"
          className="listItem"
          offset={-navbarHeight}
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          to="skills"
          className="listItem"
          offset={-navbarHeight}
          spy={true}
          smooth={true}
          duration={400}
          onClick={() => setShowMenu(false)}
        >
          Skills
        </Link>
        <Link
          to="works"
          className="listItem"
          offset={-navbarHeight}
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => setShowMenu(false)}
        >
          Work Experience
        </Link>
        <Link
          to="education"
          className="listItem"
          offset={-navbarHeight}
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => setShowMenu(false)}
        >
          Education
        </Link>
        <Link
          to="contact"
          className="listItem"
          offset={-navbarHeight}
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
