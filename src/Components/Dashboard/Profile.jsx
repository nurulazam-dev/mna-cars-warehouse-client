import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { LOCAL_BASE_URL } from "../../config";

const Profile = () => {
  const { user, refetchUser } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (user) {
      reset({
        name: user?.name || "",
        email: user?.email || "",
        phone: user?.phone || "",
      });
    }
  }, [user, reset]);

  const onSubmit = async (data) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${LOCAL_BASE_URL}/users/${user._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success("Profile updated successfully!");
        refetchUser();
      } else {
        toast.error("Failed to update profile");
      }
    } catch (err) {
      toast.error("Error updating profile");
    }
  };

  return (
    <div className="container">
      <h2 className="text-center text-primary mb-2">My Profile</h2>

      {/*  user info */}
      <div className="card shadow mb-4">
        <div className="card-body d-flex align-items-center flex-wrap">
          <div className="me-4">
            <img
              src="https://i.ibb.co/2S5NQHd/avatar.png"
              alt="profile"
              className="rounded-circle"
              width="120"
              height="120"
            />
          </div>
          <div>
            <h4 className="mb-1">{user?.name}</h4>
            <p className="mb-1">
              <strong>Email:</strong> {user?.email}
            </p>
            <p className="mb-1">
              <strong>Role:</strong> {user?.role}
            </p>
            <p className="mb-1">
              <strong>Phone:</strong> {user?.phone || "N/A"}
            </p>
          </div>
        </div>
      </div>

      {/*  update form */}
      <div className="card shadow">
        <div className="card-body">
          <h5 className="mb-4">Update Your Profile</h5>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Name</label>
                <input
                  className="form-control"
                  {...register("name", { required: true })}
                  placeholder="Full Name"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Email</label>
                <input
                  className="form-control"
                  type="email"
                  {...register("email", { required: true })}
                  readOnly
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Phone</label>
                <input
                  className="form-control"
                  type="text"
                  {...register("phone")}
                  placeholder="Phone Number"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Address</label>
                <input
                  className="form-control"
                  type="text"
                  {...register("address")}
                  placeholder="Address"
                />
              </div>
            </div>

            <div className="text-end">
              <button type="submit" className="btn btn-primary px-4">
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
