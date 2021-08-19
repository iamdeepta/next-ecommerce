import Discount from './carousel';
import useSwr from 'swr';


export const DiscountCarousel = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data } = useSwr('/api/products', fetcher);


  return (
    <div className="container">
      <div className="section section-products-featured">
        <header className="section-products-featured__header">
          <h3>Discount Product's</h3>
          <a href="/view-more/discount-products" className="btn btn--rounded btn--border">view more</a>
        </header>
        
        <Discount products={data} />
      </div>
    </div>
  )
};

export default DiscountCarousel