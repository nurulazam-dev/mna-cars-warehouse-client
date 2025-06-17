import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { LOCAL_BASE_URL } from "../../config";

const Profile = () => {
  const { user, refetchUser } = useAuth();
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
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="User Avatar"
                  className="rounded-circle img-fluid shadow"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <span
                  className={`badge position-absolute top-0 end-0 translate-right p-2 border border-light rounded-circle ${
                    user?.role === "admin" ? "bg-success" : "bg-primary"
                  }`}
                  style={{ fontSize: "0.60rem" }}
                  title={`Role: ${user?.role || "User"}`}
                >
                  {user?.role?.toUpperCase() || "USER"}
                </span>
              </div>

              <h5 className="text-muted mt-1 mb-1">{user?.email || "N/A"}</h5>
            </div>

            <div className="col-md-8">
              <ul className="list-group list-group-flush text-start">
                <li className="list-group-item">
                  <strong>Name:</strong> {user?.name || "Unnamed User"}
                </li>
                <li className="list-group-item">
                  <strong>Phone:</strong> {user?.phone || "N/A"}
                </li>
                <li className="list-group-item">
                  <strong>Address:</strong> {user?.address || "Not set"}
                </li>
                <li className="list-group-item">
                  <strong>Joined:</strong>{" "}
                  {user?.createdAt
                    ? new Date(user.createdAt).toLocaleDateString()
                    : "Unknown"}
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
                  {...register("phone")}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Address</label>
                <input
                  className="form-control"
                  placeholder="Address"
                  {...register("address")}
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
