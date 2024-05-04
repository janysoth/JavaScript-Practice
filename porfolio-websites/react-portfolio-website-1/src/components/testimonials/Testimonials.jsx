import React from 'react';
import './testimonials.css';
import customerReviews from '../../assets/customerReviews';

// Import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          customerReviews.map((data) => {
            return (
              <SwiperSlide key={data.id} className="testimonial">
                <div className="client__avatar">
                  <img src={data.avatar} alt="Avatar One" />
                </div>
                <h5>{data.name}</h5>
                <small className="client__review">
                  {data.review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials;
