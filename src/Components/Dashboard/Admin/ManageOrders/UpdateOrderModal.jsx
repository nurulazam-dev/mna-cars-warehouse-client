import { useEffect } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { LOCAL_BASE_URL } from "../../../../config";
import { formatDate } from "../../../../utils/formatDate";

const UpdateOrderModal = ({ show, onHide, order, refetch }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (order) {
      reset({
        email: order.email || "",
        status: order.status || "Pending",
      });
    }
  }, [order, reset]);

  const onSubmit = async (data) => {
    try {
      if (!order?._id) {
        toast.error("Order ID is missing.");
        return;
      }

      const token = localStorage.getItem("token");

      const response = await fetch(`${LOCAL_BASE_URL}/orders/${order._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: data.status }),
      });

      const contentType = response.headers.get("content-type");

      if (!response.ok) {
        let errorMessage = "Failed to update order";

        if (contentType && contentType.includes("application/json")) {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        } else {
          const errorText = await response.text();
          console.error("Raw server response:", errorText);
        }

        throw new Error(errorMessage);
      }

      toast.success("Order updated successfully");
      refetch?.();
      onHide();
    } catch (err) {
      console.error("Update error:", err);
      toast.error(err.message || "Error updating order");
    }
  };

  const totalItems = order?.items?.length || 0;
  const totalPrice = order?.items?.reduce(
    (acc, item) => acc + (item?.price || 0),
    0
  );

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Update Order</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Label>Buyer Email</Form.Label>
              <Form.Control
                type="email"
                value={order?.email || ""}
                disabled
                readOnly
              />
            </Col>
            <Col md={6}>
              <Form.Label>Status</Form.Label>
              <Form.Select {...register("status", { required: true })}>
                <option value="Pending">Pending</option>
                <option value="Processing">Processing</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </Form.Select>
              {errors.status && (
                <small className="text-danger">Status is required</small>
              )}
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={4}>
              <Form.Label>Order ID</Form.Label>
              <Form.Control
                type="text"
                value={order?._id || ""}
                disabled
                readOnly
              />
            </Col>
            <Col md={4}>
              <Form.Label>Total Items</Form.Label>
              <Form.Control
                type="number"
                value={totalItems}
                disabled
                readOnly
              />
            </Col>
            <Col md={4}>
              <Form.Label>Ordered On</Form.Label>
              <Form.Control
                type="text"
                value={formatDate(order?.createdAt)}
                disabled
                readOnly
              />
            </Col>
          </Row>

          <Form.Label>Order Items</Form.Label>
          <ul className="list-group mb-3">
            {order?.items?.map((item, idx) => (
              <li
                key={item?.productId || idx}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>
                  <strong>{item?.title}</strong>{" "}
                  <span className="text-muted">({item?.brand})</span>
                </span>
                <span>
                  Qty: {item?.quantity || 1} | Price: ${item?.price}
                </span>
              </li>
            ))}
          </ul>

          <div className="d-flex justify-content-between">
            <span className="fw-semibold">Total Order Price:</span>
            <span className="text-success fw-bold">
              ${totalPrice?.toLocaleString()}
            </span>
          </div>

          <div className="text-end mt-4">
            <Button variant="secondary" onClick={onHide} className="me-2">
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Update
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default UpdateOrderModal;
