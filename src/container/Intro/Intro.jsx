import React from "react";
import introVid from "../../assets/meal.mp4";

export default function Intro() {
  return (
    <>
      <section className="intro">
        <div className="intro__container _container"></div>
        <video className="intro__video" src={introVid} autoPlay muted loop id="myVideo"></video>
      </section>
    </>
  );
}
