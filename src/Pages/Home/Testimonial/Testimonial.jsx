import SectionTitle from "../../../Components/sectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="lg:px-20 px-5 mb-20">
      <SectionTitle
        title={"TESTIMONIALS"}
        subtitle={"What Our Clients Say"}
      ></SectionTitle>

      <div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          autoplay={{loop: Infinity}}
          pagination={{ clickable: true }} 
          className="mySwiper"
        >
          <div className="">
            {reviews.map((review) => (
              <SwiperSlide key={review._id} className="text-center px-20 pb-16">
                <Rating style={{maxWidth: 270, color: '#CD9003'}} className="mx-auto" value={review.rating} />
                <p className="py-8">{review.details}</p>
                <h3 className="text-4xl font-semibold">{review.name}</h3>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        
      </div>
    </section>
  );
};

export default Testimonial;
