import Bar from "../../assets/icons/bar";
import Notification from "../../assets/icons/notification";
import { useState } from "react";
import ManageContent from "../../components/Dashbord/manage-profile-content";
import DeskView from "../../components/Dashbord/desk-sidebar";

const Dashbord = () => {
  // nav bar end
  const [showMe, setShowMe] = useState(false);
  function toggle() {
    setShowMe(!showMe);
  }
  // end
  return (
    <section className="dashbord-page">
      <header className="dashbord-header">
        <button onClick={toggle} className="dashbord-sidebar-btn">
          <Bar />
        </button>

        <div className="right">
          <a href="/">
            <i className="icon-left"></i> go back to home
          </a>
          <button>
            <Notification />
            <p>1</p>
          </button>
        </div>
      </header>
      <div className="dashbord-body">
        <aside
          className="dashbord-sidebar"
          style={{
            display: showMe ? "block" : "none",
          }}
        >
          <div className="customer-avater">
            <img
              src="/images/products/product-4.jpg"
            />
            <h1 className="user-name">Anik Routh</h1>
          </div>
          <div className="sidebar-content">
            <ul className="dash-menu-list">
            <li className="dash-menu-item">
                <a href="/dashboard">Dashbord</a>
              </li>
              <li className="dash-menu-item">
                <a href="/dashboard/manage-profile">Manage profile</a>
              </li>
              <li className="dash-menu-item">
                <a href="/dashboard/order-histroy">order histroy</a>
              </li>
              <li className="dash-menu-item">
                <a href="/dashboard/payment-histroy">payment histroy</a>
              </li>
              <li className="dash-menu-item">
                <a href="/dashboard/order-track">order tracking</a>
              </li>
              <li className="dash-menu-item">
                <a href="/dashboard/notification">notification</a>
              </li>
              <li className="dash-menu-item">
                <a href="/dashboard/buy-earn">buy & earn section</a>
              </li>
              <li className="dash-menu-item">
                <a href="/">logout</a>
              </li>
            </ul>
          </div>
        </aside>
              {/* for mb end */}
      <DeskView />
      {/* end */}
        <div className="profile-content dashbord-content">
          <div className="container">
            <div>
              <ManageContent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Dashbord;