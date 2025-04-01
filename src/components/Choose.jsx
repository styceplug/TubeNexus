import React from 'react'

const Choose = () => {
  const cardData = [
     {
      image: '../src/assets/images/business-contact-86.png',
      header: 'Label and enterprise solution',
      paragraph: 'With no limits to the number of artists or releases you can upload we have the music distribution solution for labels and collectives.'
     },
     {
      image: '../src/assets/images/ic_layers_48px.png',
      header: 'We cover over 95% of the digital music market',
      paragraph: 'We work with the top services around the world to ensure that your music can be heard everywhere'
     },
     {
      image: '../src/assets/images/chat-33.png',
      header: 'Easy feedback sharing',
      paragraph: 'We provide a 24/7 email and ticket support line so we are never too far away.',
     },
     {
      image:'../src/assets/images/ic_timelapse_48px.png',
      header: 'Never miss deadline',
      paragraph: 'Maintain 100% Ownership. Switch between our flexible plans for the best option at any time. '
     }
  ]

  return (
    <section className='choose'>
      <div className="choice">
        <article>
          <span>Why choose us</span>
          <h1>People choose us because we <br /> serve the best for everyone</h1>
        </article>

        <div className="reasons">
          {
            cardData.map((card, index) => (
               <div
                key={index}
                className='reason'
               >
                <div className="image-content">
                  <img src={card.image} alt="" />
                </div>

                <div className="text-content">
                  <h4>{card.header}</h4>
                  <p>{card.paragraph}</p>
                </div>
               </div>
            ))
          }
        </div>
      </div>

      <div className="release">
        <article>
          <h1>Ready to release your next project?</h1>
          <p>Get in touch with us and check for a plan that sits well with your dream.</p>
        </article>

        <button className="btn-start">Get started today</button>
      </div>
    </section>
  )
}

export default Choose
