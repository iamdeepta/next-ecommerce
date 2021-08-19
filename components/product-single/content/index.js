import {useRouter} from 'next/router';
import { useState,useEffect } from "react";
import AppUrl from '../../../pages/AppUrl.js';
import productsColors from './../../../utils/data/products-colors';
import productsSizes from './../../../utils/data/products-sizes';
import CheckboxColor from './../../products-filter/form-builder/checkbox-color';
import { useDispatch, useSelector } from 'react-redux';
import { some } from 'lodash';
import { addProduct } from './../../../store/actions/cartActions';
import { toggleFavProduct } from './../../../store/actions/userActions';
import 'react-toastify/dist/ReactToastify.css';
import { toast,ToastContainer } from 'react-toastify';

const Content = ({ product }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [color, setColor] = useState('');
  const [itemSize, setItemSize] = useState('');

  const onColorSet = (e) => setColor(e);
  const onSelectChange = (e) => setItemSize(e.target.value);

  const { favProducts } = useSelector(state => state.user);
  const isFavourite = some(favProducts, productId => productId === product.id);

  const toggleFav = () => {
    dispatch(toggleFavProduct(
      { 
        id: product.id,
      }
    ))
  }

  const addToCart = () => {
    dispatch(addProduct(
      { 
        id: product.id,
        name: product.name,
        thumb: product.images[0],
        price: product.currentPrice,
        count: count,
        color: color,
        size: itemSize
      }
    ))
  }


  const router = useRouter();

  var path = router.query.pid;

  const cartFromLocalStorage = typeof window !=='undefined' ? JSON.parse(localStorage.getItem('p_details') || "[]") : null;

  const [data1,setData1] = useState([]);
  const [cart,setCart] = useState(cartFromLocalStorage);
  //const [image_all,setImageAll] = useState('');
  useEffect(async ()=>{

    let result1 = await fetch(AppUrl.base_url+"singleproduct/"+path,{

      method:'POST',
      headers: {
        "Content-Type": 'application/json',
        "Accept" : 'application/json'
      }
    });
    result1 = await result1.json();
    setData1(result1);
  },[]);

  let title = '';
  let available = '';
  let id = '';
  let price = '';
  let weight = '';
  let unit = '';
  let color1 = '';
  let size = '';
  let ingredients = '';
  let image1 = '';

  data1.map((item)=>
   title = item.title);
   data1.map((item)=>
   available = item.available);
   data1.map((item)=>
   id = item.id);
   data1.map((item)=>
   price = item.price);
   data1.map((item)=>
   weight = item.weight);
   data1.map((item)=>
   unit = item.unit);
   data1.map((item)=>
   color1 = item.color);
   data1.map((item)=>
   size = item.size);
   data1.map((item)=>
   ingredients = item.ing);
   data1.map((item)=>
   image1 = item.img1);

   //let product_detail_id = [];
   //product_detail[0] = prompt(title); 

   //let product_detail = [];
// useEffect(()=>{
//   typeof window !=='undefined' ?
//   localStorage.setItem('cart',JSON.stringify(cart)) : null;

// },[cart]);

let p_details = cart;

function addtoCart(p_id,p_title,p_price,p_count,p_image){


  p_details.push({p_id,p_title,p_price,p_count,p_image});
  
  localStorage.setItem('p_details',JSON.stringify(p_details));
  setCart(p_details);

  toast.success('Product added to cart');

  location.reload();


 }


 function buyNow(p_id,p_title,p_price,p_count,p_image){

  addtoCart(p_id,p_title,p_price,p_count,p_image);

  router.push('/cart');
 }


   

   //console.log(p_local);
   

  return (
    <section className="product-content">
      <ToastContainer/>
      <div className="product-content__intro">
        <h5 className="product__id">Product ID:<br></br>{id}</h5>
        {(available==='yes'||available==='available') ?
        <span className="product-on-sale" style={{background:'green'}}>Available</span>
        :
        <span className="product-on-sale">Out of stock</span>
      }
  
        <h2 className="product__name">{title}</h2>

        <div className="product__prices">
          <h4>BDT { price }</h4>
          {product.discount &&
            <span>BDT { price }</span>
          }
        </div>
      </div>

      <div className="product-content__filters">
      <div className="product-filter-item">
          <h5>Ingredients: <strong>{ingredients==='' ? 'N/A' : ingredients}</strong></h5>
          
        </div>
      <div className="product-filter-item">
          <h5>Weight: <strong>{weight==='' ? 'N/A' : weight+unit}</strong></h5>
          
        </div>
        <div className="product-filter-item">
          <h5>Color: <strong>{(color1===null||color1==='') ? 'N/A' : color1}</strong></h5>
          {/* <div className="checkbox-color-wrapper">
            {productsColors.map(type => (
              <CheckboxColor 
                key={type.id} 
                type={'radio'} 
                name="product-color" 
                color={type.color}
                valueName={type.label}
                onChange={onColorSet} 
              />
            ))}
          </div> */}
        </div>
        <div className="product-filter-item">
          <h5>Size: <strong>{size==='' ? 'N/A' : size}</strong></h5>
          {/* <div className="checkbox-color-wrapper">
            <div className="select-wrapper">
              <select onChange={onSelectChange}>
                <option>Choose size</option>
                {productsSizes.map(type => (
                  <option value={type.label}>{type.label}</option>
                ))}
              </select>
            </div>
          </div> */}
        </div>
        <div className="product-filter-item">
          <h5>Quantity:</h5>
          <div className="quantity-buttons qty-mr-b">
            <div className="quantity-button">
              <button type="button" onClick={() => setCount(count - 1)} className="quantity-button__btn">
                -
              </button>
              <span>{count}</span>
              <button type="button" onClick={() => setCount(count + 1)} className="quantity-button__btn">
                +
              </button>
            </div>
            <button type="button" onClick={toggleFav} className={`btn-heart ${isFavourite ? 'btn-heart--active' : ''}`}><i className="icon-heart"></i></button>
          </div>
          <div className="product-filter-item">
            {(available==='yes'||available==='available') ?
            <> 
            <button type="submit" className="btn btn--rounded btn--yellow" onClick={()=>buyNow(id,title,price,count,image1)}>Buy Now</button>
            <button type="submit" id={'add_to_cart_btn'+id} onClick={() => addtoCart(id,title,price,count,image1)} className="btn btn--rounded btn--yellow">Add to cart</button>
            </>
            :
            <>
            <button type="submit" className="btn btn--rounded btn--yellow" style={{cursor:'no-drop',pointerEvents:'none'}} disabled>Buy Now</button>
            <button type="submit" id={'add_to_cart_btn'+id} onClick={() => addtoCart(id,title,price,count,image1)} className="btn btn--rounded btn--yellow" style={{cursor:'no-drop',pointerEvents:'none'}} disabled>Add to cart</button>
            </>
          }
            
          </div>
        </div>
      </div>
    </section>
  );
};
  
export default Content;
    