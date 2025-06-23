import React from 'react';
import './testimonials.css';
import Image1 from '../../assets/test1.png';
import Image3 from '../../assets/test2.png';
import {  Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
 {
    id: 1,
    image: Image1, // Client photo
    title: "Alex Rivera",
    subtitle: "CEO, StartupXYZ",
    comment: "Your UI designs took our app from clunky to intuitive. You delivered pixel-perfect Figma mockups faster than any freelancer we've worked with. The user testing results improved by 40%!"
  },
  {
    id: 2,
    image: Image3, // Client photo
    title: "Taha hoane",
    subtitle: "Ceo, Founder of Centre L'excellence",
    comment: "Working directly with you on our website was a breeze. You translated our vague ideas into a stunning visual identity that perfectly represents our brand. The development handoff was flawless."
    }
];

const Testimonials = () => {
  return (
    <section className="testimonials container section">
      <h2 className="section__title">Clients & Reviews</h2>

      <Swiper className="testimonials__container grid"
        modules={[ Pagination ]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {data.map(({id, image, title, subtitle, comment}) => {
          return (
            <SwiperSlide className="testimonials__item" key={id}>
              <div className="thumb">
                <img src={image} alt="" />
              </div>
              <h3 className="testimonials__title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials