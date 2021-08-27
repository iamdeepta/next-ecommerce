import Layout from '../../layouts/Main';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import CheckoutStatus from '../../components/checkout-status';
import CheckoutItems from '../../components/checkout/items';
import { useState, useEffect } from 'react';
import {AppUrl} from '../AppUrl.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

const CheckoutPage = () => {

  const [data,setData] = useState([]);
  const [data1,setData1] = useState([]);

  const router = useRouter();
  const cartFromLocalStorage = typeof window !=='undefined' ? JSON.parse(localStorage.getItem('p_details') || "[]") : [];

  const [p_details1,setPDetails1] = useState(cartFromLocalStorage);

  useEffect(()=>{
    setPDetails1(p_details1);
  },[]);


  var localstorage = typeof window !=='undefined' ? localStorage.getItem("user-info") : null;
  var promocode = typeof window !=='undefined' ? localStorage.getItem("promocode") : "";
  if(localstorage){
  localstorage = localstorage.replace('"','');
  localstorage = localstorage.replace('"','');
  }

  useEffect(()=>{

    userPromoCode();
    singleUser();
    spmLocation();
    
  },[]);

  async function userPromoCode(){
    let result = await fetch(AppUrl.base_url+"userPromoCode/"+localstorage,{

      method:'POST',
      headers: {
        "Content-Type": 'application/json',
        "Accept" : 'application/json'
      }
    });
    result = await result.json();
    setData(result);
  }

  async function singleUser(){
    let result1 = await fetch(AppUrl.base_url+"singleUser/"+localstorage,{

      method:'POST',
      headers: {
        "Content-Type": 'application/json',
        "Accept" : 'application/json'
      }
    });
    result1 = await result1.json();
    setData1(result1);
  }

  async function spmLocation(){
    let result2 = await fetch(AppUrl.base_url+"all/location",{

      method:'POST',
      headers: {
        "Content-Type": 'application/json',
        "Accept" : 'application/json'
      }
    });
    result2 = await result2.json();
    setSPMLocation(result2);
  }

  let name = '';
  let address = '';
  let u_id = '';
  data1.map((item)=>{
    name = item.name;
    address = item.address;
    u_id = item.id;
  })

  let rank_code = '';

  data.map((item)=>rank_code = item.rank_code);


  let tot_price = 0;
  let shipping_price = 20;
  let discount = 0;
  if(promocode===rank_code){
  discount = 0.05;
  }else{
    discount = 0;
  }

  p_details1.map((item)=>tot_price+=item.p_price*item.p_count);

  discount = tot_price*discount;

  tot_price = tot_price-discount;
  

  const [full_name, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [full_address, setFullAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [spm_location1,setSPMLocation1] = useState('');
  const [delivery_type, setDeliveryType] = useState('');
  const [delivery_time, setDeliveryTime] = useState('');
  const [notes, setNotes] = useState('');

  const [spm_location,setSPMLocation] = useState([]);

  // const cartFromLocalStorage = typeof window !=='undefined' ? JSON.parse(localStorage.getItem('p_details') || "[]") : [];

  // const [p_details1,setPDetails1] = useState(cartFromLocalStorage);

  // useEffect(()=>{
  //   setPDetails1(p_details1);
  // },[]);

  function confirmCheckOut(){

    //let item ={name, localstorage, city, country, postalCode, spm_location1, delivery_type, delivery_time, notes};
  
    if(name!='' && localstorage!='' && city!='' && postalCode!='' && spm_location1!='' && delivery_type!='' && delivery_time!='' && notes!=''){
      p_details1.forEach(function (element) {
        element.name = name;
        element.phone = localstorage;
        element.city = city;
        element.postal_code = postalCode;
        element.spm_location = spm_location1;
        element.delivery_type = delivery_type;
        element.delivery_time = delivery_time;
        element.notes = notes;
      });

    localStorage.setItem('total_price',(tot_price+shipping_price));

    localStorage.setItem('p_details',JSON.stringify(p_details1));

    localStorage.setItem('u_id',u_id);

    router.push('/cart/checkout/payment');
    //console.log(p_details1);
    }else{
  
        toast.error("Please fill up all the fields");
      }
  //   if(name!='' && localstorage!='' && city!='' && postalCode!='' && spm_location1!='' && delivery_type!='' && delivery_time!='' && notes!=''){
  //   let result3 = await fetch(AppUrl.base_url+"register",{
  //     method: 'POST',
  //     body: JSON.stringify(item),
  //     headers: {
  //       "Content-Type": 'application/json',
  //       "Accept" : 'application/json'
  //     }
  //   });
  //   result3 = await result3.json();
   
  //   if(result3.success){
  //     router.push('/cart/checkout/payment');
  
  //   }
  //   toast.error(result3.error);
  // }else{
  
  //   toast.error("Please fill up all the fields");
  // }
  
  }

  // let FlatShipingFee= 20;
  // let codShipingFee= 30;
  // const priceTotal = useSelector(state => {
  //   const cartItems = state.cart.cartItems;
  //   let totalPrice = 0;
  //   if(cartItems.length > 0) {
  //     cartItems.map(item => totalPrice += item.price * item.count);
  //   }

  //   return totalPrice;
  // })


  return (
    <Layout>
      <ToastContainer/>
      <section className="cart">
        <div className="container">
          <div className="cart__intro">
            <h3 className="cart__title">Shipping and Payment</h3>
            <CheckoutStatus step="checkout" />
          </div>

          <div className="checkout-content">
            <div className="checkout__col-6">
              {/* <div className="checkout__btns">
                <Link href="/login">
                  <button className="btn btn--rounded btn--yellow">Log in</button>
                </Link>
                <Link href="/register">
                  <button className="btn btn--rounded btn--border">Sign up</button>
                </Link>
              </div> */}

              <div className="block">
                <h3 className="block__title">Shipping information</h3>
                <form className="form">
                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <input className="form__input form__input--sm" type="text" value={name} placeholder="Reciver Full Name" required/>
                    </div>
                    <div className="form__col">
                      <input className="form__input form__input--sm" type="text" placeholder="Phone number" value={localstorage} required/>
                    </div>
                  </div>
                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                    <input className="form__input form__input--sm" type="text" value={address} placeholder="Address" required/>
                    </div>

                    <div className="form__col">
                      <input className="form__input form__input--sm" onChange={(e)=>setCity(e.target.value)} type="text" placeholder="City" required/>
                    </div>
                  </div>
                                  
                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <div className="select-wrapper select-form">
                        <select onChange={(e)=>setCountry(e.target.value)}>
                          <option>Country</option>
                          <option value="Bangladesh">Bangladesh</option>
                        </select>
                      </div>
                    </div>

                    <div className="form__col">
                      <input className="form__input form__input--sm" onChange={(e)=>setPostalCode(e.target.value)} type="text" placeholder="Postal code / ZIP" required/>
                    </div>
                  </div>

                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <div className="select-wrapper select-form">
                        <select onChange={(e)=>setDeliveryType(e.target.value)}>
                          <option>Delivery Type</option>
                          <option value="1st Time">1st Time</option>
                          <option value="Repeated">Repeted</option>
                        </select>
                      </div>
                    </div>

                    <div className="form__col">
                      <div className="select-wrapper select-form">
                        <select onChange={(e)=>setSPMLocation1(e.target.value)}>
                          <option>Select our service point location</option>
                          {spm_location.map((item)=>
                          <>
                          <option value={item.spm_id}>{item.address}</option>
                          </>
                          )
                        
                          }
                        
                        </select>
                      </div>
                    </div>
                  </div>
                  <label className="pb-10">Delivery Schedule </label>
                  <div className="form__input-row form__input-row--one">
                    <div className="form__col">
                    <input className="form__input form__input--sm" onChange={(e)=>setDeliveryTime(e.target.value)} type="Date" placeholder="" required/>
                    </div>
                  </div>
                  <div className="form__input-row form__input-row--one">
                    <div className="form__col">
                    <input className="form__input form__input--sm" onChange={(e)=>setNotes(e.target.value)} type="text" placeholder="Notes" required/>
                    </div>
                  </div>
                  <label className="pb-10">Give recommendor Buy & Earn code :</label>
                  <div className="form__input-row form__input-row--one">
                    <div className="form__col">
                    <input className="form__input form__input--sm" type="text" placeholder="if you have this code must be applied"  value={promocode} required/>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            
            <div className="checkout__col-4">          
              <div className="block">
                <h3 className="block__title">Delivery method</h3>
                <ul className="round-options round-options--two">
                  <li className="round-item round-item--bg">
                    <img src="/images/logos/inpost.svg" alt="Paypal" />
                    <p>BDT {shipping_price}</p>
                  </li>
                  <li className="round-item round-item--bg">
                    <img src="/images/logos/dpd.svg" alt="Paypal" />
                    <p>BDT {shipping_price}</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="checkout__col-2">
              <div className="block">
                <h3 className="block__title">Your cart</h3>
                <CheckoutItems />
                <div className="checkout-total br-bm">
                  <p>Sub Total:</p>
                  <h3>BDT {tot_price}</h3>
                </div>
                <div className="checkout-total br-bm">
                  <p>Shiping Fee</p>
                  <h3>BDT {shipping_price}</h3>
                </div>
                <div className="checkout-total">
                  <p>Total cost</p>
                  <h3>BDT {tot_price+shipping_price}</h3>
                </div>
              </div>
            </div>
          </div>
          
          <div className="cart-actions cart-actions--checkout">
            <a href="/cart" className="cart__btn-back"><i className="icon-left"></i> Back</a>
            <div className="cart-actions__items-wrapper">
            <Link href="/">
              <button type="button" className="btn btn--rounded btn--border">Continue shopping</button>
              </Link>
              {/* <Link href="/cart/checkout/payment"> */}
                <button type="button" className="btn btn--rounded btn--yellow" onClick={confirmCheckOut}>Proceed to payment</button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
};

  
export default CheckoutPage