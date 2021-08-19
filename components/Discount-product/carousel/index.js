import ProductItem from './../../product-item';

// import Swiper core and required components
import { Swiper, SwiperSlide } from 'swiper/react';

import { useState,useEffect } from "react";
import AppUrl from '../../../pages/AppUrl.js';

let slidesPerView = 2;
let centeredSlides = false;
let spaceBetween = 10;
if (process.browser) {
  if(window.innerWidth > 420) {
    slidesPerView = 2;
    spaceBetween = 35;
    centeredSlides = false;
  }
  if(window.innerWidth > 768) {
    slidesPerView =3;
    spaceBetween = 35;
    centeredSlides = false;
  }
  if(window.innerWidth > 992) {
    slidesPerView = 4;
    spaceBetween = 30;
    centeredSlides = false;
  }
  if(window.innerWidth > 1200) {
    slidesPerView = 5;
    spaceBetween = 30;
    centeredSlides = false;
  }
}

export const ProductsCarousel = ({ products }) => {
  if (!products) return 'Hey, Wait! Loading';

  const [data,setData] = useState([]);
  useEffect(async ()=>{

    let result = await fetch(AppUrl.base_url+"category/discountproduct",{

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
    <div className="products-carousel">
      <Swiper 
      spaceBetween={spaceBetween} 
      loop={true} 
      centeredSlides={centeredSlides} 
      watchOverflow={true} 
      slidesPerView={slidesPerView} 
      className="swiper-wrapper">
        {data.map(item => (
          <SwiperSlide key={item.id}>
            <ProductItem 
              // discount={item.discount}
              category={item.cat_name}
              price={item.price}
              currentPrice={item.price}
              key={item.id}
              id={item.id} 
              productImage={AppUrl.base_url+"storage/app/"+item.img1} 
              name={item.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ProductsCarousel