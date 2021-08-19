import { useSelector, useDispatch  } from 'react-redux';
import CheckoutStatus from '../../checkout-status';
import Item from './pop-item';
import {useState,useEffect} from 'react';
import { map } from 'lodash';

import AppUrl from '../../../pages/AppUrl.js';


const ShoppingCart = () => {
  const { cartItems } = useSelector(state => state.cart);

  const priceTotal = useSelector(state => {
    const cartItems = state.cart.cartItems;
    let totalPrice = 0;
    if(cartItems.length > 0) {
      cartItems.map(item => totalPrice += item.price * item.count);
    }

    return Math.round(totalPrice);
  })
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(removeProduct(
      { 
        id: id,
        color: color,
        size: size
      }
    ))
  }

  const setProductCount = (count) => {
    if(count <= 0) {
      return false;
    }

    dispatch(setCount(
      { 
        id: id,
        color: color,
        size: size,
        count: count,
      }
    ))
  }

  const cartFromLocalStorage = typeof window !=='undefined' ? JSON.parse(localStorage.getItem('p_details') || "[]") : [];

  const [p_details1,setPDetails1] = useState(cartFromLocalStorage);

//let p_details1 = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('p_details'));

useEffect(()=>{
  setPDetails1(p_details1);
},[]);
//console.log(p_details1);
let t_price = 0;

//p_details1.map((item,ind) => (t_price=item.p_price*item.p_count));

  return (
     <div className="Cart-popup">
       <ul className="cart-list">
       {p_details1 !=='' &&
            <table>
              <tbody>
                {p_details1.map((item,ind) => (
                  //t_price = total_price+item.p_price;
                  <>
                 <Item 
                    key={ind}
                    id={item.p_id}
                    thumb={AppUrl.base_url+'storage/app/'+item.p_image}
                    name={item.p_title}
                    price={item.p_price}
                    count={item.p_count}
                    index={ind}
                  />
                  <p style={{display:'none'}}>{t_price=t_price+item.p_price*item.p_count}</p>
                 
                  </>
                ))}
              </tbody>
            </table> 
          } 
          
          {p_details1 === '' && 
            <p>Nothing in the cart</p>
          }
       </ul>
       <div className="cart-popup-footer-wrap">
         <ul className="cart-popup-footer">
           <li>
             <p>Subtotal:</p>
           </li>
           <li>
             <p>BDT {t_price}</p>
           </li>
         </ul>
         <ul className="cart-popup-footer">
           <li>
             <a href="/cart">View Cart</a>
           </li>
           <li>
             {
               typeof window !=='undefined' ?
               localStorage.getItem("user-info") ?
               <a href="/cart/checkout">Checkout</a>
               :
               <a href="/login">Checkout</a>
               :
               null
             }
             
           </li>
         </ul>
       </div>
     </div>
    
  )
};

  
export default ShoppingCart