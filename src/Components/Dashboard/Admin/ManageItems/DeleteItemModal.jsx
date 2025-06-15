import React from "react";
import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { LOCAL_BASE_URL } from "../../../../config";

const DeleteItemModal = ({ show, onHide, item, refetch }) => {
  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${LOCAL_BASE_URL}/items/${item._id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        toast.success("Item deleted successfully");
        refetch();
        onHide();
      } else {
        toast.error("Failed to delete item");
      }
    } catch (err) {
      toast.error("Error occurred while deleting");
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete <strong>{item?.name}</strong>?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteItemModal;
