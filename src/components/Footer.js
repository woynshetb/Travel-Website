import React from "react";
import { BsLinkedin, BsFacebook } from "react-icons/bs";

import { AiFillInstagram } from "react-icons/ai";
import { FooterSection } from "./styled/Footer.styled";

export default function Footer() {
  return (
    <FooterSection>
      <span>Copyright &copy:2022 Travel. All rights reserved</span>

      <ul className="links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#recommend">Places</a>
        </li>
        <li>
          <a href="#testimonials">Testmonials</a>
        </li>
      </ul>
      <ul className="social_links">
        <li>
          <a>
            <BsFacebook />
          </a>
        </li>
        <li>
          <a>
            {" "}
            <BsLinkedin />
          </a>
        </li>
        <li>
          <a>
            {" "}
            <AiFillInstagram />
          </a>
        </li>
      </ul>
    </FooterSection>
  );
}
