import React from 'react';
import html from './html.jpeg';
import css from './css.jpeg';
import javascript from './javas.jpeg';
import bootstrap from './bootstrap.jpeg';
import tailwind from './tailwind.jpg';
import react from './react.jpeg';
import node from './node.jpeg';
import mongodb from './mongodb.jpeg';
import mysql from './mysql.png';
import python from './python.jpeg';
import java from './java.jpeg';
import c from './c.jpeg';

import './skill.css';

const Skills = () => {
  return (
    <section class="skill-page" id="skills">
    <div class="skill-container">
       <h2 align="center">MY SKILLS</h2>
       <div class="my-skills">

        <div class="vertical">
        <div class="alignment">
        <img src={html} alt="Description of myImage" height="70px" width="70px"/>
        <h3>HTML</h3>
        </div>

        <div class="alignment">
        <img src={css} alt="Description of myImage" height="70px" width="70px"/>
        <h3>CSS</h3>
        </div>

        <div class="alignment">
        <img src={javascript} alt="Description of myImage" height="70px" width="70px"/>
        <h3>JAVASCRIPT</h3>
        </div>

        <div class="alignment">
        <img src={bootstrap} alt="Description of myImage" height="70px" width="70px"/>
        <h3>BOOTSTRAP</h3>
        </div>

        <div class="alignment">
        <img src={tailwind} alt="Description of myImage" height="70px" width="70px"/>
        <h3>TAILWIND CSS</h3>
        </div>

        <div class="alignment">
        <img src={react} alt="Description of myImage" height="70px" width="70px"/>
        <h3>REACT</h3>
        </div>
        
        </div>
         
        <div class="vertical2">
        

        <div class="alignment">
        <img src={node} alt="Description of myImage" height="70px" width="70px"/>
        <h3>NODE JS</h3>
        </div>

        <div class="alignment">
        <img src={mongodb} alt="Description of myImage" height="70px" width="70px"/>
        <h3>MongoDB</h3>
        </div>

        <div class="alignment">
        <img src={mysql} alt="Description of myImage" height="70px" width="70px"/>
        <h3>MySQL</h3>
        </div>

        <div class="alignment">
        <img src={java} alt="Description of myImage" height="70px" width="70px"/>
        <h3>JAVA</h3>
        </div>

        <div class="alignment">
        <img src={python} alt="Description of myImage" height="70px" width="70px"/>
        <h3>PYTHON</h3>
        </div>

        <div class="alignment">
        <img src={c} alt="Description of myImage" height="70px" width="70px"/>
        <h3>C</h3>
        </div>
        
        </div>
        
          
        

       </div>
    </div>
    </section>
  );
};

export default Skills;
