import React from 'react';
import './experince.css'
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/> 
              <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
              </div> 
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>  
              <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
              </div> 
            </article>
  
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>  
              <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
              </div> 
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>  
              <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
              </div> 
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>  
              <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
              </div> 
            </article>
          </div>
        </div>

        {/* End of frontend */}

        <div className="experience__backend">
        <h3>Backend development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>  
              <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
              </div> 
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>  
              <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
              </div> 
            </article>
  
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>  
              <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
              </div> 
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>  
              <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
              </div> 
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>  
              <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
              </div> 
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
