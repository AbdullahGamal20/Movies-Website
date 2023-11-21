import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./movieSwiper.css";

import { Autoplay, EffectCoverflow } from "swiper/modules";

function MovieSwiper({ slides, slidesChange }) {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      loop={true}
      modules={{ Autoplay, EffectCoverflow }}
      className="movieSwiper"
    >
      {slides.map((slide) => {
        return (
          <SwiperSlide className="swiper_slide" key={slide._id}>
            <img
              src={slide.previewImg}
              alt="preview Image"
              onClick={() => slidesChange(slide._id)}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default MovieSwiper;
