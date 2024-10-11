import React, { useState } from 'react';
import './navmenu.css';

// import About from './About';
// import Services from './Services';
// import Skills from './Skills';
// import Projects from './Projects';
// import Contact from './Contact';
// import Footer from './Footer';

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="navbar">
        <div><h1>PORTFOLIO</h1></div>

        {/* Hamburger menu icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navigation list */}
        <ul className={`list ${isOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={toggleMenu}>HOME</a></li>
          <li><a href="#about" onClick={toggleMenu}>ABOUT</a></li>
          <li><a href="#skills" onClick={toggleMenu}>SKILLS</a></li>
          <li><a href="#project" onClick={toggleMenu}>PROJECTS</a></li>
          <li><a href="#contact-details" onClick={toggleMenu}>CONTACT</a></li>
        </ul>
      </div>

     
    </div>
  );
};

export default NavigationMenu;
