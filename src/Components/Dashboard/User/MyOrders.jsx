import { useState, useMemo } from "react";
import { useMyOrders } from "../../../hooks/useMyOrders";
import { formatDate } from "../../../utils/formatDate";
import { getOrderStatusColor } from "../../../utils/getOrderStatusColor";
import Loader from "../../Shared/Loader/Loader";

const MyOrders = () => {
  const { orders, loading } = useMyOrders();
  const ORDERS_PER_PAGE = 5;

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [_id, setId] = useState("");
  const [date, setDate] = useState("");
  const [page, setPage] = useState(1);

  const filteredOrders = useMemo(() => {
    return (orders || [])
      .filter((order) =>
        search
          ? order.items.some((item) =>
              item.title.toLowerCase().includes(search.toLowerCase())
            )
          : true
      )
      .filter((order) =>
        _id ? String(order._id).toLowerCase().includes(_id.toLowerCase()) : true
      )
      .filter((order) =>
        status ? order.status.toLowerCase() === status.toLowerCase() : true
      )
      .filter((order) =>
        date ? formatDate(order.createdAt) === formatDate(date) : true
      );
  }, [orders, search, _id, status, date]);

  const totalPages = Math.ceil(filteredOrders.length / ORDERS_PER_PAGE);
  const paginatedOrders = filteredOrders.slice(
    (page - 1) * ORDERS_PER_PAGE,
    page * ORDERS_PER_PAGE
  );

  const statusOptions = useMemo(
    () =>
      Array.from(new Set((orders || []).map((order) => order.status))).filter(
        Boolean
      ),
    [orders]
  );

  const handleFilterChange = (setter) => (e) => {
    setter(e.target.value);
    setPage(1);
  };

  return (
    <section className="container animate__animated animate__fadeIn">
      <h2 className="text-center mb-2 text-primary fw-bold">
        My Orders ({filteredOrders.length})
      </h2>

      {/* ===================
              filter part
          =================== */}
      <div className="row mb-4 g-2 justify-content-center">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by item name"
            value={search}
            onChange={handleFilterChange(setSearch)}
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by order ID"
            value={_id}
            onChange={handleFilterChange(setId)}
          />
        </div>
        <div className="col-md-2">
          <select
            className="form-select"
            value={status}
            onChange={handleFilterChange(setStatus)}
          >
            <option value="">All Status</option>
            {statusOptions.map((s, i) => (
              <option key={i} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-2">
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={handleFilterChange(setDate)}
          />
        </div>
      </div>

      {/* ===================
              table part
          =================== */}
      {loading && <Loader />}

      {!loading && (
        <>
          {paginatedOrders.length === 0 ? (
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
                  {paginatedOrders.map((order, index) => {
                    const total = order?.items?.reduce(
                      (acc, item) => acc + item.price,
                      0
                    );
                    return (
                      <tr
                        key={order?._id}
                        className="animate__animated animate__fadeInUp"
                      >
                        <td>{(page - 1) * ORDERS_PER_PAGE + index + 1}</td>
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

          {/* ===================
              Pagination part
          =================== */}
          {totalPages > 1 && (
            <nav className="d-flex justify-content-center mt-4">
              <ul className="pagination pagination-lg">
                <li className={`page-item${page === 1 ? " disabled" : ""}`}>
                  <button
                    className="page-link"
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                  >
                    &laquo;
                  </button>
                </li>
                {Array.from({ length: totalPages }, (_, i) => (
                  <li
                    key={i}
                    className={`page-item${page === i + 1 ? " active" : ""}`}
                  >
                    <button
                      className="page-link"
                      onClick={() => setPage(i + 1)}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}
                <li
                  className={`page-item${
                    page === totalPages ? " disabled" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => setPage(page + 1)}
                    disabled={page === totalPages}
                  >
                    &raquo;
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </>
      )}
    </section>
  );
};

export default MyOrders;
