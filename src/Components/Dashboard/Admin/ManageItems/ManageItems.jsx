import React, { useState, useMemo } from "react";
import UpdateItemModal from "./UpdateItemModal";
import DeleteItemModal from "./DeleteItemModal";
import { Button, Table } from "react-bootstrap";
import { useItems } from "../../../../hooks/useItems";
import Loader from "../../../Shared/Loader/Loader.jsx";

const ManageItems = () => {
  const { items, loading, refetch } = useItems();
  const ITEMS_PER_PAGE = 5;

  const [selectedItem, setSelectedItem] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Filter states
  const [searchName, setSearchName] = useState("");
  const [searchBrand, setSearchBrand] = useState("");
  const [searchYear, setSearchYear] = useState("");
  const [searchColor, setSearchColor] = useState("");
  const [searchTransmission, setSearchTransmission] = useState("");
  const [searchSupplier, setSearchSupplier] = useState("");
  const [page, setPage] = useState(1);

  // Stats
  const totalItems = items?.length || 0;
  console.log(items);

  const totalQty = items?.reduce((acc, item) => acc + (item.quantity || 0), 0);
  const totalBrands = useMemo(
    () => new Set((items || []).map((item) => item.brand)).size,
    [items]
  );
  const totalSuppliers = useMemo(
    () => new Set((items || []).map((item) => item.supplierEmail)).size,
    [items]
  );

  // Filtering
  const filteredItems = useMemo(() => {
    return (items || [])
      .filter((item) =>
        searchName
          ? (item.name || "").toLowerCase().includes(searchName.toLowerCase())
          : true
      )
      .filter((item) =>
        searchBrand
          ? (item.brand || "").toLowerCase().includes(searchBrand.toLowerCase())
          : true
      )
      .filter((item) =>
        searchYear ? String(item.year || "").includes(searchYear) : true
      )
      .filter((item) =>
        searchColor
          ? (item.color || "").toLowerCase().includes(searchColor.toLowerCase())
          : true
      )
      .filter((item) =>
        searchTransmission
          ? (item.transmission || "")
              .toLowerCase()
              .includes(searchTransmission.toLowerCase())
          : true
      )
      .filter((item) =>
        searchSupplier
          ? (item.supplierEmail || "")
              .toLowerCase()
              .includes(searchSupplier.toLowerCase())
          : true
      );
  }, [
    items,
    searchName,
    searchBrand,
    searchYear,
    searchColor,
    searchTransmission,
    searchSupplier,
  ]);

  // Pagination
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const paginatedItems = filteredItems.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  // Reset to page 1 when filters change
  const handleFilterChange = (setter) => (e) => {
    setter(e.target.value);
    setPage(1);
  };

  return (
    <section className="container animate__animated animate__fadeIn">
      <h2 className="text-center mb-2 text-primary fw-bold">Manage Items</h2>

      {/* Statistics */}
      <div className="row text-center g-3 mb-4">
        <div className="col-md-3">
          <div className="bg-white rounded shadow-sm p-3">
            <h6 className="text-primary mb-1">
              Total Items:{" "}
              <span className="fw-bold text-success">{totalItems}</span>
            </h6>
          </div>
        </div>
        <div className="col-md-3">
          <div className="bg-white rounded shadow-sm p-3">
            <h6 className="text-primary mb-1">
              Total Quantity:{" "}
              <span className="fw-bold text-info">{totalQty}</span>
            </h6>
          </div>
        </div>
        <div className="col-md-3">
          <div className="bg-white rounded shadow-sm p-3">
            <h6 className="text-primary mb-1">
              Brands:{" "}
              <span className="fw-bold text-secondary">{totalBrands}</span>
            </h6>
          </div>
        </div>
        <div className="col-md-3">
          <div className="bg-white rounded shadow-sm p-3">
            <h6 className="text-primary mb-1">
              Suppliers:{" "}
              <span className="fw-bold text-warning">{totalSuppliers}</span>
            </h6>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="row mb-4 g-2 justify-content-center">
        <div className="col-md-2">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={searchName}
            onChange={handleFilterChange(setSearchName)}
          />
        </div>
        <div className="col-md-2">
          <input
            type="text"
            className="form-control"
            placeholder="Brand"
            value={searchBrand}
            onChange={handleFilterChange(setSearchBrand)}
          />
        </div>
        <div className="col-md-2">
          <input
            type="text"
            className="form-control"
            placeholder="Year"
            value={searchYear}
            onChange={handleFilterChange(setSearchYear)}
          />
        </div>
        <div className="col-md-2">
          <input
            type="text"
            className="form-control"
            placeholder="Color"
            value={searchColor}
            onChange={handleFilterChange(setSearchColor)}
          />
        </div>
        <div className="col-md-2">
          <input
            type="text"
            className="form-control"
            placeholder="Transmission"
            value={searchTransmission}
            onChange={handleFilterChange(setSearchTransmission)}
          />
        </div>
        <div className="col-md-2">
          <input
            type="text"
            className="form-control"
            placeholder="Supplier Email"
            value={searchSupplier}
            onChange={handleFilterChange(setSearchSupplier)}
          />
        </div>
      </div>

      {loading && <Loader />}

      {!loading && (
        <div>
          {paginatedItems.length === 0 ? (
            <p className="text-center text-danger">No items found.</p>
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
                  <th>Name</th>
                  <th>Brand</th>
                  <th>Year</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Color</th>
                  <th>Transmission</th>
                  <th>Supplier</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedItems.map((item, index) => (
                  <tr key={item?._id}>
                    <td>{(page - 1) * ITEMS_PER_PAGE + index + 1}</td>
                    <td style={{ fontSize: 14 }}>{item?.name}</td>
                    <td style={{ fontSize: 14 }}>{item?.brand}</td>
                    <td style={{ fontSize: 14 }}>{item?.year}</td>
                    <td style={{ fontSize: 14 }}>${item?.price}</td>
                    <td style={{ fontSize: 14 }}>{item?.quantity}</td>
                    <td style={{ fontSize: 14 }}>{item?.color}</td>
                    <td>{item?.transmission}</td>
                    <td>{item?.supplierEmail}</td>
                    <td>
                      <div className="d-flex gap-2">
                        <Button
                          size="sm"
                          variant="secondary"
                          title="Update"
                          onClick={() => {
                            setSelectedItem(item);
                            setShowUpdateModal(true);
                          }}
                        >
                          <i className="bi bi-pencil-square"></i>
                        </Button>
                        <Button
                          size="sm"
                          variant="danger"
                          title="Delete"
                          onClick={() => {
                            setSelectedItem(item);
                            setShowDeleteModal(true);
                          }}
                        >
                          <i className="bi bi-trash"></i>
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}

          {/* Pagination */}
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
        </div>
      )}

      {/* Modals */}
      <UpdateItemModal
        show={showUpdateModal}
        onHide={() => setShowUpdateModal(false)}
        item={selectedItem}
        refetch={refetch}
      />

      <DeleteItemModal
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        item={selectedItem}
        refetch={refetch}
      />
    </section>
  );
};

export default ManageItems;
