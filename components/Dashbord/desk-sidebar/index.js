export const DeskView = ()=>{
    return(
        <aside
          className="dashbord-sidebar desk">
          <div className="customer-avater">
            <img src="/images/products/product-4.jpg"/>
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
                <a href="/dashboard/order-history">order history</a>
              </li>
              <li className="dash-menu-item">
                <a href="/dashboard/payment-history">payment history</a>
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
    )
}
export default DeskView