import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image from '../assets/images/image.png'

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };
  return (
    <section className='hero'>
      <div className="heroes">
      <Slider {...settings}>
        <div className="start">
            <div className="text-content">
                <span>Get your music everywhere</span>
                <h1>Release your music, Fund your Career, Grow your audience</h1>
                <p>With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.</p>
                <button className="btn-start">
                    Get Started Today
                </button>
            </div>

            <div className="image-content">
                <img src={image} alt="Get your music everywhere" />
            </div>
        </div>
        
          <div className="heroo sunflower">
            <div className="text-content">
                <span>support early access</span>
                <h1>Digital music <br /> management, <br /> marketing, and <br /> distribution.</h1>
                <p>Release your music across the leading digital streamiing <br /> platforms. We manage and provide global marketing <br /> services across multiple platforms including Spotify, Apple <br /> Music, iTunes and Tidal.</p>
                <button className="btn-start">
                    Get Started Today
                </button>
            </div>
        </div>

        <div className="heroo smile">
             <div className="text-content">
             <span>support early access</span>
                <h1>Digital music <br /> management, <br /> marketing, and <br /> distribution.</h1>
                <p>Release your music across the leading digital streamiing <br /> platforms. We manage and provide global marketing <br /> services across multiple platforms including Spotify, Apple <br /> Music, iTunes and Tidal.</p>
                <button className="btn-start">
                    Get Started Today
                </button>
             </div>
        </div>
        </ Slider>
      </div>
    </section>
  )
}

export default Hero
