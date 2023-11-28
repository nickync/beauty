import React, {useRef, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import front from "../asset/front.jpg"
import front1 from "../asset/front1.jpg"
import menu from "../asset/menu.jpg"
import env1 from "../asset/env1.jpg"
import env2 from "../asset/env2.jpg"


export default function SliderComp(){
    return (
        <>
            <Swiper
                autoHeight={true}
                slidesPerView={"auto"}
                spaceBetween={20}
                
                speed={2200}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction:false,
                    waitForTransition:true,
                }}
                loop={true}
                pagination={{
                    clickable:false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className='mySwiper'
                >
                <SwiperSlide><img src={front} alt='#' className='swiperImg' /></SwiperSlide>
                <SwiperSlide><img src={front1} alt='#' className='swiperImg' /></SwiperSlide>
                <SwiperSlide><img src={env1} alt='#' className='swiperImg' /></SwiperSlide>
                <SwiperSlide><img src={menu} alt='#' className='swiperImg' /></SwiperSlide>
                <SwiperSlide><img src={env2} alt='#' className='swiperImg' /></SwiperSlide>
            </Swiper>
        </>
    )
}