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
            </a>
          </div>
          <div className="project-img">
            <a href="https://mariyamyamina.github.io/todo-list/">
              <img src={project2} alt="Todo List" />
            </a>
          </div>
          <div className="project-img">
            <a href="https://mariyamyamina.github.io/connect4-game/">
              <img src={project3} alt="Connect 4 Game" />
            </a>
          </div>
          <div className="project-img">
            <a href="https://mariyamyamina.github.io/calculating-device/">
              <img src={project4} alt="Calculating Device" />
            </a>
          </div>
          <div className="project-img">
            <a href="https://github.com/mariyamyamina/internpe">
              <img src={project5} alt="Internpe Project" />
            </a>
          </div>
          <div className="project-img">
            <a href="https://mariyamyamina.github.io/Bibliolater/">
              <img src={project6} alt="Bibliolater" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
