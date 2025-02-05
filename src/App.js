import React from 'react'
import Navbar from './components/Navbar/navmenu';
import Home from './components/Home/home'
import About from './components/About/about';
import Services from './components/Serveport/services';
import Skills from './components/Skills/skill';
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
const App = () => {
  return (
    <div>
       <Navbar/>
      <Home />
      <About/>
      <Services/>
       <Skills/> 
      <Projects />
      <Contact />
       <Footer />    
    </div>
  )
}

export default App