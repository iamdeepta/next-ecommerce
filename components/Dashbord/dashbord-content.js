import Link from 'next/link';
const DashbordContnet = () => {
  return (
    <div className="dashbord-content-wrap">
      <div className="dashbord-content-header">
        <img src="/images/products/product-1.jpg"/>
        <h2>Anik Routh</h2>
      </div>
      <div class="widget-text-box">
        <div className="info-item">
            <h2>Full Name</h2>
            <h3>Anik Routh</h3>
        </div>
        <div className="info-item">
            <h2>Mobile</h2>
            <h3>01314401789</h3>
        </div>
        <div className="info-item">
            <h2>Email</h2>
            <h3>test@gmail.com</h3>
        </div>
        <div className="info-item">
            <h2>Account Type</h2>
            <h3>Customer</h3>
        </div>
        <div className="info-item">
            <h2>Address</h2>
            <h3>Noakhali</h3>
        </div>
        <div className="info-item">
            <h2>Payment Method</h2>
            <h3>Bkash</h3>
        </div>
        <div className="info-item">
            <h2>Account number</h2>
            <h3>314401789</h3>
        </div>
        <div className="bottom-link">
          <Link href="dashboard/manage-profile">
            <a>
              Manage Profile
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default DashbordContnet;
