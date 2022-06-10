import React from "react";
import logo from "../assets/logo.png";
import { Nav } from "./styled/Navbar.styled";

export default function NavBar() {
  return (
    <>
      <Nav>
        <div className="brand">
          <div className="container">
            <img src={logo} alt="" />
            Travel
          </div>
          <div className="toggle"></div>
        </div>
        <ul>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#services">About</a>
          </li>
          <li>
            <a href="#recommend">Places</a>
          </li>
          <li>
            <a href="#testimonials">Testmonials</a>
          </li>
        </ul>
        <button>Connect</button>
      </Nav>
    </>
  );
}
