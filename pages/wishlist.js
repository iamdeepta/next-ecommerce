import Layout from "../layouts/Main";

const WishlistPage = () => (
  <Layout>
    <section className="cart">
      <div className="container">
        <div className="cart__intro">
          <h3 className="cart__title">Wishlist</h3>
        </div>
        <div className="wish-list">
          <p>#4</p>
          <div className="pro-img">
            <img src="/images/products/product-1.jpg" alt="images" />
          </div>
          <h2>This is product</h2>
          <p>$20</p>
          <p>
            <i className="icon-cancel"></i>
          </p>
        </div>
        <div className="wish-list">
          <p>#4</p>
          <div className="pro-img">
            <img src="/images/products/product-1.jpg" alt="images" />
          </div>
          <h2>This is product</h2>
          <p>$20</p>
          <p>
            <i className="icon-cancel"></i>
          </p>
        </div>
        <div className="cart-actions">
          <a href="/products" className="cart__btn-back">
            <i className="icon-left"></i> Continue Shopping
          </a>
        </div>
      </div>
    </section>
  </Layout>
);

export default WishlistPage;
