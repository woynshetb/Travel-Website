import React from "react";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Recommend from "./components/Recommend";
import Testmonials from "./components/Testmonials";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <ScrollToTop />
      <div id="home">
        <NavBar />
        <Hero />
      </div>
      <Services />
      <Recommend />
      <Testmonials />
      <Footer />
    </>
  );
}
export default App;
