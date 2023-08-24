import React from "react";
import images from "../../constants/images";
import { Heading, SubHeading } from "../../components";

export default function Chef() {
  return (
    <>
      <section className="chef">
        <div className="chef__container _container">
          <img className="chef__img" src={images.chef} alt="chef" />
          <div className="chef__content">
            <SubHeading text={"Chef’s Word"} />
            <Heading text={"What we believe in"} extraStyles={{ fontSize: "64px" }} className={"chef__heading"} />
            <div className="chef__text-wrapper">
              <p className="chef__text">
                <img src={images.quote} alt="quote" className="chef__quote" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.
              </p>
            </div>
            <div className="chef__chef">
              <div className="chef__name">Kevin Luo</div>
              <div className="chef__about">Chef & Founder</div>
              <div className="chef__signature">
                <img src={images.sign} alt="signature" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
