import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import images from "../../constants/images";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "swiper/scss/autoplay";

export default () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index <= 8 ? `0${index + 1}` : index + 1) + "</span>";
    },
  };

  return (
    <Swiper
      // install Swiper modules
      pagination={pagination}
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={5}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      delay={1000}
      slidesPerView={1}
      /* onSwiper={(swiper) => console.log(swiper)} */
      /* onSlideChange={() => console.log("slide change")} */
    >
      <SwiperSlide>
        <img src={images.welcome} alt="welcome" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={images.chef} alt="chef" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={images.findus} alt="findus" />
      </SwiperSlide>
      ...
    </Swiper>
  );
};
