import { useEffect } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { LOCAL_BASE_URL } from "../../../../config";

const UpdateOrderModal = ({ show, onHide, order, refetch }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: order,
  });

  useEffect(() => {
    reset(order);
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
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success("Order updated successfully");
        refetch();
        onHide();
      } else {
        toast.error("Failed to update order");
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
              <Form.Label>Item Name</Form.Label>
              <Form.Control type="text" {...register("itemName")} disabled />
            </Col>
            <Col md={6}>
              <Form.Label>Buyer Email</Form.Label>
              <Form.Control type="email" {...register("email")} disabled />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="number" {...register("quantity")} />
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
