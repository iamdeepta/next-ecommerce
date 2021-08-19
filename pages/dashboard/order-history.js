import OrderHistroy from "../../components/Dashbord/order-histroy-content";
import OrderDashHead from "../../components/Dashbord/mb-sidebar";

const OrderHis = () => {
  return (
    <section className="dashbord-page">
      <OrderDashHead />
      <div className="dashbord-body">
        <div className="order_histroy_content">
          <div className="container">
            <OrderHistroy />
          </div>
        </div>
      </div>
    </section>
  );
};
export default OrderHis;