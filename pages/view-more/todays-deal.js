import Layout from "../../layouts/Main";
import Footer from "../../components/footer";
import { useEffect, useRef, useState } from "react";
import ProductsContent from "./view-more-products";
import Angle from "../../assets/icons/Angle-right";

import AppUrl from '../../pages/AppUrl.js';
import CategoryLeftSideBar from '../../pages/categoryleftsidebar.js'


//   end

const TodaysDealPage = () => {

  const [data,setData] = useState([]);
  useEffect(async ()=>{

    let result = await fetch(AppUrl.base_url+"oneslider",{

      method:'POST',
      headers: {
        "Content-Type": 'application/json',
        "Accept" : 'application/json'
      }
    });
    result = await result.json();
    setData(result);
  },[]);

  // const styling = {
  //   backgroundImage: `url('${AppUrl.base_url}+"storage/app/"+${data.image}')`,
  // };

  // timer code
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("july 30, 2021 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // stop
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  // component
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
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
            data.map((item)=>
            <div className="product-market-banner" style={{ backgroundImage: "url('"+AppUrl.base_url+"storage/app/"+item.image+"')" }}></div>
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
      <div className="section section-products-featured view-more-pages">
        <div className="container">
          <header className="section-products-featured__header on-sale-view-more-header">
            <h3 className="todays-Sale">Today's Deal : <span className="sale-now-txt"> On Sale Now</span></h3>
            <span>
              <ul className="timer-Wrap">
                <li>Ends in</li>
                <li>{timerDays}</li>
                <li>{timerHours}</li>
                <li>{timerMinutes}</li>
                <li>{timerSeconds}</li>
              </ul>
            </span>
          </header>
          <ProductsContent />
        </div>
      </div>
      <Footer />
    </Layout>
  );
};
export default TodaysDealPage;
