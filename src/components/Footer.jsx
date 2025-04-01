import React from 'react'
import twitter from '../assets/images/logo-twitter.svg'
import facebook from '../assets/images/facebook.svg'
import instagram from '../assets/images/logo-instagram.svg'
import link from '../assets/images/link.svg'

const Footer = () => {
  return (
    <footer>
      <div className="ready">
        <article>
            <h2>Ready to launch your next <br /> project?</h2>
            <p>With lots of unique blocks, you can easily distribute <br /> your next project without hassle </p>
        </article>

        <button className="btn-start">
            Get started
        </button>
      </div>

      <div className="info">
        <article>
            <h2>Distribution</h2>
            <p>With lots of unique blocks, you can <br /> easily distribute your next project <br /> without hassle </p>

            <div className="media">
               <img src={twitter} alt="" />
               <img src={facebook} alt="" />
               <img src={instagram} alt="" />
               <img src={link} alt="" />
            </div>
        </article>

        <div className="group">
            <label htmlFor="">Company</label>
            <ul>
                <li>About us</li>
                <li>Contact us</li>
                <li>Careers</li>
                <li>Press</li>
            </ul>
        </div>

        <div className="group">
            <label htmlFor="">Product</label>
            <ul>
                <li>Features</li>
                <li>Pricing</li>
                <li>News</li>
                <li>Help desk</li>
                <li>Support</li>
            </ul>
        </div>

        <div className="group">
            <label htmlFor="">Services</label>
            <ul>
                <li>Digital Marketing</li>
                <li>Content Writing</li>
                <li>SEO for Business</li>
                <li>UI Design</li>
            </ul>
        </div>

        <div className="group">
            <label htmlFor="">Legal</label>
            <ul>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
            </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
