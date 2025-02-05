import React from 'react';
import yaminaImage from './Yamina.png';
import resume from './Microsoft.pdf';
import './home.css'

const Home = () => {

  return (
    <div className="profile-page" id="home">
      <div className="name">
        <h1>Hello, it's me</h1>
        <h1 className="name1">MARIYAM YAMINA.M</h1>
        <h1>And I'm a Full Stack Developer | MERN Stack</h1>
        <div className="btn">
            <button><a href="https://www.linkedin.com/in/mariyamyamina/" target="_blank" rel="noopener noreferrer">HIRE ME</a></button>
          <button><a href={resume} target="_blank" rel="noopener noreferrer">RESUME</a></button>
        </div>
      </div>
      <div align="right" className="yaminaimg">
        <img src={yaminaImage} alt="Yamina" height="540px" width="540px" className="yamimg" />
      </div>
    </div>
  );
};

export default Home;
