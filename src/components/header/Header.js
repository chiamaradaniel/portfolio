import React, { useContext, useState } from "react";
import "./header.css";
import { BsToggleOff } from "react-icons/bs";
import { BsToggleOn } from "react-icons/bs";
import GeneralContext from "../../context/GeneralContext";

const Header = () => {
  const { dark, setDark } = useContext(GeneralContext)
  const [Toggle, showMenu] = useState(false);

  const handleLight = () => {
    setDark(!dark);
  };
  return (
    <header className={dark ? "header-dark" : "dark"}>
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Chiemela
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link ">
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#qualification" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i>{" "}
                Qualification
              </a>
            </li>
            <li className="nav__item">
              <a href="#testimonial" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i> Porfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>
          <i
            class="uil uil-times nav__close "
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        {/* <li className="nav__item"> */}
        <div className="nav__logo">
          <p>
            {dark ? (
            
              <BsToggleOn className="toggleButton" onClick={handleLight} />
            ) : (
              <BsToggleOff className="toggleButton" onClick={handleLight} />
            )}
          </p>
        </div>

        {/* <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i class="uil uil-apps"></i>
        </div> */}
      </nav>
    </header>
  );
};

export default Header;
