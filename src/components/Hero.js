import React from "react";
import { Section } from "./styled/Hero.styled";
import homeImage from "../assets/hero.png";

export default function Hero() {
  return (
    <Section id="hero">
      <div className="background">
        <img src={homeImage} alt="" />
      </div>
      <div className="content">
        <div className="title">
          <h1>Travel To Explore</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa illo
            explicabo quaerat repellat velit nemo adipisci? Totam dolorem fugiat
            quasi vel quas beatae ab voluptatum ut quae corrupti, officia
            nostrum.
          </p>
        </div>
        <div className="search">
          <div className="container">
            <label htmlFor=""> Where do You Want To Go</label>
            <input type="text" placeholder="Search Your location" />
          </div>
          <div className="container">
            <label htmlFor="">Check in</label>
            <input type="date" />
          </div>
          <div className="container">
            <label htmlFor=""> Check out</label>
            <input type="date" />
          </div>
          <button>Explore Now</button>
        </div>
      </div>
    </Section>
  );
}
