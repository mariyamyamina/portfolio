import React, { useState } from 'react';
import aboutImage from './Yaminaa.jpg';
import './about.css';

const About = () => {
  // State to control visibility of more content on mobile
  const [showMore, setShowMore] = useState(false);

  // Function to toggle the show more/less
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="about-me-page" id="about">
      <div className="aboutimage">
        <img src={aboutImage} alt="About Yamina" height="280px" width="280px" className="abtimg" />
      </div>
      <div className="about-me">
        <h2>ABOUT ME</h2>
        <p>
          I am a passionate and dedicated frontend developer who loves to create beautiful,
          responsive, and user-friendly websites. 
          {/* Shorten the text for mobile and show full content for PC */}
          <span className={showMore ? "full-text" : "short-text"}>
            I specialize in HTML, CSS, JavaScript, and React. I have worked on several
            web development projects, including both frontend and backend components.
            I am always eager to learn new technologies and improve my skills. I have a 
            strong eye for design and pay attention to the details, which helps me create
            engaging web experiences.My journey in frontend development has equipped 
            me with the ability to understand design principles and collaborate closely 
            with designers and backend developers. I am always eager to learn new technologies 
            and keep myself updated with the latest trends in web development to build
             high-performance, accessible, and user-friendly applications.
          </span>
        </p>
        <div className="btn">
          {/* Show button only on mobile screens */}
          <button className="show-more-btn" onClick={toggleShowMore}>
            {showMore ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
