import React from "react";

const partners = [
  {
    name: "Toyota",
    logo: "https://1000logos.net/wp-content/uploads/2021/04/Toyota-logo.png",
    url: "https://www.toyota.com/",
  },
  {
    name: "BMW",
    logo: "https://1000logos.net/wp-content/uploads/2018/02/BMW-Logo.png",
    url: "https://www.bmw.com/",
  },
  {
    name: "Mercedes-Benz",
    logo: "https://1000logos.net/wp-content/uploads/2018/04/Mercedes-Benz-Logo-768x478.png",
    url: "https://www.mercedes-benz.com/",
  },
  {
    name: "Honda",
    logo: "https://1000logos.net/wp-content/uploads/2018/03/Honda-Logo-768x432.png",
    url: "https://www.honda.com/",
  },
  {
    name: "Nissan",
    logo: "https://1000logos.net/wp-content/uploads/2020/03/nissan-logo.png",
    url: "https://www.nissan-global.com/",
  },
  {
    name: "Ford",
    logo: "https://1000logos.net/wp-content/uploads/2018/02/Ford-Logo.png",
    url: "https://www.ford.com/",
  },
  {
    name: "Mazda",
    logo: "https://1000logos.net/wp-content/uploads/2019/12/Mazda-Logo.png",
    url: "https://www.mazda.com/",
  },
  {
    name: "Volkswagen",
    logo: "https://1000logos.net/wp-content/uploads/2021/04/Volkswagen-logo.png",
    url: "https://www.vw.com/",
  },
  {
    name: "Hyundai",
    logo: "https://1000logos.net/wp-content/uploads/2018/04/Hyundai-Logo.png",
    url: "https://www.hyundai.com/",
  },
  {
    name: "Kia",
    logo: "https://1000logos.net/wp-content/uploads/2020/02/kia-logo.jpeg",
    url: "https://www.kia.com/",
  },
];

const Partners = () => {
  // Duplicate the array for infinite scroll effect
  const infinitePartners = [...partners, ...partners, ...partners];

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
              Our Trusted Partners
            </h2>
            <p className="text-secondary fs-5 animate__animated animate__fadeIn animate__delay-1s">
              We proudly collaborate with world-renowned car brands and partners
              to bring you the best vehicles and services.
            </p>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            overflow: "hidden",
            position: "relative",
            padding: "5px 0",
          }}
        >
          <div
            className="partners-infinite-scroll"
            style={{
              display: "flex",
              alignItems: "center",
              animation: "partnersScroll 10s linear infinite",
              gap: "1rem",
            }}
          >
            {infinitePartners.map((partner, idx) => (
              <a
                href={partner.url}
                key={partner.name + idx}
                target="_blank"
                rel="noopener noreferrer"
                title={partner.name}
                className="d-flex flex-column align-items-center justify-content-center px-3"
                style={{
                  minWidth: 140,
                  textDecoration: "none",
                  transition: "transform 0.3s",
                }}
              >
                <div
                  className="rounded-4 shadow p-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: 110,
                    height: 80,
                    marginBottom: 10,
                    transition: "box-shadow 0.3s, transform 0.3s",
                  }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    style={{
                      maxWidth: 90,
                      maxHeight: 70,
                      objectFit: "contain",
                      filter: "grayscale(40%) brightness(1.1)",
                      transition: "filter 0.3s",
                    }}
                  />
                </div>
                <div className="fw-semibold text-secondary small text-center">
                  {partner.name}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* =========================
           Decorative SVG wave
      ========================= */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          zIndex: 1,
        }}
      >
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#c9e7fa"
            d="M0,32L60,37.3C120,43,240,53,360,58.7C480,64,600,64,720,53.3C840,43,960,21,1080,16C1200,11,1320,21,1380,26.7L1440,32L1440,80L1380,80C1320,80,1200,80,1080,80C960,80,840,80,720,80C600,80,480,80,360,80C240,80,120,80,60,80L0,80Z"
          ></path>
        </svg>
      </div>

      {/* Infinite scroll keyframes */}
      <style>
        {`
          @keyframes partnersScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
          @media (max-width: 768px) {
            .partners-infinite-scroll {
              gap: 1.2rem !important;
              animation-duration: 18s !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Partners;
