import Layout from "../../layouts/Main";
import Footer from "../../components/footer";
import Link from "next/link";
import Angle from "../../assets/icons/Angle-right";

import { useState,useEffect } from "react";
import AppUrl from '../../pages/AppUrl.js';
import CategoryLeftSideBar from '../../pages/categoryleftsidebar.js'

// const styling = {
//   backgroundImage: `url('https://static-01.daraz.com.bd/skyline/i8/ce6623d0887748a5a75d6b578ee3d44c-1188-300.jpg_desktop.jpg')`,
// };
//   end

const NewArrivalePage = () => {

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

    let result = await fetch(AppUrl.base_url+"viewmoreoutletproduct",{

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
        <div className="section section-products-featured sc-mt">
          <header className="section-products-featured__header">
            <h3>Shop from outlet</h3>
          </header>
          <div className="brandslider">
            <ul className="brand-list">
              {
                data.map((item)=>
                <li>
                <div className="Cbo-item">
                  <a href="#" className="brand-link">
                    <img src={AppUrl.base_url+"storage/app/"+item.img1} />
                    <h2>{item.cat_name}</h2>
                  </a>
                </div>
                <div className="hover-details">
                  <Link href="#">
                    <a>
                      Let's Go <i className="icon-right"></i>
                    </a>
                  </Link>
                </div>
              </li>
                )
              }
              
              {/* <li>
                <div className="Cbo-item">
                  <a href="#" className="brand-link">
                    <img src="/images/outlet/rm.jpg" />
                    <h2>RM Enterpise</h2>
                  </a>
                </div>
                <div className="hover-details">
                  <Link href="#">
                    <a>
                      Let's Go <i className="icon-right"></i>
                    </a>
                  </Link>
                </div>
              </li>
              <li>
                <div className="Cbo-item">
                  <a href="#" className="brand-link">
                    <img src="/images/outlet/fesh.jpg" />
                    <h2>Samsung</h2>
                  </a>
                </div>
                <div className="hover-details">
                  <Link href="#">
                    <a>
                      Let's Go <i className="icon-right"></i>
                    </a>
                  </Link>
                </div>
              </li>
              <li>
                <div className="Cbo-item">
                  <a href="#" className="brand-link">
                    <img src="/images/outlet/sn.jpg" />
                    <h2>Sn</h2>
                  </a>
                </div>
                <div className="hover-details">
                  <Link href="#">
                    <a>
                      Let's Go <i className="icon-right"></i>
                    </a>
                  </Link>
                </div>
              </li>
              <li>
                <div className="Cbo-item">
                  <a href="#" className="brand-link">
                    <img src="/images/outlet/fesh.jpg" />
                    <h2>Uniliver</h2>
                  </a>
                </div>
                <div className="hover-details">
                  <Link href="#">
                    <a>
                      Let's Go <i className="icon-right"></i>
                    </a>
                  </Link>
                </div>
              </li>
              <li>
                <div className="Cbo-item">
                  <a href="#" className="brand-link">
                    <img src="/images/brand/lifeboy.jpg" />
                    <h2>lifeboy</h2>
                  </a>
                </div>
                <div className="hover-details">
                  <Link href="#">
                    <a>
                      Let's Go <i className="icon-right"></i>
                    </a>
                  </Link>
                </div>
              </li>
              <li>
                <div className="Cbo-item">
                  <a href="#" className="brand-link">
                    <img src="/images/outlet/rm.jpg" />
                    <h2>Rm</h2>
                  </a>
                </div>
                <div className="hover-details">
                  <Link href="#">
                    <a>
                      Let's Go <i className="icon-right"></i>
                    </a>
                  </Link>
                </div>
              </li>
              <li>
                <div className="Cbo-item">
                  <a href="#" className="brand-link">
                    <img src="/images/brand/samsung.jpg" />
                    <h2>Samsung</h2>
                  </a>
                </div>
                <div className="hover-details">
                  <Link href="#">
                    <a>
                      Let's Go <i className="icon-right"></i>
                    </a>
                  </Link>
                </div>
              </li>
              <li>
                <div className="Cbo-item">
                  <a href="#" className="brand-link">
                    <img src="/images/brand/sn.jpg" />
                    <h2>Sn</h2>
                  </a>
                </div>
                <div className="hover-details">
                  <Link href="#">
                    <a>
                      Let's Go <i className="icon-right"></i>
                    </a>
                  </Link>
                </div>
              </li>
              <li>
                <div className="Cbo-item">
                  <a href="#" className="brand-link">
                    <img src="/images/brand/unicef.jpg" />
                    <h2>Uniliver</h2>
                  </a>
                </div>
                <div className="hover-details">
                  <Link href="#">
                    <a>
                      Let's Go <i className="icon-right"></i>
                    </a>
                  </Link>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
};
export default NewArrivalePage;
