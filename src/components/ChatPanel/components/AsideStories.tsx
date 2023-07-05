import { FC } from "react";
// @ts-ignore
import addStoriesIcon from "../../../assets/images/chatpanel/add-stories-icon.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
//@ts-ignore
import ico1 from "../../../assets/images/chatpanel/1.jpg";
//@ts-ignore
import ico2 from "../../../assets/images/chatpanel/2.jpg";
//@ts-ignore
import ico3 from "../../../assets/images/chatpanel/3.jpg";
//@ts-ignore
import ico4 from "../../../assets/images/chatpanel/4.jpg";

export const AsideStories: FC = () => {

  const breakpoints = {
    646: {
      slidesPerView: 4.5,
    },
    450: {
      slidesPerView: 6,
    },
  };

  return (
    <div className="chatpanel__stories">
      <div className="chatpanel__title">Stories</div>
      <Swiper spaceBetween={16} slidesPerView={4.5} breakpoints={breakpoints}>
        <SwiperSlide>
          <div className="chatpanel__slide">
            <img className="chatpanel__slide-img" src={addStoriesIcon} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="chatpanel__slide">
            <img className="chatpanel__slide-img" src={ico1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="chatpanel__slide">
            <img className="chatpanel__slide-img" src={ico2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="chatpanel__slide chatpanel__slide--active">
            <img className="chatpanel__slide-img" src={ico3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="chatpanel__slide">
            <img className="chatpanel__slide-img" src={ico4} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="chatpanel__slide">
            <img className="chatpanel__slide-img" src={ico1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="chatpanel__slide">
            <img className="chatpanel__slide-img" src={ico2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="chatpanel__slide">
            <img className="chatpanel__slide-img" src={ico3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="chatpanel__slide">
            <img className="chatpanel__slide-img" src={ico4} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
