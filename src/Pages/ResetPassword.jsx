import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { LOCAL_BASE_URL } from "../config";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await fetch(
        `${LOCAL_BASE_URL}/auth/reset-password/${token}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      const result = await res.json();
      if (!res.ok) throw new Error(result.message);
      toast.success("Password reset successfully");
      navigate("/login");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container mt-5">
      <div className="w-50 mx-auto border p-4 rounded shadow bg-light">
        <h2 className="text-center text-primary mb-4">Reset Password</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label>New Password</label>
            <input
              type="password"
              className="form-control"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <small className="text-danger">{errors.password.message}</small>
            )}
          </div>
          <div className="text-center">
            <button className="btn btn-success px-4" disabled={loading}>
              {loading ? "Updating..." : "Reset Password"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ResetPassword;
