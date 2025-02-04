import React, { useState } from "react";
import aboutImage from "./Yamina.png";
import "./about.css";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="about-me-page" id="about">
      <div className="aboutimage">
        <img
          src={aboutImage}
          alt="About Yamina"
          height="320px"
          width="320px"
          className="abtimg"
        />
      </div>
      <div className="about-me">
        <h2>ABOUT ME</h2>
        <p>
          {/* Shortened text for mobile, full text for larger screens */}
          <span className={showMore ? "about-me show-more" : "about-me"}>
            Hello! I'm a passionate full-stack developer with expertise in
            frontend and backend technologies. Currently pursuing my B.E. in
            Computer Science and Engineering, I have a strong foundation in
            HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, and
            MySQL.
          </span>
          <br /><br />

          <span className={showMore ? "full-text" : "hidden-text"}>
            With hands-on experience in building web applications,
            e-commerce platforms,Amazon clone and spotify clone, I specialize
            in creating user-friendly, responsive, and high-performance
            applications. I have also worked on projects like a tourism website(React),
            Authentication system(MERN Stack) and a blog website(MERN stack) during my internships.
            <br /><br />
            Beyond development, I have a keen interest in problem-solving and optimizing web
            performance. I'm continuously learning and improving my skills
            through courses, certifications, and real-world projects.
            <br /><br />
            🚀 <strong>Tech Stack:</strong> HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, MySQL, Java, Python and C
            <br /><br />
            📜 <strong>Certifications:</strong> Responsive Web Design
            (FreeCodeCamp), JavaScript (Scaler), Industry 4.0 & IoT (NPTEL),Generative AI(Microsoft)
            <br /><br />
            💡 <strong>Internships:</strong> Infosmite (Backend Development), Aadhirootz
            Technologies (Java & MySQL)
            <br /><br />
            I'm always open to new opportunities, collaborations, and innovative projects. Let's connect and build
            something amazing!
          </span>
        </p>

        {/* Show button only on mobile screens */}
        <div className="btn">
          <button className="show-more-btn" onClick={toggleShowMore}>
            {showMore ? "Show More" : "Show Less"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
