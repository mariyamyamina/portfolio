import React from 'react';
import project1 from './project1.png';
import project2 from './project2.png';
import project3 from './project3.png';
import project4 from './project4.png';
import project5 from './project5.png';
import project6 from './project6.png'; 
import './projects.css'

const Projects = () => {
  return (
    <section className="project-page" id="project">
      <div className="project-container">
        <h2 align="center">LATEST PROJECTS</h2>
        <div className="project-box">
          <div className="project-img">
            <a href="https://mariyamyamina.github.io/e-commerce/" target="_blank">
              <img src={project1} alt="E-commerce" />
              <p>E-Commerce website</p>
            </a>
          </div>
          <div className="project-img">
            <a href="https://mariyamyamina.github.io/todo-list/">
              <img src={project2} alt="Todo List" />
              <p>E-Commerce website</p>
            </a>
          </div>
          <div className="project-img">
            <a href="https://mariyamyamina.github.io/connect4-game/">
              <img src={project3} alt="Connect 4 Game" />
              <p>E-Commerce website</p>
            </a>
          </div>
          <div className="project-img">
            <a href="https://mariyamyamina.github.io/calculating-device/">
              <img src={project4} alt="Calculating Device" />
              <p>E-Commerce website</p>
            </a>
          </div>
          <div className="project-img">
            <a href="https://github.com/mariyamyamina/internpe">
              <img src={project5} alt="Internpe Project" />
              <p>E-Commerce website</p>
            </a>
          </div>
          <div className="project-img">
            <a href="https://mariyamyamina.github.io/Bibliolater/">
              <img src={project6} alt="Bibliolater" />
              <p>E-Commerce website</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
