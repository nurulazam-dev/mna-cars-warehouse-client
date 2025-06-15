import React, { useState } from "react";
import { useItems } from "../../../../hooks/useItems";
import Loader from "../../../Shared/Loader/Loader";
import UpdateItemModal from "./UpdateItemModal";
import DeleteItemModal from "./DeleteItemModal";
import { Button } from "react-bootstrap";

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

  if (loading) return <Loader />;

  return (
    <div className="container my-4 p-4 shadow bg-white rounded">
      <h2 className="text-center mb-4 text-primary fw-bold">Manage Items</h2>

      {items?.length === 0 ? (
        <p className="text-center text-danger">No items found.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped align-middle table-hover">
            <thead className="table-dark">
              <tr>
                <th>No</th>
                <th>Item Img</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Seller</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items?.map((item, index) => (
                <tr key={item?._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={item?.img}
                      alt={item?.name}
                      width="50"
                      height="40"
                      style={{ objectFit: "cover", borderRadius: "5px" }}
                    />
                  </td>
                  <td>{item?.name}</td>
                  <td>${item?.price}</td>
                  <td>{item?.quantity}</td>
                  <td>{item?.sellerEmail}</td>
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
    </div>
  );
};

export default ManageItems;
