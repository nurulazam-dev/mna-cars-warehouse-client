import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { LOCAL_BASE_URL } from "../../config";
import { useUsers } from "../../hooks/useUsers";
import { formatDate } from "../../utils/formatDate";

const Profile = () => {
  const { users } = useUsers();
  const { user, refetchUser } = useAuth();

  const activatedUser = users?.find((u) => u?.email === user?.email);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  useEffect(() => {
    if (user) {
      reset({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        address: user.address || "",
      });
    }
  }, [user, reset]);

  const onSubmit = async (formData) => {
    const userId = user?._id || user?.id;

    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${LOCAL_BASE_URL}/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Failed to update profile");
      }

      toast.success("Profile updated successfully");
      refetchUser();
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  };

  return (
    <section className="container">
      <h2 className="text-center text-primary mb-2">My Profile</h2>

      {/* Profile Overview */}
      <div className="card shadow-sm mb-4 border-0">
        <div className="card-body p-4 text-center">
          <div className="row">
            <div className="col-md-4 d-flex flex-column align-items-center position-relative">
              <div
                className="position-relative"
                style={{ width: "120px", height: "120px" }}
              >
                <img
                  // src={activatedUser?.img}
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="User Avatar"
                  className="rounded-circle img-fluid shadow"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <span
                  className={`badge position-absolute top-0 end-0 translate-right p-2 border border-light rounded-circle ${
                    activatedUser?.role === "admin"
                      ? "bg-success"
                      : "bg-primary"
                  }`}
                  style={{ fontSize: "0.60rem" }}
                  title={`Role: ${activatedUser?.role || "User"}`}
                >
                  {activatedUser?.role?.toUpperCase() || "USER"}
                </span>
              </div>

              <h5 className="text-muted mt-1 mb-1">
                {activatedUser?.email || "N/A"}
              </h5>
            </div>

            <div className="col-md-8">
              <ul className="list-group list-group-flush text-start">
                <li className="list-group-item">
                  <strong>Name:</strong> {activatedUser?.name || "Unnamed User"}
                </li>
                <li className="list-group-item">
                  <strong>Phone:</strong> {activatedUser?.phone || "N/A"}
                </li>
                <li className="list-group-item">
                  <strong>Address:</strong>{" "}
                  {activatedUser?.address || "Not set"}
                </li>
                <li className="list-group-item">
                  <strong>Joined:</strong>{" "}
                  {formatDate(activatedUser.createdAt) || "Unknown"}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Update Form */}
      <div className="card shadow">
        <div className="card-body">
          <h5 className="mb-4">Update Your Profile</h5>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Name</label>
                <input
                  className="form-control"
                  placeholder="Full Name"
                  required
                  {...register("name", { required: "Name is required" })}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Email</label>
                <input
                  className="form-control"
                  type="email"
                  readOnly
                  {...register("email")}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Phone</label>
                <input
                  className="form-control"
                  placeholder="Phone Number"
                  required
                  {...register("phone", { required: "Phone is required" })}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Address</label>
                <input
                  className="form-control"
                  placeholder="Address"
                  required
                  {...register("address", { required: "Address is required" })}
                />
              </div>
            </div>

            <div className="text-end">
              <button
                type="submit"
                className="btn btn-primary px-4"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Updating..." : "Update Profile"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Profile;
