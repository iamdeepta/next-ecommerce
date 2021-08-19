import HandShake from "../../../assets/icons/handshake";
import Categories from "../../../assets/icons/category";
import Customers from "../../../assets/icons/customers";
import Location from "../../../assets/icons/location";
import Cart from "../../../assets/icons/cart";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Countup = () => {
  return (
    <div className="Achive-wrap">
      <div className="Achive-header">
        <h2>Our Achievement</h2>
      </div>
        <ul className="Achive-list">
          <li>
            <p>
              <Customers />
            </p>
            <CountUp end={7722} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <span>+</span>
            <h3>Happy Customers</h3>
          </li>
          <li>
            <p>
              <HandShake />
            </p>
            <CountUp end={3322} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <span>+</span>
            <h3>Happy Supplier</h3>
          </li>
          <li>
            <p>
              <Cart />
            </p>
            <CountUp end={1032} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <span>+</span>
            <h3>Products</h3>
          </li>
          <li>
            <p>
              <Categories />
            </p>
            <CountUp end={1865} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <span>+</span>
            <h3>Categories</h3>
          </li>
          <li>
            <p>
              <Location />
            </p>
            <CountUp end={7722} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <span>+</span>
            <h3>Service Points</h3>
          </li>
          <li>
            <p>
              <i class="icon-shipping"></i>
            </p>
            <CountUp end={7722} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <span>+</span>
            <h3>Happy Delivery</h3>
          </li>
        </ul>
    </div>
  );
};
export default Countup;
