import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { Autoplay, EffectCreative } from "swiper";

const Carousel = () => {
  return (
    <Swiper
      spaceBetween={1}
      slidesPerView={1}
      effect={"creative"}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      // allowTouchMove={false}
      loop={true}
      speed={1200}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, EffectCreative]}
      data-aos="fade-up"
      data-aos-duration="5000"
      className="mb-10 bg-transparent h-screen"
    >
      <SwiperSlide
        style={{ backgroundImage: `url(tree-736885_1280.jpg)` }}
        className="bg-no-repeat bg-cover bg-center parallax-bg h-full bg-transparent"
      ></SwiperSlide>
      <SwiperSlide
        style={{ backgroundImage: `url(tree-736885_1280.jpg)` }}
        className="bg-no-repeat bg-cover bg-center parallax-bg h-full bg-transparent"
      ></SwiperSlide>
      ...
    </Swiper>
  );
};

export default Carousel;