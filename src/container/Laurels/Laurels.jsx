import React from "react";
import images from "../../constants/images";
import { Heading, SubHeading } from "../../components";
import data from "../../constants/data";

export default function Laurels() {
  return (
    <>
      <section className="laurels">
        <div className="laurels__container _container">
          <div className="laurels__wrapper">
            <div className="laurels__content">
              <SubHeading text={"Awards & recognition"} />
              <Heading className={"laurels__heading"} text={"Our Laurels"} extraStyles={{ fontSize: "64px" }} />
              <div className="laurels__awards">
                {data.awards.map((item, index) => {
                  let image = `award0${index + 1}`;
                  console.log(image);
                  return (
                    <div className="laurels__award" key={`laurels__award_${index}`}>
                      <img className="laurels__award-img" src={images[image]} alt="" />
                      <div className="laurels__award-descr">
                        <div className="laurels__award-descr_text">{item.title}</div>
                        <div className="laurels__award-descr_name">{item.subtitle}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="laurels__image-wrapper">
              <img src={images.laurels} alt="laurels" className="laurels__img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
