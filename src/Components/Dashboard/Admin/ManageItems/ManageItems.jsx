import React, { useState } from "react";
import UpdateItemModal from "./UpdateItemModal";
import DeleteItemModal from "./DeleteItemModal";
import { Button } from "react-bootstrap";
import { useItems } from "../../../../hooks/useItems";
import Loader from "../../../Shared/Loader/Loader.jsx";

const ManageItems = () => {
  const { items, loading, refetch } = useItems();

  const [selectedItem, setSelectedItem] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const openUpdateModal = (item) => {
    setSelectedItem(item);
    setShowUpdateModal(true);
  };

  const openDeleteModal = (item) => {
    setSelectedItem(item);
    setShowDeleteModal(true);
  };

  return (
    <section className="container">
      <h2 className="text-center mb-2 text-primary fw-bold">Manage Items</h2>
      {loading && <Loader />}

      {!loading && (
        <div>
          {items?.length === 0 ? (
            <p className="text-center text-danger">No items found.</p>
          ) : (
            <div className="table-responsive">
              <table className="table table-striped align-middle table-hover">
                <thead className="table-dark">
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
                  {items?.map((item, index) => (
                    <tr key={item?._id}>
                      <td>{index + 1}</td>

                      <td>{item?.name}</td>
                      <td>{item?.brand}</td>
                      <td>{item?.year}</td>
                      <td>${item?.price}</td>
                      <td>{item?.quantity}</td>
                      <td>{item?.color}</td>
                      <td>{item?.transmission}</td>
                      <td>{item?.supplierEmail}</td>
                      <td>
                        <div className="d-flex gap-2">
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={() => openUpdateModal(item)}
                          >
                            Update
                          </Button>
                          <Button
                            size="sm"
                            variant="danger"
                            onClick={() => openDeleteModal(item)}
                          >
                            Delete
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
