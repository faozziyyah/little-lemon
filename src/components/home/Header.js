import React, { useEffect, useRef } from "react";
import food from "../../images/restauranfood.jpg"
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
//import { faGithub, faLinkedin, faMedium, faStackOverflow, } from "@fortawesome/free-brands-svg-icons";
//import { Box, HStack } from "@chakra-ui/react";

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

        <a href="">Reserve a Table</a>

      </article>

      <img src={food} />

    </div>

  );
};
export default Header;
