import React from 'react'
import logo from "../images/Logo.svg"

const Nav = () => {
  return (
    <div className="navbar">
    
        <img src={logo} />

        <nav>

          <a href="http://">Home</a>
          <a href="http://">About</a>
          <a href="http://">Menu</a>
          <a href="http://">Reservations</a>
          <a href="http://">Order Online</a>
          <a href="http://">Login</a>

        </nav>

    </div>
  )
}

export default Nav