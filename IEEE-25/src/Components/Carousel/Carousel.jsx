import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Card from '../Card.jsx';
import { workshopsList } from '../../utils/general.jsx';

import styles from "./Carousel.module.css"


function Carousel() {
  return (
   <>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      // slidesPerView={3}
      breakpoints={{
          0: {       // mobile
            slidesPerView: 1,
          },
          768: {     // tablets
            slidesPerView: 2,
          },
          1024: {    // desktops
            slidesPerView: 3,
          },
        }}
      pagination={{ clickable: true,
        el: ".custom-pagination"
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
    {workshopsList.map((workshop,id)=>(
       <SwiperSlide key={id}>{workshop}</SwiperSlide>
    ))}   
    </Swiper>
     <div className="custom-pagination absolute bottom-0 flex justify-center"></div>
   </>
  )
}

export default Carousel