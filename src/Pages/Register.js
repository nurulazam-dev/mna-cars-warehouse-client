import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const { register: registerUser } = useAuth();

  const onSubmit = (data) => {
    registerUser(data);
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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
    </div>
  );
};

export default Register;
