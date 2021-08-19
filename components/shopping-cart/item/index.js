import { useDispatch } from 'react-redux';
import { removeProduct, setCount } from './../../../store/actions/cartActions';
import {useState,useEffect} from 'react';
import { toast,ToastContainer } from 'react-toastify';
import { useRouter } from 'next/router';

const ShoppingCart = ({ thumb, name, id, color, size, count, price, index, totalPrice }) => {
  const dispatch = useDispatch();

  const [count1,setProductCount] = useState(count);
  

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

  const router = useRouter();

  //const [total_price,setTotalPrice] = useState(totalPrice);

  const cartFromLocalStorage1 = typeof window !=='undefined' ? JSON.parse(localStorage.getItem('p_details') || "[]") : [];

  const [p_details,setPDetails1] = useState(cartFromLocalStorage1);

  useEffect(()=>{
    setPDetails1(p_details);
  },[]);

  useEffect(()=>{
    let obj = p_details.find(f=>f.p_id==id);
    if(obj){
      obj.p_count = count1;
      //console.log(obj);
      localStorage.setItem('p_details',JSON.stringify(p_details));
    }

  },[count1]);

  function removefromCart(index){

    //localStorage.removeItem('p_details');
    p_details.splice(index,1);
    localStorage.setItem('p_details',JSON.stringify(p_details));

    toast.success('Product is removed from cart');

    location.reload();
  
  }


  function setProductCountPlus(){

    setProductCount(count1 + 1);

    location.reload();
  }

  function setProductCountMinus(){

    setProductCount(count1 - 1);

    location.reload();
  }

  return (
    <tr>
      <td>
        <div className="cart-product">
          <div className="cart-product__img">
            <img src={thumb} alt="ddd" />
          </div>

          <div className="cart-product__content">
            <h3>{name}</h3>
            <p>#{id}</p>
          </div>
        </div>
      </td>
      <td className="cart-item-before" data-label="Color">{color}</td>
      <td className="cart-item-before" data-label="Size">{size}</td>
      <td>
        <div className="quantity-button">
          <button type="button" onClick={() => setProductCountMinus()} className="quantity-button__btn">
            -
          </button>
          <span>{ count1 }</span>
          <button type="button" onClick={() => setProductCountPlus()} className="quantity-button__btn">
            +
          </button>
        </div>
      </td>
      <td>BDT {price}</td>
      <td className="cart-item-cancel"><i className="icon-cancel" onClick={() => removefromCart(index)}></i></td>
    </tr>
  )
};

  
export default ShoppingCart