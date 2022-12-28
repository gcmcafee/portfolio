/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

export default function Clients({ clients }) {
  return (
    <section
      id="clients"
      className="overflow-hidden bg-white relative clients before:bg-white before:absolute before:top-0 before:left-0 before:h-full before:w-full before:z-[2] before:border-r before:border-r-[#ccc] before:w-[2.5rem]"
    >
      <h2 className="top-1/2 z-10 absolute uppercase space-x-0 font-medium tracking-[4px] text-xl -rotate-90 origin-center w-0 overflow-visible flex justify-center whitespace-nowrap h-0 ml-1">
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
            <SwiperSlide className="self-center swiper-slide shrink">
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
