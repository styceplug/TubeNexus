import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarDashboard = () => {
  return (
    <nav>
    <div className="main">
    <div className="logo">
    <h4><NavLink to='/'>Tube Nexus</NavLink></h4>
     </div>

     <div className="menu">
       <ul>
           <li><NavLink>Services</NavLink></li>
           <li><NavLink>Pricing</NavLink></li>
           <li><NavLink>Support</NavLink></li>
           <li><NavLink>Contact</NavLink></li>
       </ul>
     </div>
    </div>

     <div className="user">
       <NavLink to='/upload'><button className="btn-user">Upload new Track</button></NavLink>
     </div>
   </nav>
  )
}

export default NavbarDashboard
