import { useState } from "react";
import { useUsers } from "../../../../hooks/useUsers";
import { useAuth } from "../../../../hooks/useAuth";
import { Table, Button } from "react-bootstrap";
import UpdateUserModal from "./UpdateUserModal";
import DeleteUserModal from "./DeleteUserModal";
import Loader from "../../../Shared/Loader/Loader";

const ManageUsers = () => {
  const { token } = useAuth();
  const { users, loading, refetch } = useUsers();
  const [selectedUser, setSelectedUser] = useState(null);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const handleOpenUpdate = (user) => {
    setSelectedUser(user);
    setShowUpdate(true);
  };

  const handleOpenDelete = (user) => {
    setSelectedUser(user);
    setShowDelete(true);
  };

  return (
    <section className="container">
      <h2 className="text-center text-primary fw-bold mb-2">Manage Users</h2>
      {loading && <Loader />}

      {!loading && (
        <div>
          {users?.length === 0 ? (
            <p className="text-center text-danger">No user found.</p>
          ) : (
            <Table striped bordered hover responsive>
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Email</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {users?.map((user, index) => (
                  <tr key={user?._id}>
                    <td>{index + 1}</td>
                    <td>{user?.email}</td>
                    <td>{user?.name}</td>
                    <td>{user?.phone}</td>
                    <td>{user?.role}</td>
                    <td>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="me-2"
                        onClick={() => handleOpenUpdate(user)}
                      >
                        Update
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleOpenDelete(user)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </div>
      )}

      {/* Modals */}
      {selectedUser && (
        <>
          <UpdateUserModal
            show={showUpdate}
            onHide={() => setShowUpdate(false)}
            user={selectedUser}
            token={token}
            refetch={refetch}
          />
          <DeleteUserModal
            show={showDelete}
            onHide={() => setShowDelete(false)}
            user={selectedUser}
            token={token}
            refetch={refetch}
          />
        </>
      )}
    </section>
  );
};

export default ManageUsers;
