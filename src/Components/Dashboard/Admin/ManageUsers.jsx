import { toast } from "react-toastify";
import { LOCAL_BASE_URL } from "../../../config";
import { useUsers } from "../../../hooks/useUsers";
import { useAuth } from "../../../hooks/useAuth";

const ManageUsers = () => {
  const { token } = useAuth();
  const { users, refetch } = useUsers();

  const handleRoleChange = async (id, role) => {
    try {
      const res = await fetch(`${LOCAL_BASE_URL}/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ role }),
      });

      if (!res.ok) throw new Error("Failed to update role");
      toast.success("Role updated");
      refetch();
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      try {
        const res = await fetch(`${LOCAL_BASE_URL}/users/${id}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.ok) {
          toast.success("User deleted");
          refetch();
        } else {
          toast.error("Delete failed");
        }
      } catch (err) {
        toast.error("Delete failed");
      }
    }
  };

  return (
    <div className="container mt-4">
      <h2>Manage Users</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Email</th>
            <th>Name</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users?.map((user) => (
            <tr key={user?._id}>
              <td>{user?.email}</td>
              <td>{user?.name}</td>
              <td>{user?.role}</td>
              <td>
                {user?.role !== "admin" && (
                  <button
                    className="btn btn-sm btn-success me-2"
                    onClick={() => handleRoleChange(user?._id, "admin")}
                  >
                    Make Admin
                  </button>
                )}
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(user?._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
