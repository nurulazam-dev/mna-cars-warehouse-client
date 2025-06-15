import { useEffect } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { LOCAL_BASE_URL } from "../../../../config";

const UpdateItemModal = ({ show, onHide, item, refetch }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: item,
  });

  useEffect(() => {
    reset(item);
  }, [item, reset]);

  const onSubmit = async (data) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${LOCAL_BASE_URL}/items/${item._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success("Item updated successfully");
        refetch();
        onHide();
      } else {
        toast.error("Failed to update item");
      }
    } catch (err) {
      toast.error("Error occurred while updating");
    }
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Update Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Label>Item Name</Form.Label>
              <Form.Control
                type="text"
                {...register("name", { required: true })}
              />
            </Col>
            <Col md={6}>
              <Form.Label>Seller Email</Form.Label>
              <Form.Control type="email" {...register("sellerEmail")} />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" {...register("price")} />
            </Col>
            <Col md={6}>
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="number" {...register("quantity")} />
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Image URL</Form.Label>
            <Form.Control type="text" {...register("img")} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} {...register("description")} />
          </Form.Group>

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

export default UpdateItemModal;
