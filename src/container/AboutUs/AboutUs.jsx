import React from "react";
import images from "../../constants/images";
import Heading from "../../components/Heading/Heading";
import MainBtn from "../../components/MainBtn/MainBtn";

/* const AboutUs = () => <div>AboutUs</div>;

export default AboutUs; */

export default function AboutUs() {
  return (
    <>
      <section className="aboutUs" id="aboutUs">
        <div className="aboutUs__container _container">
          <div className="aboutUs__block">
            <Heading text={"About Us"} extraStyles={{ fontSize: "64px" }} className={"aboutUs__title aboutUs__title_left"} />
            <p className="aboutUs__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
            <MainBtn text={"Know More"} />
          </div>
          <div className="aboutUs__image-wrapper">
            <img className="aboutUs__img aboutUs__img_g" src={images.G} alt="G" />
            <img className="aboutUs__img aboutUs__img_knife" src={images.knife} alt="knife" />
          </div>
          <div className="aboutUs__block">
            <Heading text={"Our History"} extraStyles={{ fontSize: "64px" }} className={"aboutUs__title aboutUs__title_right"} />
            <p className="aboutUs__text">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
            <MainBtn text={"Know More"} />
          </div>
        </div>
      </section>
    </>
  );
}
