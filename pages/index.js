import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import BrandShop from '../components/brand-shop';
import Categories from '../components/catagories-grid';
import Outlet from '../components/outlet';
import CustomOrder from '../components/Custom-order';
import Campaings from '../components/campaings';
import InfoSections from '../components/Information-sections';
import PromoBanner from '../components/Promotion-Banner';
import SaveBanner from '../components/SaveTime-banner';
import Wholesale from '../components/Whole-sale';
import TodaySale from '../components/todaysdeal';
import NewArrival from '../components/New-arrival';
import Featured from '../components/Featured';
import BestSeller from '../components/Best-sellers';
import Discount from '../components/Discount-product';
import Homemade from '../components/homemade-ready-meals';
import Footer from '../components/footer';
import Subscribe from '../components/subscribe';


const IndexPage = () => {
  return (
    <Layout>
      <PageIntro />
      <TodaySale />
      <NewArrival />
      <Featured />
      <BestSeller />
      <Categories />
      {/* brand */}
      <div className="container">
        <div className="section section-products-featured sc-mt">
          <header className="section-products-featured__header">
            <h3>Shop by brand</h3>
            <a href="/view-more/brands" className="btn btn--rounded btn--border">view more</a>
          </header>
          <BrandShop />
        </div>
      </div>
      {/* brand end*/}

      {/* outlet */}
      <div className="container">
        <div className="section section-products-featured sc-mt">
        <header className="section-products-featured__header">
          <h3>Shop from outlet</h3>
          <a href="/view-more/outlets" className="btn btn--rounded btn--border">view more</a>
        </header>
        <Outlet />
        </div>
      </div>
      {/* outlet end */}
      {/* Campaings */}
      <div className="container">
        <div className="section section-products-featured sc-mt">
        <header className="section-products-featured__header">
          <h3>Campaings</h3>
          <a href="/view-more/campaings" className="btn btn--rounded btn--border">view more</a>
        </header>
        <Campaings />
        </div>
      </div>
      {/* Campaings end */}
      <CustomOrder />
      {/* custom order end */}
      <Discount />
      <Homemade />
      <Wholesale />
      {/* banner start */}
      <SaveBanner />
      <PromoBanner />
      {/* banner end */}
      <InfoSections />
      <Subscribe />
      <Footer />
    </Layout>
  )
}


export default IndexPage