import { useEffect, useState } from "react";

const stats = [
  {
    icon: "bi-car-front-fill",
    label: "Cars Sold",
    value: 5200,
    display: "5,200+",
    color: "primary",
  },
  {
    icon: "bi-people-fill",
    label: "Happy Customers",
    value: 10000,
    display: "10,000+",
    color: "success",
  },
  {
    icon: "bi-geo-alt-fill",
    label: "Locations Served",
    value: 50,
    display: "50+",
    color: "info",
  },
  {
    icon: "bi-award-fill",
    label: "Years of Excellence",
    value: 22,
    display: "22+",
    color: "warning",
  },
];

const Statistics = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const durations = [1200, 1500, 1800, 2100];
    const intervals = stats.map((stat, idx) => {
      const increment = Math.ceil(stat.value / (durations[idx] / 20));
      return setInterval(() => {
        setCounts((prev) => {
          const next = [...prev];
          if (next[idx] < stat.value) {
            next[idx] = Math.min(next[idx] + increment, stat.value);
          }
          return next;
        });
      }, 20);
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  return (
    <section className="py-5" style={{ background: "#f8fafc" }}>
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8 text-center">
            <h2 className="fw-bold mb-3 animate__animated animate__fadeInDown">
              <i className="bi bi-bar-chart-fill text-primary me-2"></i>
              Our Achievements
            </h2>
            <p className="text-secondary fs-5 animate__animated animate__fadeIn animate__delay-1s">
              We’re proud of our journey and the trust our customers have placed
              in us.
            </p>
          </div>
        </div>
        <div className="row justify-content-center g-4">
          {stats?.map((stat, idx) => (
            <div className="col-12 col-md-6 col-lg-3" key={stat?.label}>
              <div
                className={`text-center bg-white rounded-4 shadow-sm py-4 h-100 animate__animated animate__fadeInUp`}
                style={{ animationDelay: `${idx * 0.2 + 0.2}s` }}
              >
                <div className="mb-3">
                  <i
                    className={`bi ${stat.icon} fs-1 text-${stat.color} animate__animated animate__bounceIn`}
                    style={{ animationDelay: `${idx * 0.2 + 0.4}s` }}
                  ></i>
                </div>
                <div
                  className="fw-bold display-6 mb-1"
                  style={{ letterSpacing: "1px", minHeight: "48px" }}
                >
                  {counts[idx].toLocaleString()}
                  <span className="ms-1">+</span>
                </div>
                <div className="text-secondary fs-6">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
