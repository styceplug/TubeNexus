import React from 'react'
import profile from '../assets/images/Oval.png'
import stars from '../assets/images/Stars.png'
import pose from '../assets/images/pose.png'
import ai from '../assets/images/ai.png'
import talk from '../assets/images/talk.png'
import arrow from '../assets/images/arrow.svg'

const Services = () => {

   const cardData = [
    {
        image: '../src/assets/images/dist.png',
        header: 'Music Distribution',
        paragraph: 'Release your music on Spotify, Apple Music, TikTok, Instagram, Soundcloud, Tidal, and all other major stores and streaming platforms.',
        backgroundColor: '#7290B7'
    },
    {
        image: '../src/assets/images/artist.png',
        header: 'Artist Services',
        paragraph: 'Grow your fanbase and access flexible funding with our tailored licensing deals.Our label team takes music with momentum to the next level.',
        backgroundColor: '#36B7FF'
    },
    {
        image: '../src/assets/images/royal.png',
        header: '100% Royalties',
        paragraph: 'We believe artists should stay independent, encouraging them to stay in creative control and have freedom in their craft. That is why we let our users keep 100% of their royalties and rights.',
        backgroundColor: '#FF6B35'
    }
   ]

  return (
    <section className='services'>
      <div className="offer">
        <article>
        <span>Our services</span>
        <h1>The Services we offer are all tailored to <br /> give a smooth transition to stardom.</h1>
        </article>

        <div className="cards">
            {
                cardData.map((card, index) => (
                    <div
                      key={index}
                      className='card'
                      style={{backgroundColor: card.backgroundColor}}
                    >
                        <img src={card.image}alt={card.header}/>
                        <h3>{card.header}</h3>
                        <p>{card.paragraph}</p>
                        <button>Learn More <img src={arrow} alt="" /></button>
                    </div>
                ))
            }
        </div>
      </div>

      <div className="ratings">
        <div className="profile">
            <img src={profile} alt="" />
        </div>

        <div className="review">
            <img src={stars} alt="rating" />
            <p>“OMG! I cannot believe that I have got my single on digital platforms, now i earn and do what i love - music</p>
            <article>
               <h6>Franklin Hicks</h6>
               <span>Independent Artist</span>
            </article>
        </div>
      </div>
      <div className="platform">
        
      <div className="platforms">
        <article>
            <span>LARGEST MUSIC PLATFORMS</span>
            <h1>We are currently partnered <br /> with over 50 of the biggest <br /> digital platforms and we're <br /> always adding more.</h1>
        </article>

        <div className="image-container">
            <img src={pose} alt="medium-shot-black-women-posing-together" />

            <div className="content">
                <div className="images">
                    <img src={ai} alt="digital-art" className='ai' />
                    <img src={talk} alt="two-women-talking-to-each-other" className='talk' />
                </div>

                <p>Our live sessions feature some of the hottest rising artists <br /> from all walks of life. Join us as we bring these amazing <br /> bands and artists to the global stage with each session.</p>
            </div>
        </div>
      </div>
      </div>

      <div className="stats">
        <div className="stat">
            <h1>1M+</h1>
            <p>Satisfied Customers use <br /> Disrribution every month.</p>
        </div>
        <div className="stat">
            <h1>92%</h1>
            <p>Satisfaction rate comes from our <br /> awesome customers.</p>
        </div>
        <div className="stat">
            <h1>4.9/5.0</h1>
            <p>Average customer ratings we <br /> have got all over internet.</p>
        </div>
      </div>
    </section>
  )
}

export default Services
