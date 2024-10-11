import React from 'react';
import yaminaImage from './yamina.jpg';
import resume from './Resume.pdf';
import './home.css'

const Home = () => {
  return (
    <div className="profile-page" id="home">
      <div className="name">
        <h1>Hello, it's me</h1>
        <h1 className="name1">MARIYAM YAMINA.M</h1>
        <h1>And I'm a Frontend Developer</h1>
        <div className="btn">
          <button>CONTACT</button>
          <button><a href={resume}>RESUME</a></button>
        </div>
      </div>
      <div align="right" className="yaminaimg">
        <img src={yaminaImage} alt="Yamina" height="540px" width="540px" className="yamimg" />
      </div>
    </div>
  );
};

export default Home;
