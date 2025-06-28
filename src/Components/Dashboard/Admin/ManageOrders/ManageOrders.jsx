import { useState } from "react";
import { useAllOrders } from "../../../../hooks/useAllOrders";
import { Button } from "react-bootstrap";
import Loader from "../../../Shared/Loader/Loader";
import UpdateOrderModal from "./UpdateOrderModal";
import DeleteOrderModal from "./DeleteOrderModal";
import { getOrderStatusColor } from "../../../../utils/getOrderStatusColor";
import { formatDate } from "../../../../utils/formatDate";

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
            <div className="table-responsive">
              <table className="table table-hover table-bordered shadow-sm rounded animate__animated animate__fadeInUp">
                <thead className="table-light text-center">
                  <tr>
                    <th>#</th>
                    <th>Order ID</th>
                    <th>Items</th>
                    <th>Buyer</th>
                    <th>Qty</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th>Ordered</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody className="align-middle text-center">
                  {orders?.map((order, index) => (
                    <tr
                      key={order?._id}
                      className="animate__animated animate__fadeInUp"
                    >
                      <td>{index + 1}</td>
                      <td className="text-muted" style={{ fontSize: 13 }}>
                        {"..."} {order?._id?.slice(-8).toUpperCase()}
                      </td>
                      <td className="text-start">
                        <ul className="list-unstyled mb-0">
                          {order?.items?.map((item, idx) => (
                            <li
                              key={idx}
                              className="text-secondary"
                              style={{ fontSize: 13 }}
                            >
                              <span className="fw-semibold text-dark">
                                {idx + 1}. {item?.title}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </td>
                      <td>{order?.email}</td>
                      <td>{order?.items?.length}</td>
                      <td className="text-success fw-semibold">
                        {" "}
                        $total
                        {/* ${total.toLocaleString()} */}
                      </td>
                      <td>
                        <span
                          className="badge px-3 py-2 rounded-pill"
                          style={{
                            backgroundColor: `${getOrderStatusColor(
                              order?.status
                            )}20`,
                            color: getOrderStatusColor(order?.status),
                            fontWeight: "400",
                          }}
                        >
                          {order?.status}
                        </span>
                      </td>
                      <td>{formatDate(order?.createdAt)}</td>
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
              </table>
            </div>
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
