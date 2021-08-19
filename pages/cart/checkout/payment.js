import Layout from "../../../layouts/Main";
import React, { useEffect, useState } from "react";
import IslamiBank from "./paycom";
import Bkash from "./paybkash";
import Cod from "./paycod";
import AppUrl from '../../AppUrl.js';


const Payment = () => {

  let invoice_no = Math.floor((Math.random() * 99999) + 1);

  useEffect(()=>{
    typeof window!=='undefined' ? localStorage.setItem('invoice_no',invoice_no) : '';
    //typeof window!=='undefined' ? localStorage.setItem('bank_id',bankAccount) : '';
    allpaymenttype();
  },[]);

  const [data1, setData1] = useState([]);

  async function allpaymenttype(){
    let result1 = await fetch(AppUrl.base_url+"all/payment",{

      method:'POST',
      headers: {
        "Content-Type": 'application/json',
        "Accept" : 'application/json'
      }
    });
    result1 = await result1.json();
    setData1(result1);
  }

  const [data, setData] = useState([]);

  //const bankFromLocalStorage = typeof window !=='undefined' ? localStorage.getItem('bank_id') || "" : "";
  const [bankAccount1, setBankAccount1] = useState(100);

  const cartFromLocalStorage = typeof window !=='undefined' ? JSON.parse(localStorage.getItem('p_details') || "") : "";
  const [p_details1, setPDetails1] = useState(cartFromLocalStorage);
  

  useEffect(()=>{
    setBankAccount1(bankAccount1);
    setPDetails1(p_details1);

    p_details1.forEach(function(element){

      element.invoice_no = localStorage.getItem('invoice_no');

      localStorage.setItem('p_details',JSON.stringify(p_details1));
    });
  },[]);

  const [showAll, setShowAll] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showCurrent, setShowCurrent] = useState(false);

  const toggleAll = () => {
    setShowAll((val) => !val);
    setShowCurrent(false);
  };

  const toggleCurrent = () => {
    if (!showCurrent) {
      setShowCurrent(true);
      setShowAll(false);
      return;
    }
  };

  const setCurrent = (index) => {
    setCurrentIdx(index);
    toggleCurrent();
    setBankAccount1(0);
    localStorage.setItem('bank_id',0);
    localStorage.setItem('bank_name','Cash on delivery');

    p_details1.forEach(function(element){

      element.payment_type = 'Cash on delivery';
      element.invoice_no = localStorage.getItem('invoice_no');

      localStorage.setItem('p_details',JSON.stringify(p_details1));
    });
  };

  function setBankAccount(id,bank){

    setBankAccount1(id);
    localStorage.setItem('bank_id',id);
    localStorage.setItem('bank_name',bank);

    p_details1.forEach(function(element){

      element.payment_type = bank;
      element.invoice_no = localStorage.getItem('invoice_no');

      localStorage.setItem('p_details',JSON.stringify(p_details1));
    });
  }

  return (
    <Layout>
      <div className="payment-heading">
        <input type="hidden"></input>
      </div>
      <div className="container">
        <div className="payment-body">
          {
            data1.map((item,index)=>
            <div className="payment-item" onClick={() => setBankAccount(item.id,item.bank)}>
            <img
              src={AppUrl.base_url+'storage/app/'+item.img}
              alt={item.bank}
            />
            <h2>{item.bank}</h2>
          </div>
            )
          }
          {/* <div className="payment-item" onClick={() => setCurrent(0)}>
            <img
              src="https://app.trust-lite.com/storage/app/payment/96ikBnA7YzHixaR9xFUzeIaVUS8RTfhPHdqxb4Rp.jpeg"
              alt="islamibank"
            />
            <h2>Islami Bank</h2>
          </div>
          <div className="payment-item" onClick={() => setCurrent(1)}>
            <img
              src="https://app.trust-lite.com/storage/app/payment/aqBs8ZcQgqwNgOAnxT3FinkaoKUdsr2C0VSIgteB.jpeg"
              alt="Bkash"
            />
            <h2>Bkash</h2>
          </div> */}
          <div className="payment-item" onClick={() => setCurrent(0,'Cash on delivery')}>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUdwTAAAAP98VwAAAAAAABMJBjscFAAAAAEAAA4IBgEAAP97VwAAAP98Vv99VggDAwAAAAIAAAAAAP99WAAAAAAAAP+AWf98VwMAAf97V/98V00lGgAAAP97VplJM5S99/UAAAAcdFJOUwA91qO1/uaY8QddsjL2hefFhnRLEyMXdlTDm/zLXghDAAABR0lEQVRYw+2X227DIAxACenKJU2B3KvR/f9njizpJg2SgmWlqsR5JPKRhY0hhGQymUzmLRFgNoTMQineWciS0fvC9FLKbeFkjEEVwjhCyDiUS1hYgtvlSOHZ8XlOQe0L78l8vURY0xgShFVM47UJwtGLNoz9XxrqaOHNT0dZ7q1dI4W3UQSF/upIY4R1YLsa7j4pSUJJQoTNeiAkklC4/NQ8kBWS8GKtJqTnSyCCsHDCzkVMHVKGncuNl7IjaEUxS01KrAxdmdWPUQksIRGFmcvc4Aj7RvdLBMMRuou/RBW6PrTaMFfrCWkPH68njVfleThws9k2G6+vVdgOJHScA+NraKsI4ayMG7AtfQzYJ8J77ec4SW92Cfo7sU/rG7HfulOugEsqwJ+QVhHQBCHkoj9K+JHOvhD+nDtC2Jyg9PkHOZPJZI7hGzeik7JjDnUkAAAAAElFTkSuQmCC"
              alt="islamibank"
            />
            <h2>Cash on delivery</h2>
          </div>
        </div>
        <div>
          {showAll && data.map((el, i) => <p key={`content-${i}`}>{el}</p>)}
        </div>
        {
        bankAccount1===100 ? 
        '' : (bankAccount1===0 ? <Cod/> : <Bkash bankId={bankAccount1}/>)}
      </div>
    </Layout>
  );
};
export default Payment;
