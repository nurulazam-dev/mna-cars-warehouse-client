import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <section className="animate__animated animate__fadeIn">
      <div className="bg-primary text-white py-3 mb-4 shadow">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">About MNA Cars Warehouse</h1>
          <p className="lead">Used cars in Middlesbrough, Cleveland</p>
        </div>
      </div>

      <div className="container mb-3">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=600&q=80"
              alt="Showroom"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <h2 className="text-danger mb-3">Who We Are???</h2>
            <div className="fs-5">
              <p>
                MNA Cars Warehouse was established in 2000. With over twenty-two
                years in the motor industry, we are now one of Europe's largest
                suppliers of used promotional advertising vehicles, modern
                classics, camper vans, and imported vehicles.
              </p>
              <p>
                We specialize in unique and limited-edition cars, hand-picking
                our vehicles from around the world. Our expertise includes
                Japanese imports such as Mazda Bongo, Nissan Escargo, Nissan
                Pao, Figaro, Elgrand, Estima, Mitsouka, and more.
              </p>
              <p>
                We handle the entire import process: sourcing, purchasing,
                paying all duties, UK registration, MOT, warranty, and
                under-sealant protection.
              </p>
              <p>
                Can't find your dream car in our stock? We can source it for
                you—just ask!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-2">
        <h2 className="text-center text-success mb-3">Why Choose Us?</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <div className="p-4 bg-light rounded shadow-sm h-100">
              <i className="bi bi-star-fill text-warning fs-2 mb-2"></i>
              <h5 className="fw-bold">22+ Years Experience</h5>
              <p>Trusted by thousands of customers across Europe.</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="p-4 bg-light rounded shadow-sm h-100">
              <i className="bi bi-globe2 text-primary fs-2 mb-2"></i>
              <h5 className="fw-bold">Global Sourcing</h5>
              <p>Hand-picked vehicles from Japan, Europe, and beyond.</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="p-4 bg-light rounded shadow-sm h-100">
              <i className="bi bi-shield-check text-success fs-2 mb-2"></i>
              <h5 className="fw-bold">Full Service</h5>
              <p>Import, registration, MOT, warranty, and aftercare.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-5">
        <button
          onClick={() => navigate("/about-developer")}
          className="btn btn-success text-white fs-5 px-4 py-2 shadow"
        >
          About Developer
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
