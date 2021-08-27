import useSwr from 'swr';
import ProductItem from './../../product-item';
import ProductsLoading from './loading';

import { useState,useEffect } from "react";
import {AppUrl} from '../../../pages/AppUrl.js';

import {useRouter} from 'next/router';

const ProductsContent = () => {

  const router = useRouter();

  var path = router.query.cid;
  //console.log(path);

  //console.log(path);

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



  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSwr('/api/products', fetcher);

  if (error) return <div>Failed to load users</div>;
  return (
    <>
      {!data1 && 
        <ProductsLoading />
      }

      {data1 &&
        <section className="products-list">
          {data1.map(item => (
            <ProductItem 
              // discount={item.discount}
              //category={item.cat_name}
              price={item.price}
              currentPrice={item.price}
              key={item.id}
              id={item.id} 
              productImage={AppUrl.base_url+"storage/app/"+item.img1} 
              name={item.title}
            />
          ))}
        </section>
      }
    </>
  );
};
  
export default ProductsContent