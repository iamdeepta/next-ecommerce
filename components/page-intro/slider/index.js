import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from 'next/router';
import { useState,useEffect } from "react";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

import AppUrl from '../../../pages/api/AppUrl.js';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);



const Slider = () => {

const [data,setData] = useState([]);
  useEffect(async ()=>{

    let result = await fetch(AppUrl.base_url+"all/slider",{

      method:'POST',
      headers: {
        "Content-Type": 'application/json',
        "Accept" : 'application/json'
      }
    });
    result = await result.json();
    setData(result);
  },[]);

  //console.log("result",data);

  const router = useRouter()
  const oneLink = (e) => {
    e.preventDefault()
    router.push('/cart')
  }
  // end
  const twoLink = (e) => {
    e.preventDefault()
    router.push('/cart')
  }
  // end
  const threeLink = (e) => {
    e.preventDefault()
    router.push('/cart')
  }
  // end
  return (
    <Swiper
      spaceBetween={10}
      centeredSlides={true}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      className="mySwiper"
    >
      {
        data.map((item)=>

          <SwiperSlide
        onClick={oneLink}
        style={{ backgroundImage: "url('"+AppUrl.base_url+"storage/app/"+item.image+"')" }}
      ></SwiperSlide>

        )
      
}
      {/* <SwiperSlide
        onClick={twoLink}
        style={{ backgroundImage: "url('/images/slide-2.jpg')" }}
      ></SwiperSlide>
      <SwiperSlide
        onClick={threeLink}
        style={{ backgroundImage: "url('/images/slide3.jpg')" }}
      ></SwiperSlide> */}
    </Swiper>
  );
}

export default Slider