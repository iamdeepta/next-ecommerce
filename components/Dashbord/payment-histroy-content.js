
const OrderHistroyContent = () => {
  return (
    <section className="order-histroy payment-histroy">
      <div className="order__histroy__body">
        <h2>  Payment History</h2>
        <div className="order__histroy__body__content">
          <div className="head">
            <div className="sh">
              <span>
                <h3>Show</h3>
              </span>
              <select>
                <option>10</option>
                <option>20</option>
                <option>50</option>
                <option>All</option>
              </select>
              <span>
                <h3> records per page</h3>
              </span>
            </div>
            <div>
              <form>
                <input placeholder="search in records.." type="text" />
              </form>
            </div>
          </div>
          <div className="main">
            <table
              className="table"
              id="as-react-datatable"
            >
              <thead className="">
                <tr>
                  <th className="">
                    Serial
                  </th>
                  <th className="text-tb">
                    Invoice
                  </th>
                  <th className="text-tb">
                    Payment Type
                  </th>
                  <th className="text-tb">
                  Receiver Account
                  </th>
                  <th className="text-tb">
                  Sender Account
                  </th>
                  <th className="text-tb">
                  Trx ID
                  </th>
                  <th className="text-tb">
                  Total
                  </th>
                  <th className="text-tb">
                  Product Quantity
                  </th>
                  <th className="text-tb">
                  Status
                  </th>
                  <th className="text-tb">
                  Created Date
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="7" align="center">
                    No rows found
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="footer">
            <div>
              <span><h3>Showing 1 to 0 of 0 entries</h3></span>
            </div>
            <div>
                <ul className="f-lsit">
                  <li><button type="submit">First</button></li>
                  <li><button type="submit">Previous</button></li>
                  <li><input type="text" value="1"/></li>
                  <li><button type="submit">Next</button></li>
                  <li><button type="submit">Last</button></li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OrderHistroyContent;
