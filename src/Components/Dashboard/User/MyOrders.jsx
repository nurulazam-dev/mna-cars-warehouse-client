import { useMyOrders } from "../../../hooks/useMyOrders";
import Loader from "../../Shared/Loader/Loader";

const MyOrders = () => {
  const { orders, loading } = useMyOrders();

  if (loading) return <Loader />;

  return (
    <div className="container">
      <h2 className="text-primary text-center">My Items</h2>

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
  );
};

export default MyOrders;
