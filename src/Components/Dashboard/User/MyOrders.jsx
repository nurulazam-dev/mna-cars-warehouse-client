import { useState, useMemo } from "react";
import { useMyOrders } from "../../../hooks/useMyOrders";
import { formatDate } from "../../../utils/formatDate";
import { getOrderStatusColor } from "../../../utils/getOrderStatusColor";
import Loader from "../../Shared/Loader/Loader";
import { useMyOrdersStatistics } from "../../../hooks/statisticsData";
import { Table } from "react-bootstrap";

const MyOrders = () => {
  const ORDERS_PER_PAGE = 5;
  const { myOrders, loading } = useMyOrders();
  const {
    totalMyOrders,
    totalMyOrderQty,
    totalMyOrderAmount,
    pendingMyOrder,
    processingMyOrder,
    completedMyOrder,
    cancelledMyOrder,
  } = useMyOrdersStatistics();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [_id, setId] = useState("");
  const [date, setDate] = useState("");
  const [page, setPage] = useState(1);

  const filteredOrders = useMemo(() => {
    return (myOrders || [])
      .filter((order) =>
        search
          ? order.items.some((item) =>
              item.title
                ?.toLowerCase()
                .replace(/\s+/g, "")
                .includes(search.toLowerCase().replace(/\s+/g, ""))
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
  }, [myOrders, search, _id, status, date]);

  const totalPages = Math.ceil(filteredOrders.length / ORDERS_PER_PAGE);
  const paginatedOrders = filteredOrders.slice(
    (page - 1) * ORDERS_PER_PAGE,
    page * ORDERS_PER_PAGE
  );

  const statusOptions = useMemo(
    () =>
      Array.from(new Set((myOrders || []).map((order) => order.status))).filter(
        Boolean
      ),
    [myOrders]
  );

  const handleFilterChange = (setter) => (e) => {
    setter(e.target.value);
    setPage(1);
  };

  return (
    <section className="container animate__animated animate__fadeIn">
      <h2 className="text-center mb-2 text-primary fw-bold">My Orders</h2>

      {/* =========================
          Statistics Overview
      ========================== */}
      <div className="row text-center g-3 mb-4">
        <div className="col-md-4">
          <div className="bg-white rounded shadow-sm p-3">
            <h6 className="text-primary mb-1">
              Total Orders:{" "}
              <span className="fw-bold text-success">{totalMyOrders}</span>
            </h6>
          </div>
        </div>

        <div className="col-md-4">
          <div className="bg-white rounded shadow-sm p-3">
            <h6 className="text-primary mb-1">
              Total Orders Quantity:{" "}
              <span className="fw-bold text-success">{totalMyOrderQty}</span>
            </h6>
          </div>
        </div>
        <div className="col-md-4">
          <div className="bg-white rounded shadow-sm p-3">
            <h6 className="mb-1 text-primary">
              Total Paid:{" "}
              <span className="fw-bold text-success">
                $ {totalMyOrderAmount?.toLocaleString()}
              </span>
            </h6>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="rounded shadow-sm p-2 bg-warning bg-opacity-25 text-warning text-center">
            Pending: {pendingMyOrder}
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="rounded shadow-sm p-2 bg-info bg-opacity-25 text-info text-center">
            Processing: {processingMyOrder}
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="rounded shadow-sm p-2 bg-success bg-opacity-25 text-success text-center">
            Completed: {completedMyOrder}
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="rounded shadow-sm p-2 bg-danger bg-opacity-25 text-danger text-center">
            Cancelled: {cancelledMyOrder}
          </div>
        </div>
      </div>

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
            <Table
              striped
              bordered
              hover
              responsive
              className="shadow-sm rounded animate__animated animate__fadeInUp"
            >
              <thead className="table-dark text-center">
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
                {paginatedOrders?.map((order, index) => {
                  const total = order?.items?.reduce(
                    (acc, item) =>
                      acc + (Number(item?.price) || 0) * (item?.quantity || 1),
                    0
                  );
                  return (
                    <tr
                      key={order?._id}
                      className="animate__animated animate__fadeInUp"
                    >
                      <td>{(page - 1) * ORDERS_PER_PAGE + index + 1}</td>
                      <td className="text-muted" style={{ fontSize: 14 }}>
                        {order?._id}
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
                      <td>
                        {order?.items?.reduce(
                          (acc, item) => acc + item.quantity,
                          0
                        )}
                      </td>
                      <td className="text-success fw-semibold">
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
                            fontWeight: "400",
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
            </Table>
          )}

          {/* ===================
              Pagination part
          =================== */}
          {totalPages > 1 && (
            <nav className="d-flex justify-content-center mt-4">
              <ul className="pagination pagination-md">
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
