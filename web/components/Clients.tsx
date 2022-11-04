/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

export default function Clients({ clients }) {
  return (
    <section
      id="clients"
      className="clients bg-white position-relative overflow-hidden py-lg-3"
    >
      <div className="title-wrapper">
        <h2 className="title rotate">Clients</h2>
      </div>
      <div className="py-5">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={100}
          speed={5500}
          slidesPerView={'auto'}
          loop
          className="swiper swiper-container swiper--linear swiper--carousel--clients"
          allowTouchMove={false}
          autoplay={{ delay: 0 }}
        >
          {clients.map((client) => (
            <SwiperSlide className="swiper-slide flex-shrink-1 align-self-center">
              <img
                key={client?._id}
                className={client?.class}
                src={client?.url}
                alt={client?.alt}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
