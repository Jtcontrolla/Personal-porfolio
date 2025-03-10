import React from 'react';
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Knoww</h5>
      <h2>About Me</h2>

      <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About Image" />
            </div>  
          </div>

          <div className="about__content">
              <div className="about__cards">
                <article>
                  <FaAward className='about__icon'/> 
                  <h5>Experience</h5>
                  <small>3+ Years Working</small>
                </article>
                
                <article>
                  <FiUsers className='about__icon'/> 
                  <h5>Clients</h5>
                  <small>200+ Worldwide</small>
                </article>
                
                <article>
                  <VscFolderLibrary className='about__icon'/> 
                  <h5>Projects</h5>
                  <small>80+ Completed</small>
                </article>
              </div>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Saepe inventore optio quibusdam mollitia recusandae nam deleniti 
              earum dolore, sequi laboriosam nesciunt repellat adipisci enim pariatur 
              dignissimos rerum laborum, commodi deserunt fugit quidem doloremque dicta. 
              Sunt, porro corporis ut saepe </p>

              <a href="#contact" className='btn btn-primary'>Let's Talk</a>  
          </div>
      </div>
    </section>
  );
}

export default About;
