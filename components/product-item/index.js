import Review from '../Review';
import Link from 'next/link';
import { useState } from 'react';
import { addProduct } from './../../store/actions/cartActions';
import { some } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavProduct } from './../../store/actions/userActions';


const ProductItem = ({ category, discount, productImage, id, name, price, currentPrice }) => {


  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [color, setColor] = useState('');
  const [itemSize, setItemSize] = useState('');

  const onColorSet = (e) => setColor(e);
  const onSelectChange = (e) => setItemSize(e.target.value);


  const { favProducts } = useSelector(state => state.user);

  const isFavourite = some(favProducts, productId => productId === id);

  const toggleFav = () => {
    dispatch(toggleFavProduct(
      { 
        id,
      }
    ))
  }

  const addToCart = () => {
    dispatch(addProduct(
      { 
        id: id,
        name: name,
        thumb: productImage,
        price: currentPrice,
        count: count,
        color: color,
        size: itemSize
      }
    ))
  }
  return (
    <div className="product-item">
      <div className="product__image">
        <button type="button" onClick={toggleFav} className={`btn-heart ${isFavourite ? 'btn-heart--active' : ''}`}><i className="icon-heart"></i></button>

        <Link href={`/product/${id}`}>
          <a>
            <img src={productImage} alt="product" />
            {discount && 
              <span className="product__discount">{discount}%</span>
            }
          </a>
        </Link>
      </div>      
      <div className="product__description">
        <Link href="#">
            <a><h5>{category}</h5></a>
        </Link>
        <Link href={`/product/${id}`}>
          <a><h3>{name}</h3></a>
        </Link>
        <div className={"product__price " + (discount ? 'product__price--discount' : '')} >
          <h4>BDT { currentPrice }</h4>

          {discount &&  
            <span>${ price }</span>
          }
        </div>
        <Review />
        <button type="submit" onClick={() => addToCart()} className="btn btn--rounded btn--yellow">Add to cart</button>
      </div>
      <div className="view-details">
            <Link href={`/product/${id}`}>
              <a>
                View Details
              </a>
            </Link>
      </div>
    </div>
  )
};


export default ProductItem