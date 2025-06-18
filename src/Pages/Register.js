import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const { register: registerUser } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (formData) => {
    setLoading(true);
    try {
      const { name, email, password } = formData;
      const result = await registerUser({ name, email, password });

      if (result?.success || result?.user) {
        toast.success("Registration successful!");
        reset();
        navigate("/login");
      } else {
        toast.error(result?.message || "Registration failed.");
      }
    } catch (err) {
      toast.error(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const password = watch("password");

  return (
    <section className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="w-100" style={{ maxWidth: "500px" }}>
        <div className="card shadow border-0 p-4">
          <h3 className="text-center mb-4 text-primary fw-bold">
            Create Account
          </h3>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                placeholder="Car Warehouse"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name.message}</div>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                placeholder="carwarehouse@gmail.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email.message}</div>
              )}
            </div>
            <div className="row">
              <div className="mb-3 col-md-6">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  placeholder="At least 6 characters"
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

              <div className="mb-3 col-md-6">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className={`form-control ${
                    errors.confirmPassword ? "is-invalid" : ""
                  }`}
                  placeholder="Re-enter password"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                />
                {errors.confirmPassword && (
                  <div className="invalid-feedback">
                    {errors.confirmPassword.message}
                  </div>
                )}
              </div>
            </div>

            <div className="form-check mb-3">
              <input
                className={`form-check-input ${
                  errors.terms ? "is-invalid" : ""
                }`}
                type="checkbox"
                id="terms"
                {...register("terms", {
                  required: "You must agree to the terms",
                })}
              />
              <label className="form-check-label" htmlFor="terms">
                I agree to the{" "}
                <Link to="/terms" className="text-decoration-underline">
                  Terms & Privacy Policy
                </Link>
              </label>
              {errors.terms && (
                <div className="invalid-feedback d-block">
                  {errors.terms.message}
                </div>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 py-2"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Register"}
            </button>
          </form>

          <p className="text-center mt-3 mb-0">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-decoration-none text-primary fw-semibold"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
