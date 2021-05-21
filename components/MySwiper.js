// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function MySwiper() {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={swiper => console.log(swiper)}
      >
        <SwiperSlide>
          <img src="/mare.jpg" alt="mare" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/montagna.jpg" alt="mare" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/foresta.jpg" alt="mare" />
        </SwiperSlide>
        ...
      </Swiper>
    </>
  );
}
