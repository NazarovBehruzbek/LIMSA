import React, { useState } from "react";
import "./style.css"
import uzb from '../../assets/uzb.svg';
import rus from '../../assets/russia.svg'
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("O'zbekcha");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };
  return (
    <div className="header">
      <div className="container">
        <div className="logo">Logo</div>
        <div className="navigation">
          <ul>
            <NavLink className="nav-item" to="/main">Asosiy</NavLink>
            <NavLink className="nav-item" to="/service">Xizmatlar</NavLink>
            <NavLink className="nav-item" to="/price">Narxlar</NavLink>
            <NavLink className="nav-item" to="/works">Bizning ishlar</NavLink>
            <NavLink className="nav-item" to="/contact">Aloqa</NavLink>
            <div className="nav-item">
              <div className={`language-dropdown ${isOpen ? 'open' : ''}`}>
                <div className="selected-language" onClick={toggleDropdown}>
                  <img src={selectedLanguage === "O'zbekcha" ? uzb : rus} alt="Selected Flag" />
                  <span>{selectedLanguage}</span>
                </div>
                <div className="options">
                  <div className="option" onClick={() => selectLanguage("O'zbekcha")}>
                    <img src={uzb} alt="Uzbek"/>
                    <span>O'zbekcha</span>
                  </div>
                  <div className="option" onClick={() => selectLanguage("Russian")}>
                    <img src={rus} alt="Russian" />
                    <span>Russian</span>
                  </div>
                </div>
              </div>
</div>
          </ul>
        </div>
      </div>
    </div>
  )
}
