import { useMyOrders } from "../../../hooks/useMyOrders";
import Loader from "../../Shared/Loader/Loader";

const MyOrders = () => {
  const { orders, loading } = useMyOrders();

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
                  <th>Order ID</th>
                  <th>Item Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Order Date</th>
                </tr>
              </thead>
              <tbody>
                {orders?.map((order) => (
                  <tr key={order?._id}>
                    <td>{order?._id}</td>
                    <td>{order?.itemName}</td>
                    <td>{order?.quantity}</td>
                    <td>${order?.price}</td>
                    <td>{order.status}</td>
                    <td>{new Date(order?.createdAt).toLocaleDateString()}</td>
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
