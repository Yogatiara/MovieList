import { IMAGE_URL_HEADER } from "../../../constants/config";
import { Swiper, SwiperSlide } from "swiper/react";
import { BiInfoCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

const CarauselSection = ({ carauselMovieList }) => {
  const carosel = carauselMovieList.slice(0, 3);
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      modules={[Autoplay, EffectFade, Pagination]}
      className="mySwiper"
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      centeredSlides={true}
      style={{
        "--swiper-pagination-bullet-inactive-color": "#999999",
      }}
    >
      {carosel.map((movie) => (
        <SwiperSlide key={movie.id}>
          <div className="relative  w-full">
            <div className="absolute left-0 right-0 top-0 z-10 h-full w-full bg-gradient-to-r from-slate-950 to-slate-950/30"></div>
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-950 to-slate-950/0"></div>
            <img
              src={IMAGE_URL_HEADER + movie.backdrop_path}
              alt={movie.title}
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute bottom-[40%] left-10 z-20 flex w-[60%] translate-y-1/2 flex-col items-start gap-2 text-white sm:translate-y-1/3 md:gap-5 lg:bottom-1/3 lg:translate-y-1/4">
              <h1 className="text-xl font-bold tracking-wide md:text-4xl lg:text-7xl">
                {movie.title}
              </h1>
              <p className=" text-[8px] leading-relaxed sm:text-base lg:text-xl">
                {movie.overview}
              </p>
              <Link
                to={`/details/${movie.id}`}
                className="flex items-center justify-center gap-2 rounded-md bg-white/30 px-4 py-2 text-base md:px-6 md:py-3 md:text-xl"
              >
                <BiInfoCircle className="h-6 w-6" />
                <p className="font-semibold">More info</p>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarauselSection;
