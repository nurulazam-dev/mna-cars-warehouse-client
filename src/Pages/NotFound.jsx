import { Link } from "react-router-dom";
import notFound from "../assets/images/NotFound/404.png";

const NotFound = () => {
  return (
    <section
      className="container animate__animated animate__fadeIn text-center"
      style={{ minHeight: "90vh" }}
    >
      <div>
        <img className=" w-75 mb-4" src={notFound} alt="" />
      </div>
      <Link to="/">
        <button className="btn btn-primary w-25 fs-5">Go Home</button>
      </Link>
    </section>
  );
};

export default NotFound;
