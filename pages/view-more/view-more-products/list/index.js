import useSwr from 'swr';
import ProductItem from '../../../../components/product-item';
import ProductsLoading from './loading';
import { useRouter } from 'next/router';
import {useEffect, useState} from 'react';
import {AppUrl} from '../../../../pages/AppUrl.js';

const ProductsContent = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSwr('/api/products', fetcher);

  // var url = window.location.href;
  // var lastPart = url.split("/").pop();

  const router = useRouter();

  var path = router.pathname.split("/").pop();

  if(path=='new-arrivals-products'){
    path = 'new-arrivals';
  }else if(path=='featured-products'){

    path='featured-product';
  }else if(path=='campaings'){

    path='campaigns-product';
  }else if(path=='discount-products'){

    path='discount-product';
  }else if(path=='wholesale'){

    path='wholesale-zone';
  }else{

    path=path;
  }

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
              category={item.cat_name}
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