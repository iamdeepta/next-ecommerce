import { useSelector, useDispatch  } from 'react-redux';
import CheckoutStatus from '../../components/checkout-status';
import Item from './item';
import AppUrl from '../../pages/AppUrl.js';
import { useState,useEffect } from 'react';

const ShoppingCart = () => {
  const { cartItems } = useSelector(state => state.cart);

  // const priceTotal = useSelector(state => {
  //   const cartItems = state.cart.cartItems;
  //   let totalPrice = 0;
  //   if(cartItems.length > 0) {
  //     cartItems.map(item => totalPrice += item.price * item.count);
  //   }

  //   return Math.round(totalPrice);
  // })
  const dispatch = useDispatch();

  // const removeFromCart = () => {
  //   dispatch(removeProduct(
  //     { 
  //       id: id,
  //       color: color,
  //       size: size
  //     }
  //   ))
  // }

  // const setProductCount = (count) => {
  //   if(count <= 0) {
  //     return false;
  //   }

  //   dispatch(setCount(
  //     { 
  //       id: id,
  //       color: color,
  //       size: size,
  //       count: count,
  //     }
  //   ))
  // }
  const [promocode,setPromoCode] = useState("");

  const cartFromLocalStorage = typeof window !=='undefined' ? JSON.parse(localStorage.getItem('p_details') || "[]") : [];

  const [p_details1,setPDetails1] = useState(cartFromLocalStorage);

  useEffect(()=>{
    setPDetails1(p_details1);
  },[]);
  //console.log(p_details1);
  let t_price = 0;

  // useEffect(()=>{
  //   setTotalPrice(total_price);
  // },[p_details1]);

  function setPromoCodeVal(e){

    setPromoCode(e.target.value);
    localStorage.setItem('promocode',e.target.value);
  }


  return (
    <section className="cart">
      <div className="container">
        <div className="cart__intro">
          <h3 className="cart__title">Shopping Cart</h3>
          {/* <CheckoutStatus step="cart" /> */}
        </div>

        <div className="cart-list">
          {p_details1.length > 0 &&
            <table>
              <tbody>
                <tr>
                  <th style={{textAlign: 'left'}}>Product</th>
                  <th></th>
                  <th></th>
                  <th>Ammount</th>
                  <th>Price</th>
                  <th></th>
                </tr>

                {p_details1.map((item,ind)=> (
                  <>
                  <Item 
                  key={ind}
                  id={item.p_id}
                  thumb={AppUrl.base_url+'storage/app/'+item.p_image}
                  name={item.p_title}
                  price={item.p_price}
                  count={item.p_count}
                  index={ind}
                  totalPrice = {t_price}
                  />

                  <p style={{display:'none'}}>{t_price=t_price+item.p_price*item.p_count}</p>
                  </>
                ))}
              </tbody>
            </table> 
          } 
          
          {p_details1.length === 0 && 
            <p>Nothing in the cart</p>
          }
        </div>
      
        <div className="cart-actions">
          <a href="/products" className="cart__btn-back"><i className="icon-left"></i> Continue Shopping</a>
          <input type="text" placeholder="Promo Code" className="cart__promo-code" onChange={setPromoCodeVal} value={promocode} />

          <div className="cart-actions__items-wrapper">
            <p className="cart-actions__total">Total cost <strong>BDT {t_price}</strong></p>
            {
              typeof window !== 'undefined' ?
              localStorage.getItem("user-info") ?
              <a href="/cart/checkout" className="btn btn--rounded btn--yellow">Checkout</a>
              :
              <a href="/login" className="btn btn--rounded btn--yellow">Checkout</a>
              :
              null
            }
            
          </div>
        </div>
      </div>
    </section>
  )
};

  
export default ShoppingCart