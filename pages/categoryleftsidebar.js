import React, {useState,useEffect} from 'react';
import {AppUrl} from './AppUrl.js';
import Link from 'next/link';

const categoryleftsidebar = () => {

    const [data,setData] = useState([]);
  useEffect(async ()=>{

    let result = await fetch(AppUrl.base_url+"all/categories",{

      method:'POST',
      headers: {
        "Content-Type": 'application/json',
        "Accept" : 'application/json'
      }
    });
    result = await result.json();
    setData(result);
  },[]);

    return (
        <>
        <div className="Category-card">
            <ul className="cat-list">
                {/* <li className="cat-item Man-col"><a href="#" className="cat-link">Men's Clothings <span><Angle /></span></a>
                  <ul className="Sub-Cat">
                      <li><a href="#">Shirts</a></li>
                      <li><a href="#">Women Clothing</a></li>
                      <li><a href="#">Consumer Eletronics</a></li>
                      <li><a href="#">Shirts Consumer Eletronics</a></li>
                  </ul>
                </li>
                <li className="cat-item Man-col"><a href="#" className="cat-link">Women Clothing <span><Angle /></span></a>
                  <ul className="Sub-Cat">
                      <li><a href="#">Shirts</a></li>
                      <li><a href="#">Women Clothing</a></li>
                      <li><a href="#">Consumer Eletronics</a></li>
                      <li><a href="#">Shirts Consumer Eletronics</a></li>
                  </ul>
                </li> */}
                {
                  data.map((item)=>
                  <li className="cat-item">
                    <Link href={`/view-more/${item.id}`}>
                    <a href="javascript:void()" className="cat-link">{item.cat_name}</a>
                    </Link>
                    </li>
                  )
                }
                <li className="cat-item"><a href="/view-more/categories" className="cat-link">More Categories</a></li>
                
                {/* <li className="cat-item"><a href="#" className="cat-link">Consumer Eletronics</a></li>
                <li className="cat-item"><a href="#" className="cat-link">jewellery & watches</a></li>
                <li className="cat-item"><a href="#" className="cat-link">Home , Garden & furniture</a></li>
                <li className="cat-item"><a href="#" className="cat-link">bags & shoes</a></li>
                <li className="cat-item"><a href="#" className="cat-link">toys, kids & baby</a></li>
                <li className="cat-item"><a href="#" className="cat-link">Hair, Health & beauty</a></li>
                <li className="cat-item"><a href="#" className="cat-link">automotive motorcycle</a></li>
                <li className="cat-item"><a href="#" className="cat-link">automotive motorcycle</a></li>
                <li className="cat-item"><a href="#" className="cat-link">more categories</a></li> */}
            </ul>
        </div>
        </>
    )
}

export default categoryleftsidebar;