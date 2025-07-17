import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useAuth } from "../../hooks/useAuth";
import { BASE_URL } from "../../config";

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
      toast.error("Passwords do not match.");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const userId = user._id || user.id;

      const res = await fetch(`${BASE_URL}/users/${userId}/settings`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          newPassword: data.newPassword,
        }),
      });

      const result = await res.json();

      if (res.ok) {
        toast.success("Password updated successfully.");
        reset({ newPassword: "", confirmPassword: "", email: user.email });
      } else {
        toast.error(result.message || "Failed to update password.");
      }
    } catch (error) {
      toast.error("An error occurred while updating password.");
    }
  };

  return (
    <section className="container animate__animated animate__fadeIn">
      <h2 className="text-center text-primary mb-2 fw-bold">
        Account Settings
      </h2>

      <div className="card shadow-sm border-0 p-4 animate__animated animate__fadeInUp">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="form-label fw-semibold">Email Address</label>
            <input
              type="email"
              className="form-control form-control-lg"
              {...register("email")}
              readOnly
              disabled
            />
          </div>

          <div className="mb-4 border-top pt-4">
            <h5 className="text-secondary fw-bold mb-3">Change Password</h5>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">New Password</label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Enter new password"
                  {...register("newPassword", { required: true })}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Confirm New Password</label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Confirm new password"
                  {...register("confirmPassword", { required: true })}
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
    </section>
  );
};

export default Settings;
