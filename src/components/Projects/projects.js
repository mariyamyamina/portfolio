import React from 'react';
import project1 from './project1.png';
import blogs from './blogs.png';
import amazon from './amazon.png';
import spotify from './spotify.png';
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
            <a href="https://github.com/mariyamyamina/e-commerce" target="_blank">
              <img src={project1} alt="E-commerce" />
              <p>E-Commerce website</p>
            </a>
            <p class="para"><b>Technology used:</b>HTML and CSS</p>
          </div>
          <div className="project-img">
            <a href="https://github.com/mariyamyamina/blog-website">
              <img src={blogs} alt="blogs" />
              <p>Blogs website</p>
            </a>
            <p><b>Technology used:</b>NodeJS,ExpressJS,MongoDB and Rest API's</p>
          </div>
          <div className="project-img">
            <a href="https://github.com/mariyamyamina/Amazon-clone">
              <img src={amazon} alt="amazon clone" />
              <p>Amazon clone app</p>
            </a>
            <p><b>Technology used:</b>HTML,CSS and JavaScript</p>
          </div>
          <div className="project-img">
            <a href="https://github.com/mariyamyamina/spotify-clone">
              <img src={spotify} alt="spotify clone" />
              <p>Spotify clone</p>
            </a>
            <p><b>Technology used:</b>HTMLand CSS</p>
          </div>
          <div className="project-img">
            <a href="https://github.com/mariyamyamina/FoodDelivery">
              <img src={project5} alt="Internpe Project" />
              <p>Food delivery website</p>
            </a>
            <p><b>Technology used:</b>HTML,CSS and JavaScript</p>
          </div>
          <div className="project-img">
            <a href="https://github.com/mariyamyamina/Bibliolater">
              <img src={project6} alt="Bibliolater" />
              <p>Book Management App</p>
            </a>
            <p><b>Technology used:</b>HTML,CSS and JavaScript</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
