/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

export default function Clients({ clients }) {
  return (
    <section
      id="clients"
      className="clients relative overflow-hidden bg-white before:absolute before:top-0 before:left-0 before:z-[2] before:h-full before:w-[2.5rem] before:border-r before:border-r-[#ccc] before:bg-white"
    >
      <h2 className="absolute top-1/2 z-10 ml-1 flex h-0 w-0 origin-center -rotate-90 justify-center space-x-0 overflow-visible whitespace-nowrap text-xl font-medium uppercase tracking-[4px]">
        Clients
      </h2>

      <div className="py-12">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={100}
          speed={5500}
          slidesPerView={'auto'}
          loop
          className="swiper swiper-container swiper--linear swiper--carousel--clients [&>.swiper-wrapper]:ease-linear"
          allowTouchMove={false}
          autoplay={{ delay: 0 }}
        >
          {clients.map((client) => (
            <SwiperSlide
              className="swiper-slide shrink self-center"
              key={client._id}
            >
              <img
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
