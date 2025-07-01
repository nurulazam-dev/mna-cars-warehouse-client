import { useState, useMemo } from "react";
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
  const USERS_PER_PAGE = 5;

  // Filter states
  const [searchEmail, setSearchEmail] = useState("");
  const [searchName, setSearchName] = useState("");
  const [searchPhone, setSearchPhone] = useState("");
  const [searchAddress, setSearchAddress] = useState("");
  const [searchRole, setSearchRole] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [page, setPage] = useState(1);

  // Stats
  const totalUsers = users?.length || 0;
  const totalAdmins = users?.filter((u) => u.role === "admin").length || 0;
  const totalRegularUsers = users?.filter((u) => u.role === "user").length || 0;

  // Filtering
  const filteredUsers = useMemo(() => {
    return (users || [])
      .filter((user) =>
        searchEmail
          ? (user.email || "").toLowerCase().includes(searchEmail.toLowerCase())
          : true
      )
      .filter((user) =>
        searchName
          ? (user.name || "").toLowerCase().includes(searchName.toLowerCase())
          : true
      )
      .filter((user) =>
        searchPhone
          ? (user.phone || "").toLowerCase().includes(searchPhone.toLowerCase())
          : true
      )
      .filter((user) =>
        searchAddress
          ? (user.address || "")
              .toLowerCase()
              .includes(searchAddress.toLowerCase())
          : true
      )
      .filter((user) =>
        searchRole
          ? (user.role || "").toLowerCase() === searchRole.toLowerCase()
          : true
      )
      .filter((user) =>
        searchDate
          ? new Date(user.createdAt).toLocaleDateString() ===
            new Date(searchDate).toLocaleDateString()
          : true
      );
  }, [
    users,
    searchEmail,
    searchName,
    searchPhone,
    searchAddress,
    searchRole,
    searchDate,
  ]);

  // Pagination
  const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE);
  const paginatedUsers = filteredUsers.slice(
    (page - 1) * USERS_PER_PAGE,
    page * USERS_PER_PAGE
  );

  // Unique roles for filter dropdown
  const roleOptions = useMemo(
    () =>
      Array.from(new Set((users || []).map((user) => user.role))).filter(
        Boolean
      ),
    [users]
  );

  // Reset to page 1 when filters change
  const handleFilterChange = (setter) => (e) => {
    setter(e.target.value);
    setPage(1);
  };

  return (
    <section className="container animate__animated animate__fadeIn">
      <h2 className="text-center text-primary fw-bold mb-2">Manage Users</h2>

      {/* Statistics */}
      <div className="row text-center g-3 mb-4">
        <div className="col-md-4">
          <div className="bg-white rounded shadow-sm p-3">
            <h6 className="text-primary mb-1">
              Total Users:{" "}
              <span className="fw-bold text-success">{totalUsers}</span>
            </h6>
          </div>
        </div>
        <div className="col-md-4">
          <div className="bg-white rounded shadow-sm p-3">
            <h6 className="text-primary mb-1">
              Total Admins:{" "}
              <span className="fw-bold text-info">{totalAdmins}</span>
            </h6>
          </div>
        </div>
        <div className="col-md-4">
          <div className="bg-white rounded shadow-sm p-3">
            <h6 className="text-primary mb-1">
              Total Regular Users:{" "}
              <span className="fw-bold text-secondary">
                {totalRegularUsers}
              </span>
            </h6>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="row mb-4 g-2 justify-content-center">
        <div className="col-md-2">
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            value={searchEmail}
            onChange={handleFilterChange(setSearchEmail)}
          />
        </div>
        <div className="col-md-2">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={searchName}
            onChange={handleFilterChange(setSearchName)}
          />
        </div>
        <div className="col-md-2">
          <input
            type="text"
            className="form-control"
            placeholder="Phone"
            value={searchPhone}
            onChange={handleFilterChange(setSearchPhone)}
          />
        </div>
        <div className="col-md-2">
          <input
            type="text"
            className="form-control"
            placeholder="Address"
            value={searchAddress}
            onChange={handleFilterChange(setSearchAddress)}
          />
        </div>
        <div className="col-md-2">
          <select
            className="form-select"
            value={searchRole}
            onChange={handleFilterChange(setSearchRole)}
          >
            <option value="">All Roles</option>
            {roleOptions.map((role, i) => (
              <option key={i} value={role}>
                {role.charAt(0).toUpperCase() + role.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-2">
          <input
            type="date"
            className="form-control"
            value={searchDate}
            onChange={handleFilterChange(setSearchDate)}
          />
        </div>
      </div>

      {loading && <Loader />}

      {!loading && (
        <div>
          {paginatedUsers.length === 0 ? (
            <p className="text-center text-danger">No user found.</p>
          ) : (
            <Table
              striped
              bordered
              hover
              responsive
              className="shadow-sm rounded animate__animated animate__fadeInUp"
            >
              <thead className="table-dark text-center">
                <tr>
                  <th>#</th>
                  <th>Email</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Role</th>
                  <th>Registered</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedUsers.map((user, index) => (
                  <tr key={user?._id}>
                    <td>{(page - 1) * USERS_PER_PAGE + index + 1}</td>
                    <td>{user?.email}</td>
                    <td>{user?.name}</td>
                    <td>{user?.phone}</td>
                    <td>{user?.address}</td>
                    <td>{user?.role}</td>
                    <td>
                      {user?.createdAt
                        ? new Date(user.createdAt).toLocaleDateString()
                        : "Unknown"}
                    </td>
                    <td>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="me-2"
                        title="Update"
                        onClick={() => {
                          setSelectedUser(user);
                          setShowUpdate(true);
                        }}
                      >
                        <i className="bi bi-pencil-square"></i>
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        title="Delete"
                        onClick={() => {
                          setSelectedUser(user);
                          setShowDelete(true);
                        }}
                      >
                        <i className="bi bi-trash"></i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <nav className="d-flex justify-content-center mt-4">
              <ul className="pagination pagination-md">
                <li className={`page-item${page === 1 ? " disabled" : ""}`}>
                  <button
                    className="page-link"
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                  >
                    &laquo;
                  </button>
                </li>
                {Array.from({ length: totalPages }, (_, i) => (
                  <li
                    key={i}
                    className={`page-item${page === i + 1 ? " active" : ""}`}
                  >
                    <button
                      className="page-link"
                      onClick={() => setPage(i + 1)}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}
                <li
                  className={`page-item${
                    page === totalPages ? " disabled" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => setPage(page + 1)}
                    disabled={page === totalPages}
                  >
                    &raquo;
                  </button>
                </li>
              </ul>
            </nav>
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
