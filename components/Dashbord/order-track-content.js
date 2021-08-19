
const OrderHistroyContent = () => {
  return (
    <section className="order-histroy">
      <div className="order__histroy__body order__track__body">
        <h2>  Tracking your order </h2>
        <div className="order-track">
          <form>
            <input type="text" placeholder="Enter invoice Number"/>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default OrderHistroyContent;
