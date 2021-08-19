import ProductsCarousel from './carousel';
import useSwr from 'swr';

const ProductsFeatured = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data } = useSwr('/api/products', fetcher);

  return (
    <div className="container">
      <div className="section section-products-featured">
        <header className="section-products-featured__header">
          <h3>Most popular homemade ready meals</h3>
          <a href="/view-more/homemade-ready-meals" className="btn btn--rounded btn--border">View more</a>
        </header>

        <ProductsCarousel products={data} />
      </div>
    </div>
  )
};

export default ProductsFeatured