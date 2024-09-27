import React from 'react';
import './navbar.css'
import gitImage from './github.jpeg'
import linkImage from './linkedin.jpeg'
import facebookImage from './facebook.jpeg'
import yaminaImage from './yamina.jpg'
// Define the component with a valid name, not as a `<ul>` element
const NavigationMenu = () => {
  return (
    <div>
    <div class="navbar">
     <div><h1>PORTFOLIO</h1></div>
      <ul class="list">
        <li href="#">HOME</li>
        <li href="#">SERVICES</li>
        <li href="#">ABOUT</li>
        <li href="#">SKILLS</li>
        <li href="#">BLOG</li>
        <li href="#">CONTACT</li>
      </ul>

    </div>
       
    <div align="center">
       <h2>I'm MARIYAM YAMINA M</h2>
       <h2>FRONTEND END DEVELOPER</h2>
       <img src={yaminaImage} alt="Description of myImage" height="240px" width="240px" />
    </div>

    <footer >
    <div class="container">
        <div>
            <p>4/20 New Street,</p>
            <p>Chennai-679543</p>
        </div>
        <div>
            <p>+91 9435776643</p>
        </div>
        <div>
            <p>portfolio@gmail.com</p>
        </div>
    </div>  

    <div class="container2">
        <h3>About Frontend development</h3>
        <p>Frontend development focuses on building the visual and interactive elements of a website or application that users directly interact with. It involves technologies like HTML, CSS, and JavaScript to create layouts, style pages, and handle user interactions. Frontend developers ensure that the interface is responsive, accessible, and user-friendly across different devices </p>
        <div class="image">
        <img src={gitImage} alt="Description of myImage" height="40px" width="40px" />
        <img src={linkImage} alt="Description of myImage" height="40px" width="40px" />
        <img src={facebookImage} alt="Description of myImage" height="40px" width="40px" />
        </div>
    </div>
    </footer>
    </div>
    

  );
};

export default NavigationMenu;
