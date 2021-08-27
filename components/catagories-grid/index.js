import { useState,useEffect } from "react";
import {AppUrl} from '../../pages/AppUrl.js';
export const Categories = () => {

  const [data,setData] = useState([]);
  useEffect(async ()=>{

    let result = await fetch(AppUrl.base_url+"all/categories",{

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

  return (
    <div className="container">
      <div className="section section-products-featured">
        <header className="section-products-featured__header">
          <h3>Find your items by categories</h3>
          <a href="/view-more/categories" className="btn btn--rounded btn--border">view more</a>
        </header>
        <ul className="cat-grid-wrap">
          {data.map((item)=>
          <li className="cat-grid-item"><a href="#" className="cat-grid-link" target="__blank">
          <img src={AppUrl.base_url+"storage/app/"+item.image} />
          <h1>{item.cat_name}</h1>
        </a></li>
          )}
          
          {/* <li className="cat-grid-item"><a href="#" className="cat-grid-link" target="__blank">
            <img src="https://static-01.daraz.com.bd/original/6d5bd42ab9007f6b6a2728d1e799f9dc.jpg" />
            <h1>food & fruits</h1>
          </a></li>
          <li className="cat-grid-item"><a href="#" className="cat-grid-link" target="__blank">
            <img src="https://static-01.daraz.com.bd/original/ed0a8afa4d731fa109246941e43adf41.jpg" />
            <h1>Health & personal care</h1>
          </a></li>
          <li className="cat-grid-item"><a href="#" className="cat-grid-link" target="__blank">
            <img src="https://static-01.daraz.com.bd/p/1c4ecd471dc9a0b6cadeb13dc6d1c0bd.jpg" />
            <h1>Men's Fashion</h1>
          </a></li>
          <li className="cat-grid-item"><a href="#" className="cat-grid-link" target="__blank">
            <img src="https://static-01.daraz.com.bd/p/e49faaea62cc5a459f1ed2e3faa65045.jpg_200x200q80-product.jpg_.webp" />
            <h1>Women's Fashion</h1>
          </a></li>
          <li className="cat-grid-item"><a href="#" className="cat-grid-link" target="__blank">
            <img src="https://static-01.daraz.com.bd/p/71bd5b32820d7375c6c7d3257facb482.jpg_170x170q80.jpg_.webp" />
            <h1>Grocery</h1>
          </a></li>
          <li className="cat-grid-item"><a href="#" className="cat-grid-link" target="__blank">
            <img src="https://static-01.daraz.com.bd/p/dec2d0a6496fdf98d89dc97aa81573ba.jpg_170x170q80.jpg_.webp" />
            <h1>food & fruits</h1>
          </a></li>
          <li className="cat-grid-item"><a href="#" className="cat-grid-link" target="__blank">
            <img src="https://static-01.daraz.com.bd/original/c908676f3d34630926c46af207032286.jpg_170x170q80.jpg_.webp" />
            <h1>Health & personal care</h1>
          </a></li>
          <li className="cat-grid-item"><a href="#" className="cat-grid-link" target="__blank">
            <img src="https://static-01.daraz.com.bd/p/71fb8cb277974f4ba8592ca048558439.jpg_170x170q80.jpg_.webp" />
            <h1>Men's Fashion</h1>
          </a></li>
          <li className="cat-grid-item"><a href="#" className="cat-grid-link" target="__blank">
            <img src="https://static-01.daraz.com.bd/original/62fc245667442b26e6e7f887f1e41297.jpg_170x170q80.jpg_.webp" />
            <h1>Women's Fashion</h1>
          </a></li> */}
        </ul>
      </div>
    </div>
  )
};

export default Categories