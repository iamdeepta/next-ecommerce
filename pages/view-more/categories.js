import Layout from "../../layouts/Main";
import Footer from "../../components/footer";
import Angle from "../../assets/icons/Angle-right";
import { useState,useEffect } from "react";
import {AppUrl} from '../../pages/AppUrl.js';
import CategoryLeftSideBar from '../../pages/categoryleftsidebar.js'

// const styling = {
//   backgroundImage: `url('https://static-01.daraz.com.bd/skyline/i8/ce6623d0887748a5a75d6b578ee3d44c-1188-300.jpg_desktop.jpg')`,
// };
//   end

const CategoriesPage = () => {

  const [data1,setData1] = useState([]);
    useEffect(async ()=>{
  
      let result1 = await fetch(AppUrl.base_url+"oneslider",{
  
        method:'POST',
        headers: {
          "Content-Type": 'application/json',
          "Accept" : 'application/json'
        }
      });
      result1 = await result1.json();
      setData1(result1);
    },[]);

  const [data,setData] = useState([]);
  useEffect(async ()=>{

    let result = await fetch(AppUrl.base_url+"viewmoreallcategory",{

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
    <Layout>
      <section className="container page-intro">
        <CategoryLeftSideBar/>
        {/* <div className="Category-card">
          <ul className="cat-list">
            <li className="cat-item Man-col">
              <a href="#" className="cat-link">
                Men's Clothing{" "}
                <span>
                  <Angle />
                </span>
              </a>
              <ul className="Sub-Cat">
                <li>
                  <a href="#">Shirts</a>
                </li>
                <li>
                  <a href="#">Women Clothing</a>
                </li>
                <li>
                  <a href="#">Consumer Eletronics</a>
                </li>
                <li>
                  <a href="#">Shirts Consumer Eletronics</a>
                </li>
              </ul>
            </li>
            <li className="cat-item Man-col">
              <a href="#" className="cat-link">
                Women Clothing{" "}
                <span>
                  <Angle />
                </span>
              </a>
              <ul className="Sub-Cat">
                <li>
                  <a href="#">Shirts</a>
                </li>
                <li>
                  <a href="#">Women Clothing</a>
                </li>
                <li>
                  <a href="#">Consumer Eletronics</a>
                </li>
                <li>
                  <a href="#">Shirts Consumer Eletronics</a>
                </li>
              </ul>
            </li>
            <li className="cat-item">
              <a href="#" className="cat-link">
                Computer & Office
              </a>
            </li>
            <li className="cat-item">
              <a href="#" className="cat-link">
                Consumer Eletronics
              </a>
            </li>
            <li className="cat-item">
              <a href="#" className="cat-link">
                jewellery & watches
              </a>
            </li>
            <li className="cat-item">
              <a href="#" className="cat-link">
                Home , Garden & furniture
              </a>
            </li>
            <li className="cat-item">
              <a href="#" className="cat-link">
                bags & shoes
              </a>
            </li>
            <li className="cat-item">
              <a href="#" className="cat-link">
                toys, kids & baby
              </a>
            </li>
            <li className="cat-item">
              <a href="#" className="cat-link">
                Hair, Health & beauty
              </a>
            </li>
            <li className="cat-item">
              <a href="#" className="cat-link">
                automotive motorcycle
              </a>
            </li>
            <li className="cat-item">
              <a href="#" className="cat-link">
                automotive motorcycle
              </a>
            </li>
            <li className="cat-item">
              <a href="#" className="cat-link">
                more categories
              </a>
            </li>
          </ul>
        </div> */}
        {/* end */}
        <div className="swiper-wrapper">
          {
            data1.map((item1)=>
            <div className="product-market-banner" style={{ backgroundImage: "url('"+AppUrl.base_url+"storage/app/"+item1.image+"')" }}></div>
            )
          }
          
        </div>
      </section>
      <section className="ckSection">
        <div className="container">
          <ul className="shop-data">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Earning Opportunity</h4>
                <p>Minimum shopping amount 1000</p>
              </div>
            </li>
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Free Shipping</h4>
                <p>On all orders over 4000</p>
              </div>
            </li>

            <li>
              <i className="icon-payment"></i>
              <div className="data-item__content">
                <h4>Online support</h4>
                <p>24/7 support</p>
              </div>
            </li>

            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Money-Back Guarantee</h4>
                <p>30 day Money back</p>
              </div>
            </li>

            <li>
              <i className="icon-materials"></i>
              <div className="data-item__content">
                <h4>Cash on delivery</h4>
                <p>Relax and save your time.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="container">
        <div className="section section-products-featured">
          <header className="section-products-featured__header">
            <h3>Find your items by categories</h3>
          </header>
          <ul className="cat-grid-wrap">
            {
              data.map((item)=>
              <li className="cat-grid-item">
              <a href="#" className="cat-grid-link" target="__blank">
                <img src={AppUrl.base_url+"storage/app/"+item.image} />
                <h1>{item.cat_name}</h1>
              </a>
            </li>
              )
            }
            
            {/* <li className="cat-grid-item">
              <a href="#" className="cat-grid-link" target="__blank">
                <img src="https://static-01.daraz.com.bd/original/6d5bd42ab9007f6b6a2728d1e799f9dc.jpg" />
                <h1>food & fruits</h1>
              </a>
            </li>
            <li className="cat-grid-item">
              <a href="#" className="cat-grid-link" target="__blank">
                <img src="https://static-01.daraz.com.bd/original/ed0a8afa4d731fa109246941e43adf41.jpg" />
                <h1>Health & personal care</h1>
              </a>
            </li>
            <li className="cat-grid-item">
              <a href="#" className="cat-grid-link" target="__blank">
                <img src="https://static-01.daraz.com.bd/p/1c4ecd471dc9a0b6cadeb13dc6d1c0bd.jpg" />
                <h1>Men's Fashion</h1>
              </a>
            </li>
            <li className="cat-grid-item">
              <a href="#" className="cat-grid-link" target="__blank">
                <img src="https://static-01.daraz.com.bd/p/e49faaea62cc5a459f1ed2e3faa65045.jpg_200x200q80-product.jpg_.webp" />
                <h1>Women's Fashion</h1>
              </a>
            </li>
            <li className="cat-grid-item">
              <a href="#" className="cat-grid-link" target="__blank">
                <img src="https://static-01.daraz.com.bd/p/71bd5b32820d7375c6c7d3257facb482.jpg_170x170q80.jpg_.webp" />
                <h1>Grocery</h1>
              </a>
            </li>
            <li className="cat-grid-item">
              <a href="#" className="cat-grid-link" target="__blank">
                <img src="https://static-01.daraz.com.bd/p/dec2d0a6496fdf98d89dc97aa81573ba.jpg_170x170q80.jpg_.webp" />
                <h1>food & fruits</h1>
              </a>
            </li>
            <li className="cat-grid-item">
              <a href="#" className="cat-grid-link" target="__blank">
                <img src="https://static-01.daraz.com.bd/original/c908676f3d34630926c46af207032286.jpg_170x170q80.jpg_.webp" />
                <h1>Health & personal care</h1>
              </a>
            </li>
            <li className="cat-grid-item">
              <a href="#" className="cat-grid-link" target="__blank">
                <img src="https://static-01.daraz.com.bd/p/71fb8cb277974f4ba8592ca048558439.jpg_170x170q80.jpg_.webp" />
                <h1>Men's Fashion</h1>
              </a>
            </li>
            <li className="cat-grid-item">
              <a href="#" className="cat-grid-link" target="__blank">
                <img src="https://static-01.daraz.com.bd/original/62fc245667442b26e6e7f887f1e41297.jpg_170x170q80.jpg_.webp" />
                <h1>Women's Fashion</h1>
              </a>
            </li> */}
          </ul>
        </div>
      </section>
      <Footer />
    </Layout>
  );
};
export default CategoriesPage;
