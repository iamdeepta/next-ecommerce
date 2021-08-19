import OrderTrackContent from "../../components/Dashbord/order-track-content";
import OrderDashHead from "../../components/Dashbord/mb-sidebar";

const OrderTrack = () => {
  return (
    <section className="dashbord-page">
      <OrderDashHead />
      <div className="dashbord-body">
        <div className="order_histroy_content">
          <div className="container">
            <OrderTrackContent />
          </div>
        </div>
      </div>
    </section>
  );
};
export default OrderTrack;