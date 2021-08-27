import ProductItemLoading from '../../../../../components/product-item/loading';
import { useRouter } from 'next/router';
import {useEffect, useState} from 'react';
import {AppUrl} from '../../../../../pages/AppUrl.js';

const ProductsLoading = () => {

  const router = useRouter();

  var path = router.pathname.split("/").pop();

  //console.log(path);

  const [data1,setData1] = useState([]);
  useEffect(async ()=>{

    let result = await fetch(AppUrl.base_url+"viewmorecategory/"+path,{

      method:'POST',
      headers: {
        "Content-Type": 'application/json',
        "Accept" : 'application/json'
      }
    });
    result = await result.json();
    setData1(result);
  },[]);

  
  return (
    <section className="products-list">
      {
        data1.map((item)=>
        <ProductItemLoading />
        )
      }
      
      {/* <ProductItemLoading />
      <ProductItemLoading />
      <ProductItemLoading />
      <ProductItemLoading />
      <ProductItemLoading /> */}
    </section>
  );
};
  
export default ProductsLoading