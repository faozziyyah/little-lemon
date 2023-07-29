import React from "react";
import logo from "../images/Logo.svg"

const Footer = () => {
  return (
      <footer>

        <img src={logo} />

        <section>

          <p>Links</p>

          <a href="http://">Home</a>
          <a href="http://">About</a>
          <a href="http://">Menu</a>
          <a href="http://">Reservations</a>
          <a href="http://">Order Online</a>
          <a href="http://">Login</a>

        </section>

        <section>

          <p>Contacts</p>

          <p>Address: </p>
          <p>Phone Number: </p>
          <p>Email:</p>

        </section>

        <section>

          <p>Socials</p>

          <p>Address: </p>
          <p>Phone Number: </p>
          <p>Email:</p>
          
        </section>

      </footer>
  );
};
export default Footer;
