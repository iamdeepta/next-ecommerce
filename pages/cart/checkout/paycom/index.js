import { useState, useEffect } from 'react';
import AppUrl from '../../../AppUrl.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';


const IslamiBank = () => {


  return (
    <div className="show-content">
      <form>
        <h3> Order invoice Number {typeof window!=='undefined' ? localStorage.getItem('invoice_no') : ''} </h3>
        <h3> Order Total Amount ৳{typeof window!=='undefined' ? (localStorage.getItem('total_price')-20) : ''} + Delivery charge </h3>
        <p>
          You can pay through Islami Bank
        </p>
        <div class="form-group row">
          <div class="col-sm-8">
          <label style={{float:'left',marginBottom:10,color:'black'}}>Payment Type:</label>
            <input
              type="text"
              readonly=""
              class="form-control"
              id="inputEmail3"
              value="Islami Bank"
            />
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-8">
          <label style={{float:'left',marginBottom:10,color:'black'}}>Payment Account:</label>
            <input
              type="text"
              readonly=""
              class="form-control"
              id="inputEmail3"
              value="148963257"
            />
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-8">
          <label style={{float:'left',marginBottom:10,color:'black'}}>From Account:</label>
            <input
              type="text"
              required=""
              class="form-control"
              id="inputEmail3"
              placeholder="From Account"
            />
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-8">
          <label style={{float:'left',marginBottom:10,color:'black'}}>Trx ID:</label>
            <input
              type="text"
              required=""
              placeholder="Trx ID"
              class="form-control"
              id="inputEmail3"
            />
          </div>
        </div>
        <button class="checkout_confirm">Confirm Order</button>
      </form>
    </div>
  );
};

export default IslamiBank