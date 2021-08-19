import Layout from "../layouts/Main";
import Footer from "../components/footer";
import Location from "../assets/icons/location";

const GuideLine = () => {
  return (
    <Layout>
      <section className="faq-page producer-page service-point-page">
        <div className="faq-header">
          <div className="container">
            <h2 className="producer-heading"> All Service Point Location </h2>
            <div class="serch-form">
              <form action="#">
                <input type="text" name="search" placeholder="Enter a City" />
                <button type="submit">
                  <i class="icon-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="producer-content">
             <div className="producer-item">
                <img src="https://app.trust-lite.com/storage/app/product/rHW0xzUWsY2VWCx1AQYUAmKXbpYdFWheD3k8tPrr.jpeg" alt="image not found"/>
                <h2><span><i className="icon-avatar"></i>Name: </span>Bio-Hellas</h2>
                <h5><span><Location />City : </span>Dhaka</h5>
                <h5><span><Location />Address: </span>Mirpur-1</h5>
              </div>
              <div className="producer-item">
                <img src="https://app.trust-lite.com/storage/app/product/rHW0xzUWsY2VWCx1AQYUAmKXbpYdFWheD3k8tPrr.jpeg" alt="image not found"/>
                <h2><span><i className="icon-avatar"></i>Name: </span>Bio-Hellas</h2>
                <h5><span><Location />City : </span>Dhaka</h5>
                <h5><span><Location />Address: </span>Mirpur-1</h5>
              </div>
              <div className="producer-item">
                <img src="https://app.trust-lite.com/storage/app/product/rHW0xzUWsY2VWCx1AQYUAmKXbpYdFWheD3k8tPrr.jpeg" alt="image not found"/>
                <h2><span><i className="icon-avatar"></i>Name: </span>Bio-Hellas</h2>
                <h5><span><Location />City : </span>Dhaka</h5>
                <h5><span><Location />Address: </span>Mirpur-1</h5>
              </div>
              <div className="producer-item">
                <img src="https://app.trust-lite.com/storage/app/product/rHW0xzUWsY2VWCx1AQYUAmKXbpYdFWheD3k8tPrr.jpeg" alt="image not found"/>
                <h2><span><i className="icon-avatar"></i>Name: </span>Bio-Hellas</h2>
                <h5><span><Location />City : </span>Dhaka</h5>
                <h5><span><Location />Address: </span>Mirpur-1</h5>
              </div>
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
};
export default GuideLine;
