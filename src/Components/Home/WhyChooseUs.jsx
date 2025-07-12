const WhyChooseUs = () => {
  const features = [
    {
      icon: "bi-shield-check",
      title: "Certified Quality",
      desc: "Every car is thoroughly inspected and certified by our expert mechanics for your peace of mind.",
      color: "#2c5364",
      bg: "#e9f5ff",
    },
    {
      icon: "bi-cash-coin",
      title: "Best Price Guarantee",
      desc: "We offer competitive pricing and transparent deals with no hidden costs.",
      color: "#43cea2",
      bg: "#e6fff7",
    },
    {
      icon: "bi-people",
      title: "Customer-First Service",
      desc: "Our friendly team is dedicated to helping you before, during, and after your purchase.",
      color: "#185a9d",
      bg: "#e9f0ff",
    },
    {
      icon: "bi-truck",
      title: "Nationwide Delivery",
      desc: "Get your car delivered safely to your doorstep, anywhere in the country.",
      color: "#ffc107",
      bg: "#fffbe6",
    },
  ];

  return (
    <section
      className="py-4"
      style={{
        background: "linear-gradient(120deg, #e9f5ff 60%, #c9e7fa 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div className="row justify-content-center mb-2">
          <div className="col-lg-8 text-center">
            <h2 className="fw-bold mb-3 animate__animated animate__fadeInDown">
              <i className="bi bi-stars text-primary me-2"></i>
              Why Choose Us
            </h2>
            <p className="text-secondary fs-5 animate__animated animate__fadeIn animate__delay-1s">
              Discover what makes{" "}
              <span className="fw-bold text-primary">MNA Car Warehouse</span>{" "}
              the best choice for your next vehicle.
            </p>
          </div>
        </div>
        <div className="row justify-content-center g-4">
          {features.map((feature, idx) => (
            <div
              className="col-12 col-md-6 col-lg-3 d-flex"
              key={feature.title}
            >
              <div
                className="w-100 h-100 p-0 border-0"
                style={{
                  background: "transparent",
                  borderRadius: "2rem",
                }}
              >
                <div
                  className="h-100 d-flex flex-column align-items-center justify-content-between shadow-lg rounded-4 px-4 py-5 animate__animated animate__fadeInUp"
                  style={{
                    background: "#fff",
                    borderRadius: "1rem",
                    minHeight: 270,
                    animationDelay: `${idx * 0.2 + 0.2}s`,
                    boxShadow: "0 8px 32px rgba(44,83,100,0.10)",
                    transition: "box-shadow 0.3s, transform 0.3s",
                  }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      background: feature.bg,
                      boxShadow: `0 4px 16px ${feature.bg}`,
                      marginTop: -40,
                    }}
                  >
                    <i
                      className={`bi ${feature.icon}`}
                      style={{
                        fontSize: 38,
                        color: feature.color,
                        filter: "drop-shadow(0 2px 8px rgba(44,83,100,0.10))",
                      }}
                    ></i>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2 text-dark">{feature.title}</h5>
                    <p className="text-secondary small mb-0">{feature.desc}</p>
                  </div>
                  <div>
                    <span
                      style={{
                        display: "inline-block",
                        width: 90,
                        height: 3,
                        borderRadius: 2,
                        background: feature.color,
                        opacity: 0.2,
                      }}
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
