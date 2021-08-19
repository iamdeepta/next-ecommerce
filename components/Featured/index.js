import TodaySale from './carousel';
import useSwr from 'swr';


export const TodaySaleCarousel = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data } = useSwr('/api/products', fetcher);


  return (
    <div className="container">
      <div className="section section-products-featured">
        <header className="section-products-featured__header">
          <h3>Featured Product's</h3>
          <a href="/view-more/featured-products" className="btn btn--rounded btn--border">View More</a>
        </header>
        
        <TodaySale products={data} />
      </div>
    </div>
  )
};

export default TodaySaleCarousel