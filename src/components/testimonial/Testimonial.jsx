import React from 'react';
import './testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonial</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar one" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Vel, magni quis. Enim, quaerat doloremque.
          </small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar one" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Vel, magni quis. Enim, quaerat doloremque.
          </small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar one" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Vel, magni quis. Enim, quaerat doloremque.
          </small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="Avatar one" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Vel, magni quis. Enim, quaerat doloremque.
          </small>
        </article>


      </div>
    </section>
  );
}

export default Testimonial;
