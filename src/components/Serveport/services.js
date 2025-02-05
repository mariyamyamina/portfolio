import React from 'react';
import './services.css'
const Services = () => {
  return (
    <div className="services-container" id="services">
      <h2>Services</h2>
      <div className='services'>

      <div className="service-box">
        <h3>Full-Stack Development</h3>
        <h4>End-to-End Web Solutions</h4>
        <p>From designing the front end to handling the server-side logic, I provide complete web applications using the MERN stack (MongoDB, Express, React, Node.js). Whether you're building a new application or need to maintain an existing one, I can bring your ideas to life.</p>
      </div>

      <div className="service-box">
        <h3> API Development & Integration</h3>
        <h4>Connect & Enhance Your Web Apps</h4>
        <p>Build custom RESTful APIs to integrate various services and data sources into your application. I also specialize in third-party API integration, such as payment gateways, social logins, and more to extend the functionality of your web apps.</p>
      </div>

      <div className="service-box">
        <h3> Website Maintenance & Optimization</h3>
        <h4>Keep Your Website Running Smoothly</h4>
        <p> Optimize your existing websites for better performance, speed, and SEO. I can handle regular updates, security fixes, and bug fixes to ensure your website performs at its best. I also specialize in speeding up websites and improving load times for a better user experience.</p>
      </div>
      </div>
    </div>
  );
}

export default Services;
