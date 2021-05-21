// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function MySwiper() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={swiper => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img src="/mare.jpg" alt="mare" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/montagna.jpg" alt="montagna" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/foresta.jpg" alt="mare" />
      </SwiperSlide>
      ...
    </Swiper>
  );
}
