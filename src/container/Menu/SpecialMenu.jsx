import React from "react";
import { Heading, MainBtn, SubHeading } from "../../components";
import data from "../../constants/data";
import images from "../../constants/images";

const SpecialMenu = () => (
  <section className="specialMenu">
    <div className="specialmenu__container _container">
      <SubHeading text={"Menu that fits you palatte"} className={"specialMenu__subheading"} />
      <Heading className={"specialMenu__heading"} text={"Today’s Special"} extraStyles={{ fontSize: "64px", textAlign: "center", marginTop: "8px" }} />
      <div className="specialMenu__menu">
        <div className="specialMenu__wines">
          <h3 className="specialMenu__title">Wine & Beer</h3>
          {data.wines.map((item, index) => {
            return (
              <div key={`specialMenu__wines_${index}`}>
                <div className="specialMenu__wrapper">
                  <div className="specialMenu__drink-title">{item.title}</div>
                  <span className="specialMenu__line"></span>
                  <div className="specialMenu__price">{item.price}</div>
                </div>
                <p className="specialMenu__tags">{item.tags}</p>
              </div>
            );
          })}
        </div>
        <div>
          <img className="specialMenu__img" src={images.menu} alt="menu_img" />
        </div>
        <div className="specialMenu__cocktails">
          <h3 className="specialMenu__title">Cocktails</h3>
          {data.cocktails.map((item, index) => {
            return (
              <div key={`specialMenu__cocktails_${index}`}>
                <div className="specialMenu__wrapper">
                  <div className="specialMenu__drink-title">{item.title}</div>
                  <span className="specialMenu__line"></span>
                  <div className="specialMenu__price">{item.price}</div>
                </div>
                <p className="specialMenu__tags">{item.tags}</p>
              </div>
            );
          })}
        </div>
      </div>
      <MainBtn text={"View More"} extraStyles={{ margin: "65px auto 0", display: "block" }} />
    </div>
  </section>
);

export default SpecialMenu;
