// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

import { useState,useEffect } from "react";
import {AppUrl} from '../../pages/AppUrl.js';

// install Swiper modules
SwiperCore.use([Pagination]);

export const Campaign = () => {

  const [data,setData] = useState([]);
  useEffect(async ()=>{

    let result = await fetch(AppUrl.base_url+"category/campaignsproduct",{

      method:'POST',
      headers: {
        "Content-Type": 'application/json',
        "Accept" : 'application/json'
      }
    });
    result = await result.json();
    setData(result);
  },[]);

  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        className="campaingsslider container"
      >
        {
          data.map((item)=>
          <>
          <SwiperSlide>
          <a href="#" className="campaings-link">
            <img src={AppUrl.base_url+"storage/app/"+item.img1} />
          </a>
        </SwiperSlide>
        </>
          )
        }
        
        {/* <SwiperSlide>
          <a href="#" className="campaings-link">
            <img src="/images/campings/omarekuse.jpg" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="campaings-link">
            <img src="/images/campings/omarekuse.jpg" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="campaings-link">
            <img src="/images/campings/omarekuse.jpg" />
          </a>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}

export default Campaign