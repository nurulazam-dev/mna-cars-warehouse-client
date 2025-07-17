import React from "react";
import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { BASE_URL } from "../../../../config";

const DeleteOrderModal = ({ show, onHide, order, refetch }) => {
  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${BASE_URL}/orders/${order._id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.ok) {
        toast.success("Order deleted successfully");
        refetch();
        onHide();
      } else {
        toast.error("Failed to delete order");
      }
    } catch (err) {
      toast.error("Error deleting order");
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure you want to delete this order?</p>
        <p className="fw-bold text-danger">Order ID: {order?._id}</p>
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

export default DeleteOrderModal;
