import Link from "next/link";

import { useState,useEffect } from "react";
import AppUrl from '../../pages/AppUrl.js';

export default function App() {

  const [data,setData] = useState([]);
  useEffect(async ()=>{

    let result = await fetch(AppUrl.base_url+"category/outletproduct",{

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
    <div className="brandslider container">
      <ul className="brand-list">
        {
          data.map((item)=>
          <>
          <li>
          <div className="Cbo-item">
            <a href="#" className="brand-link">
              <img src={AppUrl.base_url+"storage/app/"+item.img1} />
              <h2>{item.cat_name}</h2>
            </a>
          </div>
          <div className="hover-details">
            <Link href="#">
              <a>Let's Go <i className="icon-right"></i></a>
            </Link>
          </div>
        </li>
        </>
          )
        }
        
        {/* <li>
          <div className="Cbo-item">
            <a href="#" className="brand-link">
              <img src="/images/outlet/rm.jpg" />
              <h2>RM Enterpise</h2>
            </a>
          </div>
          <div className="hover-details">
            <Link href="#">
              <a>Let's Go <i className="icon-right"></i></a>
            </Link>
          </div>
        </li>
        <li>
          <div className="Cbo-item">
            <a href="#" className="brand-link">
              <img src="/images/outlet/fesh.jpg" />
              <h2>Samsung</h2>
            </a>
          </div>
          <div className="hover-details">
            <Link href="#">
              <a>Let's Go <i className="icon-right"></i></a>
            </Link>
          </div>
        </li>
        <li>
          <div className="Cbo-item">
            <a href="#" className="brand-link">
              <img src="/images/outlet/sn.jpg" />
              <h2>Sn</h2>
            </a>
          </div>
          <div className="hover-details">
            <Link href="#">
              <a>Let's Go <i className="icon-right"></i></a>
            </Link>
          </div>
        </li>
        <li>
          <div className="Cbo-item">
            <a href="#" className="brand-link">
              <img src="/images/outlet/fesh.jpg" />
              <h2>Uniliver</h2>
            </a>
          </div>
          <div className="hover-details">
            <Link href="#">
              <a>Let's Go <i className="icon-right"></i></a>
            </Link>
          </div>
        </li>
        <li>
          <div className="Cbo-item">
            <a href="#" className="brand-link">
              <img src="/images/brand/lifeboy.jpg" />
              <h2>lifeboy</h2>
            </a>
          </div>
          <div className="hover-details">
            <Link href="#">
              <a>Let's Go <i className="icon-right"></i></a>
            </Link>
          </div>
        </li>
        <li>
          <div className="Cbo-item">
            <a href="#" className="brand-link">
              <img src="/images/outlet/rm.jpg" />
              <h2>Rm</h2>
            </a>
          </div>
          <div className="hover-details">
            <Link href="#">
              <a>Let's Go <i className="icon-right"></i></a>
            </Link>
          </div>
        </li>
        <li>
          <div className="Cbo-item">
            <a href="#" className="brand-link">
              <img src="/images/brand/samsung.jpg" />
              <h2>Samsung</h2>
            </a>
          </div>
          <div className="hover-details">
            <Link href="#">
              <a>Let's Go <i className="icon-right"></i></a>
            </Link>
          </div>
        </li>
        <li>
          <div className="Cbo-item">
            <a href="#" className="brand-link">
              <img src="/images/brand/sn.jpg" />
              <h2>Sn</h2>
            </a>
          </div>
          <div className="hover-details">
            <Link href="#">
              <a>Let's Go <i className="icon-right"></i></a>
            </Link>
          </div>
        </li>
        <li>
          <div className="Cbo-item">
            <a href="#" className="brand-link">
              <img src="/images/brand/unicef.jpg" />
              <h2>Uniliver</h2>
            </a>
          </div>
          <div className="hover-details">
            <Link href="#">
              <a>Let's Go <i className="icon-right"></i></a>
            </Link>
          </div>
        </li> */}
      </ul>
    </div>
  );
}
