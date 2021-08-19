import React, { useEffect, useState } from "react";
import AppUrl from '../../../AppUrl.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useRouter} from 'next/router';

const IslamiBank = () => {

  const [data1, setData1] = useState([]);

  // const [payment_type, setPaymentType] = useState('');
  // const [payment_account, setPaymentAccount] = useState('');
  const [from_account, setFromAccount] = useState('');

  const router = useRouter();

  const cartFromLocalStorage = typeof window !=='undefined' ? JSON.parse(localStorage.getItem('p_details') || "") : "";
  const [p_details2, setPDetails2] = useState(cartFromLocalStorage);

  useEffect(()=>{
    setPDetails2(p_details2);

    //count total object in a a json array
    //console.log(Object.keys(p_details1).length);
  },[]);

  var countObj = Object.keys(p_details2).length;

  var u_id = typeof window!=='undefined' ? localStorage.getItem('u_id') : '';


  async function confirmPayment(){

      const formData = new FormData();

      formData.append('countObj',countObj);

      formData.append('u_id',u_id);

      p_details2.map((item,index)=>{

        formData.append('product_id'+index,item.p_id);
        formData.append('spm_id'+index,item.spm_location);
        formData.append('product_price'+index,item.p_price);
        formData.append('product_qtn'+index,item.p_count);
        formData.append('invoice_no'+index,item.invoice_no);
        formData.append('date'+index,item.delivery_time);

        //console.log(index);
      });

      // formData.append('co_phone',co_phone);
      // formData.append('co_image',co_image);
      // formData.append('co_user_phone',co_user_phone);

      let result = await fetch(AppUrl.base_url+"placeOrder",{
        method: 'POST',
        body: formData
      });
      result = await result.json();

      //console.log(result);

      toast.success('Order Placed Successfully');

      localStorage.removeItem('p_details');
      localStorage.removeItem('trx_id');
      localStorage.removeItem('total_price');
      localStorage.removeItem('invoice_no');
      localStorage.removeItem('bank_name');
      localStorage.removeItem('bank_id');
      localStorage.removeItem('promocode');
      localStorage.removeItem('from_account');

      setTimeout(function(){
        router.push('/');
      },1000);
    


  }

  return (
    <>
    <ToastContainer/>
    <div className="show-content">
      <form>
        <h3> Order invoice Number {typeof window!=='undefined' ? localStorage.getItem('invoice_no') : ''} </h3>
        <h3> Order Total Amount ৳{typeof window!=='undefined' ? (localStorage.getItem('total_price')-20) : ''} + Delivery charge </h3>
        <p>
          You can pay in cash to our delivery man when you receive the goods at your doorstep.
        </p>

    

        <div class="form-group row">
          <div class="col-sm-8">
          <input
              type="hidden"
              required=""
              placeholder=""
              class="form-control"
              id="inputEmail10"
              name="countObj"
              value={countObj}
              
            />

            <input
              type="hidden"
              required=""
              placeholder=""
              class="form-control"
              id="inputEmail11"
              name="u_id"
              value={u_id}
              
            />

          {
            p_details2.map((item,index)=>
            <>
              <input
              type="hidden"
              required=""
              placeholder=""
              class="form-control"
              id="inputEmail4"
              name="p_id"
              value={item.p_id}
              
            />

            <input
              type="hidden"
              required=""
              placeholder=""
              class="form-control"
              id="inputEmail5"
              name="spm_location"
              value={item.spm_location}
              
            />

            <input
              type="hidden"
              required=""
              placeholder=""
              class="form-control"
              id="inputEmail6"
              name="p_price"
              value={item.p_price}
              
            />

            <input
              type="hidden"
              required=""
              placeholder=""
              class="form-control"
              id="inputEmail7"
              name="p_count"
              value={item.p_count}
              
            />

            <input
              type="hidden"
              required=""
              placeholder=""
              class="form-control"
              id="inputEmail8"
              name="invoice_no"
              value={item.invoice_no}
              
            />


            <input
              type="hidden"
              required=""
              placeholder=""
              class="form-control"
              id="inputEmail9"
              name="delivery_time"
              value={item.delivery_time}
              
            />

            </>
            )
          }
          
          </div>
        </div>


        <button type="button" class="checkout_confirm" onClick={confirmPayment}>Confirm Order</button>
      </form>
    </div>
    </>
  );
};

export default IslamiBank