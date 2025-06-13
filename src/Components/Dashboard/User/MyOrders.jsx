import { useMyOrders } from "../../../hooks/useMyOrders";

const MyOrders = () => {
  const { orders, loading } = useMyOrders();

  if (loading) return <h3>Loading orders...</h3>;

  return (
    <div className="container mt-4">
      <h2>My Purchased Orders</h2>

      {orders?.length === 0 ? (
        <p>No orders found.</p>
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
