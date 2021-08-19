import Angle from '../../assets/icons/Angle-right'
import Slider from './slider'

import CategoryLeftSideBar from '../../pages/categoryleftsidebar.js'

const PageIntro = () => {


  return (
    <div>
      <section className="container page-intro">
        <CategoryLeftSideBar/>
        {/* end */}
        <div  className="swiper-wrapper">
          <Slider />
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
    </div>
  )
};

export default PageIntro