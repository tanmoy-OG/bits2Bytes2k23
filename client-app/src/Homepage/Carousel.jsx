import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Parallax, Autoplay, Pagination, Navigation } from "swiper";

export const Carousel = () => {
  return (
    <Swiper
      spaceBetween={1}
      slidesPerView={1}
      // allowTouchMove={false}
      loop={true}
      parallax={true}
      speed={1200}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[Parallax, Autoplay, Pagination, Navigation]}
      className="mb-10 bg-white h-screen"
    >
      <SwiperSlide className="parallax-bg bg-orange-500">
        <img
          style={{ width: "200vb" }}
          src="tree-736885_1280.jpg"
          alt=""
          className="absolute"
          data-swiper-parallax="-300"
        />
      </SwiperSlide>
      <SwiperSlide
        style={{ backgroundImage: `url(tree-736885_1280.jpg)` }}
        className="bg-no-repeat bg-cover bg-center parallax-bg h-full bg-black"
        data-swiper-parallax="-300"
      ></SwiperSlide>
      ...
    </Swiper>
  );
};
