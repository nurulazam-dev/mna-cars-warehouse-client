import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const from = location.state?.from?.pathname || "/dashboard";

  const onSubmit = async (formData) => {
    setLoading(true);
    try {
      const result = await login(formData);

      if (result?.success || result?.user) {
        toast.success("Login successful!");
        navigate(from, { replace: true });
      } else {
        toast.error(result?.message || "Invalid email or password");
      }
    } catch (err) {
      toast.error(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="w-100" style={{ maxWidth: "450px" }}>
        <div className="card shadow border-0 p-4">
          <h3 className="text-center text-primary mb-4">
            Login to Your Account
          </h3>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Invalid email format",
                  },
                })}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email.message}</div>
              )}
            </div>

            <div className="mb-1">
              <label className="form-label">Password</label>
              <input
                type="password"
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <div className="invalid-feedback">
                  {errors.password.message}
                </div>
              )}
            </div>

            <div className="text-end mb-3">
              <Link
                to="/forgot-password"
                className="text-decoration-none small text-primary"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 py-2"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-center mt-3 mb-0">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-decoration-none text-primary fw-semibold"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
