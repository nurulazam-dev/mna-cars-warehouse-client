import { useMyOrders } from "../../../hooks/useMyOrders";
import { formatDate } from "../../../utils/formatDate";
import { getOrderStatusColor } from "../../../utils/getOrderStatusColor";
import Loader from "../../Shared/Loader/Loader";

const MyOrders = () => {
  const { orders, loading } = useMyOrders();

  console.log(orders);

  return (
    <section className="container">
      <h2 className="text-center mb-2 text-primary fw-bold">My Items</h2>
      {loading && <Loader />}

      {!loading && (
        <div>
          {orders?.length === 0 ? (
            <p className="text-center text-danger">No items found.</p>
          ) : (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Order ID</th>
                  <th>Item Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Order Date</th>
                </tr>
              </thead>
              <tbody>
                {orders?.map((order, index) => (
                  <tr key={order?._id}>
                    <td>{index + 1}</td>
                    <td>{order?._id}</td>
                    <td>
                      {order?.items?.map((item, idx) => (
                        <li
                          key={item?._id || idx}
                          className="badge text-dark me-1"
                        >
                          {idx + 1}.{" "}
                          <span className="text-success">{item?.title}</span>
                        </li>
                      ))}
                    </td>
                    <td>{order?.items?.length}</td>
                    <td>
                      $
                      {order?.items
                        ?.reduce((acc, item) => acc + item.price, 0)
                        .toLocaleString()}
                    </td>
                    <td
                      style={{
                        color: getOrderStatusColor(order?.status),
                        fontWeight: "semibold",
                      }}
                    >
                      {order?.status}
                    </td>

                    <td>{formatDate(order?.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </section>
  );
};

export default MyOrders;
