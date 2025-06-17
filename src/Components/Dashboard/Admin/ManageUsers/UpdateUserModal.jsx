import { useEffect } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { LOCAL_BASE_URL } from "../../../../config";

const UpdateUserModal = ({ show, onHide, user, token, refetch }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: user,
  });

  useEffect(() => {
    reset(user);
  }, [user, reset]);

  const onSubmit = async (data) => {
    const userId = user?._id || user?.id;

    try {
      const res = await fetch(`${LOCAL_BASE_URL}/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      const resData = await res.json();
      if (!res.ok) throw new Error(resData.message || "Failed to update user");
      toast.success(resData.message || "User updated successfully");
      refetch();
      onHide();
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Update User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                {...register("email", { required: true })}
                disabled
              />
            </Col>
            <Col md={6}>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                {...register("name", { required: true })}
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={4}>
              <Form.Label>Role</Form.Label>
              <Form.Select {...register("role", { required: true })}>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </Form.Select>
            </Col>
            <Col md={4}>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                {...register("phone", { required: true })}
              />
            </Col>
            <Col md={4}>
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                {...register("address", { required: true })}
              />
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

export default UpdateUserModal;
