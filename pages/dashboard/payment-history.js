import PaymentHistroyContent from "../../components/Dashbord/payment-histroy-content";
import OrderDashHead from "../../components/Dashbord/mb-sidebar";

const PaymentHistroy = () => {
  return (
    <section className="dashbord-page">
      <OrderDashHead />
      <div className="dashbord-body">
        <div className="order_histroy_content">
          <div className="container">
            <PaymentHistroyContent />
          </div>
        </div>
      </div>
    </section>
  );
};
export default PaymentHistroy;