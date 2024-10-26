import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  Thumbs,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// import { useState } from "react";

const Slideshow = () => {
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const slides = [
    {
      title: "Golden Land",
      caption:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: "images/desktop/golden_land_poster.jpg",
    },
    {
      title: "Alice Adventures",
      caption:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: "images/desktop/alice_adventure.jpg",
    },
    {
      title: "Dancing in the Air",
      caption:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: "images/desktop/dancing_air.jpg",
    },
    {
      title: "Ballet Under the Sea",
      caption:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: "images/desktop/ballet_under_sea.jpg",
    },
  ];

  return (
    <div className="relative w-full h-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade, Thumbs]}
        effect="fade"
        // navigation
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        // thumbs={{ swiper: thumbsSwiper }}
        // className="relative w-full"
        className="w-full h-full loading"
        // className="relative w-full h-[500px]"
        pagination={{ clickable: true }}
        // autoplay={{ delay: 5000 }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <figure className="w-full h-full">
                <div
                  className="slide-bgimg absolute inset-0 bg-cover bg-center z-0"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="entity-img opacity-0 absolute inset-0 w-full h-full object-cover"
                />
              </figure>
              <div className="content absolute inset-0 flex flex-col justify-center items-center text-white p-8 z-20">
                <p className="title text-4xl font-bold mb-4">{slide.title}</p>
                <span className="text-lg max-w-2xl text-center">
                  {slide.caption}
                </span>
              </div>
            </div>
            {/* Navigation Buttons */}
            {/* <div className="swiper-button-prev !text-white"></div> */}
            <div className="swiper-button-prev !text-white after:!text-2xl hover:!text-yellow-400 transition-colors"></div>
            <div className="swiper-button-next !text-white after:!text-2xl hover:!text-yellow-400 transition-colors"></div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Navigation */}
      {/* <Swiper
        onSwiper={setThumbsSwiper}
        modules={[Navigation, Thumbs]}
        watchSlidesProgress
        className="mt-4"
        slidesPerView={4}
        spaceBetween={10}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            <figure className="w-full h-full">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              />
              <img
                src={slide.image}
                alt={slide.title}
                className="opacity-0 w-full h-full object-cover"
              />
            </figure>
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 backdrop-blur-sm">
              <p className="text-xl font-semibold">{slide.title}</p>
            </div>
          </SwiperSlide>
        ))} */}

      {/* Navigation Buttons */}
      {/* <div className="swiper-button-prev !text-white after:!text-2xl hover:!text-yellow-400 transition-colors"></div>
        <div className="swiper-button-next !text-white after:!text-2xl hover:!text-yellow-400 transition-colors"></div> */}
      {/* </Swiper> */}

      {/* Thumbnail Navigation */}
      {/* <Swiper
        onSwiper={setThumbsSwiper}
        modules={[Navigation, Thumbs]}
        watchSlidesProgress
        className="mt-4"
        slidesPerView={4}
        spaceBetween={10}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
      > */}
      {/* {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative aspect-video cursor-pointer group">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${slide.image})`
                }}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="opacity-0 w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 transform transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                <p className="text-sm font-medium truncate">{slide.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ) */}
      {/* </Swiper> */}
    </div>
  );
};

export default Slideshow;
