import { useState } from "react";
import { useAllOrders } from "../../../../hooks/useAllOrders";
import { Table, Button } from "react-bootstrap";
import Loader from "../../../Shared/Loader/Loader";
import UpdateOrderModal from "./UpdateOrderModal";
import DeleteOrderModal from "./DeleteOrderModal";

const ManageOrders = () => {
  const { orders, loading, refetch } = useAllOrders();
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  return (
    <section className="container">
      <h2 className="text-center text-primary fw-bold mb-2">Manage Orders</h2>
      {loading && <Loader />}
      {!loading && (
        <div>
          {orders?.length === 0 ? (
            <p className="text-center text-danger">No orders found.</p>
          ) : (
            <Table striped bordered hover responsive>
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Order ID</th>
                  <th>Item Name</th>
                  <th>Buyer</th>
                  <th>Quantity</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {orders?.map((order, index) => (
                  <tr key={order?._id}>
                    <td>{index + 1}</td>
                    <td>{order?._id}</td>
                    <td>{order?.itemName}</td>
                    <td>{order?.email}</td>
                    <td>{order?.quantity}</td>
                    <td>{order?.status || "Pending"}</td>
                    <td>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="me-2"
                        onClick={() => {
                          setSelectedOrder(order);
                          setShowUpdate(true);
                        }}
                      >
                        Update
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => {
                          setSelectedOrder(order);
                          setShowDelete(true);
                        }}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </div>
      )}

      {selectedOrder && (
        <>
          <UpdateOrderModal
            show={showUpdate}
            onHide={() => setShowUpdate(false)}
            order={selectedOrder}
            refetch={refetch}
          />
          <DeleteOrderModal
            show={showDelete}
            onHide={() => setShowDelete(false)}
            order={selectedOrder}
            refetch={refetch}
          />
        </>
      )}
    </section>
  );
};

export default ManageOrders;
