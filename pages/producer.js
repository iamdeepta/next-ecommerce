import Location from "../assets/icons/location";
import Layout from "../layouts/Main";
import Footer from "../components/footer";

const Producer = () => {
  return (
    <Layout>
      <section className="producer-page faq-page">
        <div className="faq-header">
          <div className="container">
            <h2 className="producer-heading">Our Producer</h2>
            <p>
              have you find frequently ask questions. we help you to find the
              answer!
            </p>
          </div>
        </div>
        <div className="container">
          <div className="producer-content">
            <div className="producer-item">
              <img
                src="https://app.trust-lite.com/storage/app/product/rHW0xzUWsY2VWCx1AQYUAmKXbpYdFWheD3k8tPrr.jpeg"
                alt="image not found"
              />
              <h2>
                <span>
                  <i className="icon-avatar"></i>Name:{" "}
                </span>
                Bio-Hellas
              </h2>
              <h5>
                <span>
                  <Location />
                  City :{" "}
                </span>
                Dhaka
              </h5>
              <h5>
                <span>
                  <Location />
                  Address:{" "}
                </span>
                Mirpur-1
              </h5>
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
              <div className="producer-item">
                <img src="https://app.trust-lite.com/storage/app/product/rHW0xzUWsY2VWCx1AQYUAmKXbpYdFWheD3k8tPrr.jpeg" alt="image not found"/>
                <h2><span><i className="icon-avatar"></i>Name: </span>Bio-Hellas</h2>
                <h5><span><Location />City : </span>Dhaka</h5>
                <h5><span><Location />Address: </span>Mirpur-1</h5>
              </div>             <div className="producer-item">
                <img src="https://app.trust-lite.com/storage/app/product/rHW0xzUWsY2VWCx1AQYUAmKXbpYdFWheD3k8tPrr.jpeg" alt="image not found"/>
                <h2><span><i className="icon-avatar"></i>Name: </span>Bio-Hellas</h2>
                <h5><span><Location />City : </span>Dhaka</h5>
                <h5><span><Location />Address: </span>Mirpur-1</h5>
              </div>             <div className="producer-item">
                <img src="https://app.trust-lite.com/storage/app/product/rHW0xzUWsY2VWCx1AQYUAmKXbpYdFWheD3k8tPrr.jpeg" alt="image not found"/>
                <h2><span><i className="icon-avatar"></i>Name: </span>Bio-Hellas</h2>
                <h5><span><Location />City : </span>Dhaka</h5>
                <h5><span><Location />Address: </span>Mirpur-1</h5>
              </div>             <div className="producer-item">
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
export default Producer;
