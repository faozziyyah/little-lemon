import React, { useEffect, useRef } from "react";
import food from "../../images/restauranfood.jpg"
import Booking from "../BookingPage/Booking";
import { Link } from 'react-router-dom';

/*const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
]; */

const Header = () => {

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (

    <div className="header">

      <article>

        <h1>Little Lemon</h1>
        <p id="p1">Chicago</p>
        <p id="p2">We are a family owned mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>

        <Link to={'/booking'} element={<Booking />} />

      </article>

      <img src={food} />

    </div>

  );
};
export default Header;
