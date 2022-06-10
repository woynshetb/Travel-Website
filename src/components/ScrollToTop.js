import React, { useState } from "react";
import logo from "../assets/logo.png";
import { ToTop } from "./styled/ScrollToTop.styled";
export default function ScrollToTop() {
  const [scrollState, setScrollState] = useState(false);
  window.addEventListener("scroll", () => {
    window.pageXOffset < 200 ? setScrollState(true) : setScrollState(false);
  });

  const toTop = () => {
    window.scrollTo({ top: 0 });
  };
  return (
    <ToTop scrollState={scrollState} onClick={toTop}>
      <img src={logo} alt="" />
    </ToTop>
  );
}
