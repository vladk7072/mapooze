import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";

export const SliderForLands: FC<any> = ({ slides }) => {
  return (
    <div className="exchange__slider lands__slider">
      <Swiper
        slidesPerView={1}
        modules={[Pagination, EffectFade, Autoplay]}
        pagination={{ clickable: true }}
        effect="fade"
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        speed={2000}
      >
        {slides.map((slide: any, idx: number) => (
          <SwiperSlide key={idx}>
            <img className="exchange__slider-slide" src={slide} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
