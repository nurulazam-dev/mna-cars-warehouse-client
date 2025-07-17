import { useForm } from "react-hook-form";
import { useState } from "react";
import { BASE_URL } from "../config";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const onSubmit = async ({ email }) => {
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.message || "Failed to send email");

      toast.success("Reset link sent to your email.");
      setEmailSent(true);
      reset();
    } catch (err) {
      toast.error(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container mt-5">
      <div className="w-50 mx-auto border p-4 rounded shadow bg-light">
        <h2 className="text-center text-primary mb-4">Forgot Password</h2>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-3">
            <label className="form-label">Enter your email address</label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="my@gmail.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email.message}</div>
            )}
          </div>

          <div className="text-center">
            <button
              className="btn btn-primary px-4"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
          </div>

          {emailSent && (
            <p className="mt-3 text-success text-center">
              If this email exists in our system, you’ll receive a reset link
              shortly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;
