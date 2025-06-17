import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useAuth } from "../../hooks/useAuth";
import { LOCAL_BASE_URL } from "../../config";

const Settings = () => {
  const { user } = useAuth();

  const { register, handleSubmit, reset, setValue } = useForm();

  useEffect(() => {
    if (user) {
      setValue("email", user.email);
    }
  }, [user, setValue]);

  const onSubmit = async (data) => {
    if (data.newPassword !== data.confirmPassword) {
      toast.error("New Password and Confirm Password do not match");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${LOCAL_BASE_URL}/users/${user._id}/settings`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          email: data.email,
          currentPassword: data.currentPassword,
          newPassword: data.newPassword,
        }),
      });

      if (res.ok) {
        toast.success("Profile updated successfully!");
        reset();
        setValue("email", data.email);
      } else {
        const errData = await res.json();
        toast.error(errData.message || "Failed to update");
      }
    } catch (err) {
      toast.error("Error updating settings");
    }
  };

  return (
    <div className="container">
      <h2 className="text-center text-primary mb-2">Account Settings</h2>

      <div className="card shadow-sm border-0 p-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <h5 className="mb-3 text-secondary fw-bold">Update Email</h5>
            <input
              className="form-control form-control-lg"
              type="email"
              {...register("email", { required: true })}
              placeholder="Email Address"
            />
          </div>

          <div className="mb-4 border-top pt-4">
            <h5 className="mb-3 text-secondary fw-bold">Change Password</h5>

            <div className="row">
              <div className="col-md-4 mb-3">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  {...register("currentPassword", { required: true })}
                  placeholder="Current Password"
                />
              </div>

              <div className="col-md-4 mb-3">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  {...register("newPassword", { required: true })}
                  placeholder="New Password"
                />
              </div>

              <div className="col-md-4 mb-3">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  {...register("confirmPassword", { required: true })}
                  placeholder="Confirm New Password"
                />
              </div>
            </div>
          </div>

          <div className="text-end">
            <button type="submit" className="btn btn-primary btn-lg px-5">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
