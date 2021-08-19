import { useDispatch } from "react-redux";
import { removeProduct } from "../../../../store/actions/cartActions";
import { setCount } from "../../../../store/actions/cartActions";
import {useState,useEffect} from 'react';
import { toast,ToastContainer } from 'react-toastify';

const ShoppingCart = ({ thumb, name, id, color, index, count, price }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(
      removeProduct({
        id: id,
        color: color,
        size: size,
      })
    );
  };

  const setProductCount = (count) => {
    if (count <= 0) {
      return false;
    }

    dispatch(
      setCount({
        id: id,
        color: color,
        size: size,
        count: count,
      })
    );
  };

  const cartFromLocalStorage1 = typeof window !=='undefined' ? JSON.parse(localStorage.getItem('p_details') || "[]") : [];

  const [p_details,setPDetails1] = useState(cartFromLocalStorage1);

  useEffect(()=>{
    setPDetails1(p_details);
  },[]);

  function removefromCart(index){

    //localStorage.removeItem('p_details');
    p_details.splice(index,1);
    localStorage.setItem('p_details',JSON.stringify(p_details));

    toast.success('Product is removed from cart');

    location.reload();
  
    //var getLocalStorage = JSON.parse(localStorage.getItem("p_details"));
    // console.log(delete p_details[index]);
    // localStorage.setItem('p_details',JSON.stringify(p_details));
    // setPDetails1(p_details);
    //localStorage.removeItem('p_details');

  

    // console.log(p_details[index]);

  }

  return (
    <div className="pop-cart-wrap">
      <div className="pop-cart-product">
        <div className="pop-cart-product__img">
          <img src={thumb} alt="ddd" />
        </div>
        <div className="pop-cart-product__content">
          <h3>{name}</h3>
          <div>
            <span>{count}</span> X <p>BDT{price}</p>
          </div>
        </div>
      </div>

      <div className="cart-item-cancel">
        <i className="icon-cancel" onClick={() => removefromCart(index)}></i>
      </div>
    </div>
  );
};

export default ShoppingCart;
