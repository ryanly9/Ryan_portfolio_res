import { useState } from "react";
import "./navbar.css";
import { Link } from 'react-scroll';

const Navbar = () => {
  // State for controlling the mobile menu
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo and Navigation */}
      <Link
        activeClass="inactive" to="intro" spy={true} smooth={true}offset={-100} duration={300}> <img src="/images/logo.png" alt="Logo" className="logo" />
      </Link>

      {/* Desktop Menu */}
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={300}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={300}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-100}
          duration={300}
          className="desktopMenuListItem"
        >
          Project
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={300}
          className="desktopMenuListItem"
        >
          Feedback
        </Link>
      </div>

      {}
      <img
        src="/images/menu.png"
        alt="Menu"
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)} // Toggle menu visibility on click
      />

      {/* Mobile Menu */}
      {showMenu && (
        <div className="navMenu">
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={300}
            className="listItem"
            onClick={() => setShowMenu(false)} // Close the menu after clicking an item
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-100}
            duration={300}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-100}
            duration={300}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Project
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={300}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Feedback
          </Link>
        </div>
      )}

      {/* Desktop Contact Button */}
      <Link
        activeClass="inactive"
        to="contact"
        spy={true}
        smooth={true}
        offset={-100}
        duration={300}
      >
        <button className="desktopMenuBtn">
          <img
            src="/images/contact.webp"
            alt="contact"
            className="desktopMenuImg"
          />
          Contact
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
