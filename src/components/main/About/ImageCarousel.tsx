import { Swiper, SwiperSlide } from "swiper/react";
import "Swiper/css";
import "Swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules";

const images = [
  '/Images/aboutCard2.png', 
  '/Images/about.png',
  '/Images/aboutCard2.png', 
  '/Images/about.png',
  '/Images/aboutCard2.png', 
  '/Images/about.png',
];

const Image = () => {
  return (
    <div className="w-full mt-10 px-4">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={5} // Default view shows 5 slides
        spaceBetween={40}
        breakpoints={{
          320: {
            slidesPerView: 1, // 1 slide on small screens
            spaceBetween: 20
          },
          768: {
            slidesPerView: 2, // 2 slides on medium screens
            spaceBetween: 30
          },
          1024: {
            slidesPerView: 3, // 3 slides on large screens
            spaceBetween: 40
          },
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        modules={[EffectCoverflow]}
        className="max-w-[1280px] mx-autoplace-content-center"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="rounded-xl grid overflow-hidden">
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            className="rounded-xl h-[250px] w-full object-cover"
          />
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Image;