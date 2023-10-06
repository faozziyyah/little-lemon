import React from 'react'
import logo from "../images/Logo.svg"
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="navbar">
    
        <img src={logo} />

        <nav>

          
          <Link to='/'>Home</Link>
          <Link>About</Link>
          <Link>Menu</Link>
          <Link to='/booking-page'>Reservations</Link>
          <Link>Order Online</Link>
          <Link>Login</Link>

        </nav>

    </div>
  )
}

export default Nav