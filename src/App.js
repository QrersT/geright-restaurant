import React from "react";

import "./style.scss";

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from "./container";
import { Navbar } from "./components";

function burgerMenu() {
  const burgerBtn = document.querySelector(".navbar__menu-icon");
  const menuWrapper = document.querySelector(".navbar-smallscreen");
  burgerBtn.addEventListener("click", () => {
    menuWrapper.classList.toggle("_active");
    burgerBtn.classList.toggle("_active");
  });
}

export default function App() {
  React.useEffect(() => {
    return () => {
      burgerMenu();
    };
  }, []);

  /*  const [isRendered, setIsRendered] = React.useState(false); */

  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      {/*  
   
    
    
    
    
    
    <FindUs />
    <Footer /> */}
    </div>
  );
}
