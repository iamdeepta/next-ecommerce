import Link from "next/link";
const OrderHistroyContent = () => {
  return (
    <section className="order-histroy">
      <div className="order-histroy-head">
        <span>
          {" "}
          <Link href="/ss">
            <a className="warning">Pending(0)</a>
          </Link>
        </span>
        <span>
          <Link href="/ss">
            <a className="success">Accepted(0)</a>
          </Link>
        </span>
        <span>
          <Link href="/ss">
            <a className="deli">delivered(0)</a>
          </Link>
        </span>
        <span>
          <Link href="/ss">
            <a className="alert">cancelled(0)</a>
          </Link>
        </span>
      </div>
      <div className="order__histroy__body">
        <h2> Order History </h2>
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
                    SPM Location
                  </th>
                  <th className="text-tb">
                    Total
                  </th>
                  <th className="text-tb">
                    Product Quantity
                  </th>
                  <th className="text-tb">
                    Created Date
                  </th>
                  <th className="text-tb">
                    Action
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
