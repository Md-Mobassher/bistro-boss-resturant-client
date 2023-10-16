import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/sectionTitle";

const Category = () => {
  return (
    <section className="pb-10 px-16">
      <SectionTitle subtitle="From 11:00am to 10:00pm" title="ORDER ONLINE"></SectionTitle>

      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="" className=""/>
          <h3 className="text-2xl uppercase font-semibold text-center">
            SALADS
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="text-2xl uppercase font-semibold text-center ">
            PIZZAS
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="text-2xl uppercase font-semibold text-center">
            SOUPS
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="text-2xl uppercase font-semibold text-center ">
            DESSERTS
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="text-2xl uppercase font-semibold text-center">
            SALADS
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
