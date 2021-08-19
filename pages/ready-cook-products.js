import Layout from "../layouts/Main";
import Angle from '../assets/icons/Angle-right'
import Footer from "../components/footer";
const styling = {
  backgroundImage: `url('https://i.pinimg.com/originals/c8/c8/f6/c8c8f6a67b4f3402de8c43739a158683.jpg')`,
}
const ProductMarket = () => (
  <Layout>
    <section className="container page-intro">
      <div className="Category-card">
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
      </div>
      {/* end */}
      <div className="swiper-wrapper">
        <div className="product-market-banner" style={styling}></div>
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
      <div className="product-market-page">
        <div className="heading">
          <h2>Ready To Cook</h2>
          <h5>Browse All Category</h5>
        </div>
        <div className="product-market-body">
          <div className="product-market-item">
            <a href="/product-market-products">
              <div className="product-market-image">
                <img
                  src="http://trust-lite.com/static/media/homemaderedy.d223bc15.jpg"
                  alt="sddd"
                />
              </div>
              <h2>ফলের বাজার</h2>
            </a>
            <a className="view-pro" href="/product-market-products">
              View all Product's
            </a>
          </div>
          <div className="product-market-item">
            <a href="/product-market-products">
              <div className="product-market-image">
                <img
                  src="https://app.trust-lite.com/storage/app/product/trSyMGvwF6Ea2jCvSGyb33bwGrMPzkMv5qCIpMFk.jpeg"
                  alt="sddd"
                />
              </div>
              <h2>ফলের বাজার</h2>
            </a>
            <a className="view-pro" href="/product-market-products">
              View all Product's
            </a>
          </div>
          <div className="product-market-item">
            <a href="#">
              <div className="product-market-image">
                <img
                  src="https://app.trust-lite.com/storage/app/product/trSyMGvwF6Ea2jCvSGyb33bwGrMPzkMv5qCIpMFk.jpeg"
                  alt="sddd"
                />
              </div>
              <h2>ফলের বাজার</h2>
            </a>
            <a className="view-pro" href="/">
              View all Product's
            </a>
          </div>
          <div className="product-market-item">
            <a href="#">
              <div className="product-market-image">
                <img
                  src="https://app.trust-lite.com/storage/app/product/trSyMGvwF6Ea2jCvSGyb33bwGrMPzkMv5qCIpMFk.jpeg"
                  alt="sddd"
                />
              </div>
              <h2>ফলের বাজার</h2>
            </a>
            <a className="view-pro" href="/">
              View all Product's
            </a>
          </div>
          <div className="product-market-item">
            <a href="#">
              <div className="product-market-image">
                <img
                  src="https://app.trust-lite.com/storage/app/product/trSyMGvwF6Ea2jCvSGyb33bwGrMPzkMv5qCIpMFk.jpeg"
                  alt="sddd"
                />
              </div>
              <h2>ফলের বাজার</h2>
            </a>
            <a className="view-pro" href="/">
              View all Product's
            </a>
          </div>
          <div className="product-market-item">
            <a href="#">
              <div className="product-market-image">
                <img
                  src="https://app.trust-lite.com/storage/app/product/trSyMGvwF6Ea2jCvSGyb33bwGrMPzkMv5qCIpMFk.jpeg"
                  alt="sddd"
                />
              </div>
              <h2>ফলের বাজার</h2>
            </a>
            <a className="view-pro" href="/">
              View all Product's
            </a>
          </div>
          <div className="product-market-item">
            <a href="#">
              <div className="product-market-image">
                <img
                  src="https://app.trust-lite.com/storage/app/product/trSyMGvwF6Ea2jCvSGyb33bwGrMPzkMv5qCIpMFk.jpeg"
                  alt="sddd"
                />
              </div>
              <h2>ফলের বাজার</h2>
            </a>
            <a className="view-pro" href="/">
              View all Product's
            </a>
          </div>
          <div className="product-market-item">
            <a href="#">
              <div className="product-market-image">
                <img
                  src="https://app.trust-lite.com/storage/app/product/trSyMGvwF6Ea2jCvSGyb33bwGrMPzkMv5qCIpMFk.jpeg"
                  alt="sddd"
                />
              </div>
              <h2>ফলের বাজার</h2>
            </a>
            <a className="view-pro" href="/">
              View all Product's
            </a>
          </div>
          <div className="product-market-item">
            <a href="#">
              <div className="product-market-image">
                <img
                  src="https://app.trust-lite.com/storage/app/product/trSyMGvwF6Ea2jCvSGyb33bwGrMPzkMv5qCIpMFk.jpeg"
                  alt="sddd"
                />
              </div>
              <h2>ফলের বাজার</h2>
            </a>
            <a className="view-pro" href="/">
              View all Product's
            </a>
          </div>
          <div className="product-market-item">
            <a href="#">
              <div className="product-market-image">
                <img
                  src="https://app.trust-lite.com/storage/app/product/trSyMGvwF6Ea2jCvSGyb33bwGrMPzkMv5qCIpMFk.jpeg"
                  alt="sddd"
                />
              </div>
              <h2>ফলের বাজার</h2>
            </a>
            <a className="view-pro" href="/">
              View all Product's
            </a>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </Layout>
);

export default ProductMarket;
