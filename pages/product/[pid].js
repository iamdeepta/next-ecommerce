import { useState } from 'react';
import Footer from '../../components/footer';
import Layout from '../../layouts/Main';
import Breadcrumb from '../../components/breadcrumb';
import Gallery from '../../components/product-single/gallery';
import Content from '../../components/product-single/content';
import Description from '../../components/product-single/description';
import Reviews from '../../components/product-single/reviews';
import { server } from '../../utils/server'; 
import {AppUrl} from '../../pages/AppUrl.js';

export async function getServerSideProps({ query }) {

  const pid = query.pid;
  // const res = await fetch(`${server}/api/product/${pid}`);
  // const product = await res.json();

  //async function singleProduct(){

    let product = await fetch(AppUrl.base_url+"singleproduct/"+pid,{

      method:'POST',
      headers: {
        "Content-Type": 'application/json',
        "Accept" : 'application/json'
      }
    });
    product = await product.json();
    //setData1(product);
  //}

  return {
    props: {
      product,
    },
  }
}

const Product = ({ product }) => {
  const [showBlock, setShowBlock] = useState('description');

  return (
    <Layout>
      <Breadcrumb currentPage={product.title} />

      <section className="product-single">
        <div className="container">
          <div className="product-single__content">
            <Gallery images={product.img1} />
            <Content product={product} />
          </div>

          <div className="product-single__info">
            <div className="product-single__info-btns">
              <button type="button" onClick={() => setShowBlock('description')} className={`btn btn--rounded ${showBlock === 'description' ? 'btn--active' : ''}`}>Description</button>
              <button type="button" onClick={() => setShowBlock('reviews')} className={`btn btn--rounded ${showBlock === 'reviews' ? 'btn--active' : ''}`}>Reviews (2)</button>
            </div>

            <Description product={product} show={showBlock === 'description'} />
            <Reviews product={product} show={showBlock === 'reviews'} />
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  );
}

export default Product
