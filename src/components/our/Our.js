import React from 'react'
import "./Our.css"
import "./OurMedia.css"
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

function Our() {
    return (
        <div className='main-our'>
            <div className="main-img">
                <div className="text-our">
                    <h3>TOP SERVICES</h3>
                    <h1>Our Specializaations</h1>
                </div>
                <div className="img-our">
                    <div className="img2-our">
                        {/* <h1>Floor plan</h1>
                        <p></p> */}
                    </div>
                    <div className="img3-our"></div>
                    <div className="img4-our"></div>
                    <div className="img5-our"></div>
                </div>
            </div>

            <h1 className='des'>DESIGN</h1>

            <div className="swiper-our">
                <>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                    </Swiper>
                </>
            </div>
        </div>
    )
}

export default Our