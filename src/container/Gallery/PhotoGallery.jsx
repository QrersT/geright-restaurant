import React from "react";
import PhotoAlbum from "react-photo-album";
import images from "../../constants/images";

const photos = [
  { src: images.gallery01, width: 600, height: 800 },
  { src: images.gallery02, width: 600, height: 800 },
  { src: images.gallery03, width: 600, height: 800 },
  { src: images.gallery04, width: 600, height: 800 },
];

export default function PhotoGallery() {
  return <PhotoAlbum layout="rows" photos={photos} />;
}
