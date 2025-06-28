import { useMyOrders } from "../../../hooks/useMyOrders";
import { formatDate } from "../../../utils/formatDate";
import { getOrderStatusColor } from "../../../utils/getOrderStatusColor";
import Loader from "../../Shared/Loader/Loader";

const MyOrders = () => {
  const { orders, loading } = useMyOrders();

  return (
    <section className="container animate__animated animate__fadeIn">
      <h2 className="text-center mb-2 text-primary fw-bold">
        My Orders ({orders?.length}){" "}
      </h2>

      {loading && <Loader />}

      {!loading && (
        <>
          {orders?.length === 0 ? (
            <p className="text-center text-danger fs-5">No orders found.</p>
          ) : (
            <div className="table-responsive">
              <table className="table table-hover table-bordered shadow-sm rounded animate__animated animate__fadeInUp">
                <thead className="table-light text-center">
                  <tr>
                    <th>#</th>
                    <th>Order ID</th>
                    <th>Items</th>
                    <th>Qty</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th>Ordered On</th>
                  </tr>
                </thead>
                <tbody className="align-middle text-center">
                  {orders?.map((order, index) => {
                    const total = order?.items?.reduce(
                      (acc, item) => acc + item.price,
                      0
                    );
                    return (
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
                              <li key={idx} className="small text-secondary">
                                <span className="fw-semibold text-dark">
                                  {idx + 1}. {item?.title}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </td>
                        <td>{order?.items?.length}</td>
                        <td className="text-success fw-bold">
                          ${total.toLocaleString()}
                        </td>
                        <td>
                          <span
                            className="badge px-3 py-2 rounded-pill"
                            style={{
                              backgroundColor: `${getOrderStatusColor(
                                order?.status
                              )}20`,
                              color: getOrderStatusColor(order?.status),
                              fontWeight: "600",
                            }}
                          >
                            {order?.status}
                          </span>
                        </td>
                        <td>{formatDate(order?.createdAt)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default MyOrders;
