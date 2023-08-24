import React from "react";
import PhotoGallery from "./PhotoGallery";
import { Heading, SubHeading } from "../../components";

export default function Gallery() {
  return (
    <>
      <section className="gallery">
        {
          <div className="gallery__content">
            <SubHeading text="Instagram" />
            <Heading text="Photo Gallery" />
            <div className="gallery__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</div>
          </div> /* <PhotoGallery /> */
        }
      </section>
    </>
  );
}
