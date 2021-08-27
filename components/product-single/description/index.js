import Location from "../../../assets/icons/location";
import {useRouter} from 'next/router';
import { useState,useEffect } from "react";
import {AppUrl} from '../../../pages/AppUrl.js';

const Description = ({ show }) => {
  const style = {
    display: show ? "block" : "none",
  };

  const router = useRouter();

  var path = router.query.pid;

  const [data1,setData1] = useState([]);
  useEffect(async ()=>{

    let result1 = await fetch(AppUrl.base_url+"singleproduct/"+path,{

      method:'POST',
      headers: {
        "Content-Type": 'application/json',
        "Accept" : 'application/json'
      }
    });
    result1 = await result1.json();
    setData1(result1);
  },[]);

  let description = '';
  let p_name = '';
  let p_address = '';
  let p_image = '';

  data1.map((item)=>
   description = item.des);
   data1.map((item)=>
   p_name = item.p_name);
   data1.map((item)=>
   p_address = item.p_address);
   data1.map((item)=>
   p_image = item.p_image);
   

  return (
    <section style={style} className="product-single__description">
      <div className="producer-info">
        <div className="producer-img">
        <h3>producer Details</h3>
          <img
            src={AppUrl.base_url+'storage/app/'+p_image}
            alt="producer image"
          />
        </div>
        <div className="producer-content">
                <h2><span><i className="icon-avatar"></i>Name: </span>{p_name}</h2>
                {/* <h2><span><Location />City : </span>Dhaka</h2> */}
                <h2><span><Location />Address: </span>{p_address}</h2>
        </div>
        <div className="product-description-block">
          <i className="icon-cart"></i>
          <h4>Details and product description</h4>
          <p style={{textAlign:'center',whiteSpace:'pre-line'}}>
            {description}
          </p>
        </div>
      </div>
      <div className="pro-description">
        {/* <div className="product-description-block">
          <i className="icon-cart"></i>
          <h4>Details and product description</h4>
          <p>
            White Summer Vibes T-shirt in the uiKit line with a colorful print.{" "}
            <br></br>Made of jersey cotton. T-shirt fits perfectly with jeans,
            pants or shorts.
          </p>
        </div> */}
        {/* <div className="product-description-block">
          <i className="icon-cart"></i>
          <h4>Details and product description</h4>
          <p>
            White Summer Vibes T-shirt in the uiKit line with a colorful print.{" "}
            <br></br>Made of jersey cotton. T-shirt fits perfectly with jeans,
            pants or shorts.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Description;
