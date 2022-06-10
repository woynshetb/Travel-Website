import React from "react";
import { TestmonialSection } from "./styled/Testmonial.styled";
import avatarImage from "../assets/avatarImage.jpeg";

export default function Testmonials() {
  return (
    <TestmonialSection id="testimonials">
      <div className="title">
        <h2>Happy Customers</h2>
        <div className="testmonials">
          <div className="testmonial">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              maiores magnam
            </p>
            <div className="info">
              <img src={avatarImage} alt="" />
              <div className="details">
                <h4>Woynshet Bilihatu</h4>
                <span>CEO - friends Tech Solutions</span>
              </div>
            </div>
          </div>
          <div className="testmonial">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              maiores magnam
            </p>
            <div className="info">
              <img src={avatarImage} alt="" />
              <div className="details">
                <h4>Woynshet Bilihatu</h4>
                <span>CEO - friends Tech Solutions</span>
              </div>
            </div>
          </div>
          <div className="testmonial">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              maiores magnam
            </p>
            <div className="info">
              <img src={avatarImage} alt="" />
              <div className="details">
                <h4>Woynshet Bilihatu</h4>
                <span>CEO - friends Tech Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TestmonialSection>
  );
}
