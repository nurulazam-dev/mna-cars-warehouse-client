import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const { register: registerUser } = useAuth();

  const handleRegister = (data) => {
    registerUser(data);
  };

  const navigate = useNavigate();
  const navigateToLogin = (event) => {
    navigate("/login");
  };

  /* if (data) {
  navigate("/login");
} */

  return (
    <section className="container mt-5">
      <div className="w-50 mx-auto border my-5 p-2 rounded bg-light shadow">
        <h2 className="text-primary text-center">Register</h2>
        <form
          onSubmit={handleSubmit(handleRegister)}
          className="text-black w-75 mx-auto my-4"
        >
          <div className="mb-3">
            <label>Name</label>
            <input className="form-control" {...register("name")} required />
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input className="form-control" {...register("email")} required />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              {...register("password")}
              required
            />
          </div>

          <button className="btn btn-success" type="submit">
            Register
          </button>
        </form>
        <p className="text-center text-black m-0">
          Already have an account ?{" "}
          <Link
            to="/login"
            onClick={navigateToLogin}
            className="text-primary pe-auto text-decoration-none"
          >
            Please Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
