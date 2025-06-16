import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { LOCAL_BASE_URL } from "../../../../config";

const DeleteUserModal = ({ show, onHide, user, token, refetch }) => {
  const handleDelete = async () => {
    try {
      const res = await fetch(`${LOCAL_BASE_URL}/users/${user._id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error("Failed to delete user");

      toast.success("User deleted");
      refetch();
      onHide();
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure you want to delete user:</p>
        <h5>{user?.email}</h5>
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

export default DeleteUserModal;
