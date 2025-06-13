import React, { useState } from "react";
import { toast } from "react-toastify";
import { LOCAL_BASE_URL } from "../../../config";
import { useAllOrders } from "../../../hooks/useAllOrders";

const ManageOrders = () => {
  const { orders, loading, refetch } = useAllOrders();
  const [updatingId, setUpdatingId] = useState(null);

  const handleUpdate = async (orderId, updatedStatus) => {
    setUpdatingId(orderId);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${LOCAL_BASE_URL}/orders/${orderId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: updatedStatus }),
      });

      if (res.ok) {
        toast.success("Order updated");
        refetch();
      } else {
        toast.error("Failed to update");
      }
    } catch (err) {
      toast.error("Error updating order");
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDelete = async (orderId) => {
    if (window.confirm("Are you sure to delete this order?")) {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(`${LOCAL_BASE_URL}/orders/${orderId}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.ok) {
          toast.success("Order deleted");
          refetch();
        } else {
          toast.error("Failed to delete");
        }
      } catch (err) {
        toast.error("Error deleting order");
      }
    }
  };

  if (loading) return <h3>Loading orders...</h3>;

  return (
    <div className="container mt-4">
      <h2>Orders Management</h2>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Item Name</th>
              <th>Buyer</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Update Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {orders?.map((order) => (
              <tr key={order?._id}>
                <td>{order?._id}</td>
                <td>{order?.itemName}</td>
                <td>{order?.email}</td>
                <td>{order?.quantity}</td>
                <td>{order?.status || "Pending"}</td>
                <td>
                  <select
                    className="form-select"
                    value={order?.status || "Pending"}
                    onChange={(e) => handleUpdate(order?._id, e.target.value)}
                    disabled={updatingId === order?._id}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Processing">Processing</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(order?._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageOrders;
