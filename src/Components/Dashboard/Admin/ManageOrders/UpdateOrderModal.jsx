import { useEffect } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { LOCAL_BASE_URL } from "../../../../config";
import { formatDate } from "../../../../utils/formatDate";

const UpdateOrderModal = ({ show, onHide, order, refetch }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      status: order?.status || "Pending",
      email: order?.email || "",
    },
  });

  useEffect(() => {
    reset({
      status: order?.status || "Pending",
      email: order?.email || "",
    });
  }, [order, reset]);

  const onSubmit = async (data) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${LOCAL_BASE_URL}/orders/${order._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: data.status }),
      });

      if (res.ok) {
        toast.success("Order updated successfully");
        refetch();
        onHide();
      } else {
        const errData = await res.json();
        toast.error(errData.message || "Failed to update order");
      }
    } catch (err) {
      toast.error("Error updating order");
    }
  };

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
                {...register("email")}
                value={order?.email || ""}
                disabled
              />
            </Col>
            <Col md={6}>
              <Form.Label>Status</Form.Label>
              <Form.Select {...register("status")}>
                <option value="Pending">Pending</option>
                <option value="Processing">Processing</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </Form.Select>
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
              <Form.Label>Total Order</Form.Label>
              <Form.Control
                type="number"
                value={order?.items?.length || 0}
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

          <div className="text-end">
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
