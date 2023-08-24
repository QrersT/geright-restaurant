import React from "react";
import { SubHeading } from "../../components";
import Heading from "../../components/Heading/Heading";
import SwiperSlider from "../../components/SwiperSlider/SwiperSlider";

const Header = () => (
  <section className="header">
    <div className="header__container _container">
      <div className="header__content content-header">
        <SubHeading text={"Chase the new Flavour"} />
        <Heading text={"The key to Fine dining"} className={"content-header__title"} />
        <p className="content-header__text">Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
        <button className="content-header__btn ">Explore Menu</button>
      </div>
      <div className="header__slider">
        {/* <div>your content</div>
        <div>your content</div>
        <div>your content</div> */}
        <SwiperSlider />
      </div>
    </div>
  </section>
);

export default Header;
