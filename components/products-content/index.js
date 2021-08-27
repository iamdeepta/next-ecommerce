import { useState } from 'react';
import List from './list';

import { useEffect } from "react";
import {AppUrl} from '../../pages/AppUrl.js';

import {useRouter} from 'next/router';

const ProductsContent = () => {
  const [orderProductsOpen, setOrderProductsOpen] = useState(false);

  const router = useRouter();

  var path = router.query.cid;
  //console.log(path);

  //console.log(path);
  var cat_name = "";

  const [data1,setData1] = useState([]);
  useEffect(async ()=>{

    let result1 = await fetch(AppUrl.base_url+"categorywiseproduct/"+path,{

      method:'POST',
      headers: {
        "Content-Type": 'application/json',
        "Accept" : 'application/json'
      }
    });
    result1 = await result1.json();
    setData1(result1);
  },[]);

  data1.map((item)=>
   cat_name = item.cat_name);

  
  return (
    <section className="products-content">
      <div className="products-content__intro">
        
        <h2>{cat_name} <span></span></h2>
        
        
        <button type="button" onClick={() => setOrderProductsOpen(!orderProductsOpen)} className="products-filter-btn"><i className="icon-filters"></i></button>
        <form className={`products-content__filter ${orderProductsOpen ? 'products-order-open' : ''}`}>
          <div className="products__filter__select">
            <h4>Show products: </h4>
            <div className="select-wrapper">
              <select>
                <option>Popular</option>
              </select>
            </div>
          </div>
          <div className="products__filter__select">
            <h4>Sort by: </h4>
            <div className="select-wrapper">
              <select>
                <option>Popular</option>
              </select>
            </div>
          </div>
        </form>
      </div>

      <List />
    </section>
  );
};
  
export default ProductsContent
  