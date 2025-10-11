import React, { useCallback, useEffect, useRef } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { workshopsList } from '../../utils/general.jsx';

import styles from "./Carousel.module.css"


function Carousel() {
  const swiperRef = useRef(null);
  const hoverIntervalRef = useRef(null);

  const handleSwiper = useCallback((swiperInstance) => {
    swiperRef.current = swiperInstance;
  }, []);

  const stopHover = useCallback(() => {
    if (hoverIntervalRef.current) {
      clearInterval(hoverIntervalRef.current);
      hoverIntervalRef.current = null;
    }
  }, []);

  const startHover = useCallback((direction) => {
    if (!swiperRef.current) return;

    stopHover();

    const runSlide = () => {
      if (!swiperRef.current) return;

      if (direction === 'next') {
        swiperRef.current.slideNext();
        return;
      }

      swiperRef.current.slidePrev();
    };

    runSlide();
    hoverIntervalRef.current = setInterval(runSlide, 400);
  }, [stopHover]);

  useEffect(() => () => stopHover(), [stopHover]);

  return (
    <>
      <div className={styles.desktopNav}>
        <button
          type="button"
          className={`${styles.navButton} ${styles.prevButton}`}
          aria-label="Continuously view previous workshops"
          onMouseEnter={() => startHover('prev')}
          onMouseLeave={stopHover}
          onFocus={() => startHover('prev')}
          onBlur={stopHover}
        >
          <span aria-hidden="true">«</span>
        </button>
        <div className={styles.swiperContainer}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
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
            onSwiper={handleSwiper}
          >
          {workshopsList.map((workshop,id)=>(
             <SwiperSlide key={id}>{workshop}</SwiperSlide>
          ))}   
          </Swiper>
        </div>
        <button
          type="button"
          className={`${styles.navButton} ${styles.nextButton}`}
          aria-label="Continuously view next workshops"
          onMouseEnter={() => startHover('next')}
          onMouseLeave={stopHover}
          onFocus={() => startHover('next')}
          onBlur={stopHover}
        >
          <span aria-hidden="true">»</span>
        </button>
      </div>
      <div className="custom-pagination absolute bottom-0 flex justify-center"></div>
    </>
  )
}

export default Carousel
