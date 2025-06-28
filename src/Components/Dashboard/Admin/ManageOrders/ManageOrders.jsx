import { useState, useMemo } from "react";
import { useAllOrders } from "../../../../hooks/useAllOrders";
import { Button } from "react-bootstrap";
import Loader from "../../../Shared/Loader/Loader";
import UpdateOrderModal from "./UpdateOrderModal";
import DeleteOrderModal from "./DeleteOrderModal";
import { getOrderStatusColor } from "../../../../utils/getOrderStatusColor";
import { formatDate } from "../../../../utils/formatDate";

const ORDERS_PER_PAGE = 5;

const ManageOrders = () => {
  const { orders, loading, refetch } = useAllOrders();
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  // Filter states
  const [search, setSearch] = useState("");
  const [orderId, setOrderId] = useState("");
  const [buyer, setBuyer] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const [page, setPage] = useState(1);

  // Stats calculations
  const {
    totalOrders,
    uniqueBuyers,
    totalQty,
    totalSales,
    pendingCount,
    processingCount,
    completedCount,
    cancelledCount,
  } = useMemo(() => {
    const totalOrders = orders?.length || 0;
    const uniqueBuyers = new Set(orders?.map((o) => o.email)).size || 0;
    let totalQty = 0;
    let totalSales = 0;
    let pendingCount = 0;
    let processingCount = 0;
    let completedCount = 0;
    let cancelledCount = 0;

    (orders || []).forEach((order) => {
      totalQty += order?.items?.length || 0;
      totalSales += (order?.items || []).reduce(
        (sum, item) => sum + (Number(item?.price) || 0),
        0
      );
      const status = order?.status?.toLowerCase();
      if (status === "pending") pendingCount++;
      else if (status === "processing") processingCount++;
      else if (status === "completed") completedCount++;
      else if (status === "cancelled") cancelledCount++;
    });

    return {
      totalOrders,
      uniqueBuyers,
      totalQty,
      totalSales,
      pendingCount,
      processingCount,
      completedCount,
      cancelledCount,
    };
  }, [orders]);

  const filteredOrders = useMemo(() => {
    return (orders || [])
      .filter((order) =>
        search
          ? order.items?.some((item) =>
              item?.title?.toLowerCase().includes(search.toLowerCase())
            )
          : true
      )
      .filter((order) =>
        orderId
          ? String(order._id)?.toLowerCase().includes(orderId.toLowerCase())
          : true
      )
      .filter((order) =>
        buyer ? order.email?.toLowerCase().includes(buyer.toLowerCase()) : true
      )
      .filter((order) =>
        status ? order.status?.toLowerCase() === status.toLowerCase() : true
      )
      .filter((order) =>
        date ? formatDate(order.createdAt) === formatDate(date) : true
      );
  }, [orders, search, orderId, buyer, status, date]);

  const totalPages = Math.ceil(filteredOrders.length / ORDERS_PER_PAGE);
  const paginatedOrders = filteredOrders.slice(
    (page - 1) * ORDERS_PER_PAGE,
    page * ORDERS_PER_PAGE
  );

  const statusOptions = useMemo(() => {
    return Array.from(
      new Set((orders || []).map((order) => order.status))
    ).filter(Boolean);
  }, [orders]);

  const handleFilterChange = (setter) => (e) => {
    setter(e.target.value);
    setPage(1);
  };

  return (
    <section className="container animate__animated animate__fadeIn">
      <h2 className="text-center text-primary fw-bold mb-2">Manage Orders</h2>

      {/* =========================
          Statistics Overview
      ========================== */}
      <div className="row text-center g-3 mb-4">
        <div className="col-md-3">
          <div className="bg-light rounded shadow-sm p-3">
            <h6 className="text-primary mb-1">
              Total Orders:{" "}
              <span className="fw-bold text-success">{totalOrders}</span>
            </h6>
          </div>
        </div>
        <div className="col-md-3">
          <div className="bg-light rounded shadow-sm p-3">
            <h6 className="text-primary mb-1">
              Unique Buyers:{" "}
              <span className="fw-bold text-success">{uniqueBuyers}</span>
            </h6>
          </div>
        </div>
        <div className="col-md-3">
          <div className="bg-light rounded shadow-sm p-3">
            <h6 className="text-primary mb-1">
              Total Items:{" "}
              <span className="fw-bold text-success">{totalQty}</span>
            </h6>
          </div>
        </div>
        <div className="col-md-3">
          <div className="bg-light rounded shadow-sm p-3">
            <h6 className="mb-1 text-primary">
              Total Sales:{" "}
              <span className="fw-bold text-success">
                $ {totalSales.toLocaleString()}
              </span>
            </h6>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="rounded shadow-sm p-2 bg-warning bg-opacity-25 text-warning text-center">
            Pending: {pendingCount}
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="rounded shadow-sm p-2 bg-info bg-opacity-25 text-info text-center">
            Processing: {processingCount}
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="rounded shadow-sm p-2 bg-success bg-opacity-25 text-success text-center">
            Completed: {completedCount}
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="rounded shadow-sm p-2 bg-danger bg-opacity-25 text-danger text-center">
            Cancelled: {cancelledCount}
          </div>
        </div>
      </div>

      {/* =========================
              Filters
      ========================== */}
      <div className="row mb-4 justify-content-center">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by item title"
            value={search}
            onChange={handleFilterChange(setSearch)}
          />
        </div>
        <div className="col-md-2">
          <input
            type="text"
            className="form-control"
            placeholder="Order ID"
            value={orderId}
            onChange={handleFilterChange(setOrderId)}
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Buyer Email"
            value={buyer}
            onChange={handleFilterChange(setBuyer)}
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

      {loading && <Loader />}
      {!loading && (
        <>
          {paginatedOrders.length === 0 ? (
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
                  {paginatedOrders.map((order, index) => {
                    const total = order?.items?.reduce(
                      (acc, item) => acc + (item?.price || 0),
                      0
                    );
                    return (
                      <tr
                        key={order?._id}
                        className="animate__animated animate__fadeInUp"
                      >
                        <td>{(page - 1) * ORDERS_PER_PAGE + index + 1}</td>
                        <td className="text-muted" style={{ fontSize: 13 }}>
                          ...{order?._id?.slice(-8).toUpperCase()}
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
                                  {idx + 1}. {item?.title || "Untitled Item"}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </td>
                        <td>{order?.email}</td>
                        <td>{order?.items?.length || 0}</td>
                        <td className="text-success fw-semibold">
                          ${Number(total || 0).toLocaleString()}
                        </td>
                        <td>
                          <span
                            className="badge px-3 py-2 rounded-pill"
                            style={{
                              backgroundColor: `${getOrderStatusColor(
                                order?.status
                              )}20`,
                              color: getOrderStatusColor(order?.status),
                              fontWeight: "500",
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
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
          {/* Pagination part */}
          {totalPages > 1 && (
            <nav className="d-flex justify-content-center mt-2">
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

      {/* Modals */}
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
