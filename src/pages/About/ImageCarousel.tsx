import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Image paths
const imagePaths = [
  "/Images/about.png",
  "/Images/aboutCard2.png",
  "/Images/about.png",
  "/Images/aboutCard2.png",
  "/Images/about.png",
];

// Slider settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // Desktop view
  slidesToScroll: 1,
  autoplay: true,            // Enable autoplay
  autoplaySpeed: 3000,       // 3 seconds
  responsive: [
    {
      breakpoint: 824, // Tablet view
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 568, // Mobile view
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Carousel: React.FC = () => (
  <div className="w-full overflow-hidden mt-7 px-5 relative pb-10">
    <Slider {...settings}>
      {imagePaths.map((src, i) => (
        <div key={i}>
          <img
            src={src}
            alt={`Slide ${i + 1}`}
            className="w-[95%] h-[350px] sm:h-[390px] object-fit"
          />
        </div>
      ))}
    </Slider>
  </div>
);

export default Carousel;
