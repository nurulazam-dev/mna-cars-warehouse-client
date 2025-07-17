import { useEffect } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { BASE_URL } from "../../../../config";

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

      const payload = {
        ...data,
        price: data.price ? Number(data.price) : 0,
        quantity: data.quantity ? Number(data.quantity) : 0,
        year: data.year ? Number(data.year) : undefined,
      };
      const res = await fetch(`${BASE_URL}/items/${item._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
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
            <Col md={4}>
              <Form.Label>Item Name</Form.Label>
              <Form.Control
                type="text"
                {...register("name", { required: true })}
              />
            </Col>
            <Col md={4}>
              <Form.Label>Color</Form.Label>
              <Form.Control type="text" {...register("color")} />
            </Col>
            <Col md={4}>
              <Form.Label>Supplier Email</Form.Label>
              <Form.Control type="email" {...register("supplierEmail")} />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={4}>
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" {...register("price")} />
            </Col>
            <Col md={4}>
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="number" {...register("quantity")} />
            </Col>
            <Col md={4}>
              <Form.Label>Brand</Form.Label>
              <Form.Control type="text" {...register("brand")} />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={4}>
              <Form.Label>Image URL</Form.Label>
              <Form.Control type="text" {...register("img")} />
            </Col>
            <Col md={4}>
              <Form.Label>Mileage</Form.Label>
              <Form.Control type="text" {...register("mileage")} />
            </Col>

            <Col md={4}>
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" {...register("location")} />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={4}>
              <Form.Label>Transmission</Form.Label>
              <Form.Select {...register("transmission")}>
                <option value="">-- Select Transmission --</option>
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
                <option value="Semi-Automatic">Semi-Automatic</option>
              </Form.Select>
            </Col>
            <Col md={4}>
              <Form.Label>Badge</Form.Label>
              <Form.Select {...register("badge")}>
                <option value="">-- Select Badge --</option>
                <option value="New Arrival">New Arrival</option>
                <option value="Featured">Featured</option>
                <option value="Hot Deal">Hot Deal</option>
                <option value="Special">Special</option>
              </Form.Select>
            </Col>
            <Col md={4}>
              <Form.Label>Year</Form.Label>
              <Form.Control type="number" {...register("year")} />
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Specifications</Form.Label>
            <Row>
              {[0, 1, 2, 3].map((i) => (
                <Col md={3} className="mb-2" key={i}>
                  <Form.Control
                    type="text"
                    placeholder={`Specification ${i + 1}`}
                    {...register(`specs.${i}`)}
                  />
                </Col>
              ))}
            </Row>
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
