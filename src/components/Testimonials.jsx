import React from 'react'
import man from '../assets/images/man.png'

const Testimonials = () => {
  return (
    <section className='testimonials'>
      <div className="container">
        <article className='head'>
        <span>Testimonial</span>
        <h3>“Simply the best. Better than all the rest. I’d <br /> recommend this product to beginners and <br /> advanced users.”</h3>
        </article>

         <div className="user">
            <img src={man} alt="" />

            <article>
                <h6>Ian Klein</h6>
                <span>Digital Marketer</span>
            </article>
         </div>
      </div>
    </section>
  )
}

export default Testimonials
