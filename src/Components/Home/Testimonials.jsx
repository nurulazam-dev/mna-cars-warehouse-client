import React, { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    name: "John Smith",
    role: "Business Owner",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "MNA Car Warehouse made my car buying experience smooth and enjoyable. The staff was friendly and the car was in perfect condition!",
    rating: 5,
  },
  {
    name: "Emily Johnson",
    role: "Teacher",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "I loved the transparent pricing and the nationwide delivery. Highly recommended for anyone looking for a reliable car!",
    rating: 5,
  },
  {
    name: "Michael Lee",
    role: "Engineer",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
    review:
      "The team helped me find the perfect family car. Excellent service and after-sales support. Thank you!",
    rating: 4,
  },
  {
    name: "Sarah Williams",
    role: "Designer",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "Booking a test drive was easy and the staff answered all my questions. I’m very happy with my purchase.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Developer",
    img: "https://randomuser.me/api/portraits/men/76.jpg",
    review:
      "Great selection of cars and the process was hassle-free. Will recommend to my friends!",
    rating: 5,
  },
  {
    name: "Olivia Brown",
    role: "Nurse",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    review:
      "Customer support was outstanding and delivery was quick. Love my new car!",
    rating: 5,
  },
  {
    name: "Carlos Martinez",
    role: "Chef",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    review:
      "The best car buying experience I’ve ever had. The team was knowledgeable and very helpful.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Marketing Manager",
    img: "https://randomuser.me/api/portraits/women/50.jpg",
    review:
      "I was impressed by the quality of cars and the transparent process. Highly recommend MNA Car Warehouse!",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Photographer",
    img: "https://randomuser.me/api/portraits/men/51.jpg",
    review:
      "From test drive to delivery, everything was smooth and professional. Thank you for my new car!",
    rating: 4,
  },
  {
    name: "Aisha Rahman",
    role: "Doctor",
    img: "https://randomuser.me/api/portraits/women/52.jpg",
    review:
      "Excellent after-sales support and a great selection of vehicles. I’ll be back for my next car!",
    rating: 5,
  },
  {
    name: "Tom Becker",
    role: "Architect",
    img: "https://randomuser.me/api/portraits/men/53.jpg",
    review:
      "The nationwide delivery was fast and the car was exactly as described. Very satisfied!",
    rating: 5,
  },
  {
    name: "Linda Green",
    role: "HR Specialist",
    img: "https://randomuser.me/api/portraits/women/54.jpg",
    review:
      "Friendly staff, great prices, and a seamless buying process. Couldn’t ask for more.",
    rating: 5,
  },
];

const getSlidesToShow = () => (window.innerWidth >= 992 ? 3 : 1);

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());
  const [direction, setDirection] = useState("right");
  const timeoutRef = useRef(null);

  // Responsive slidesToShow
  useEffect(() => {
    const handleResize = () => setSlidesToShow(getSlidesToShow());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide (right to left)
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setDirection("right");
      setActive((prev) =>
        prev + slidesToShow >= testimonials.length ? 0 : prev + slidesToShow
      );
    }, 5000);
    return () => clearTimeout(timeoutRef.current);
  }, [active, slidesToShow]);

  // Get visible slides
  const getVisibleSlides = () => {
    let slides = [];
    for (let i = 0; i < slidesToShow; i++) {
      slides.push(testimonials[(active + i) % testimonials.length]);
    }
    return slides;
  };

  // Navigation
  const prevSlide = () => {
    setDirection("left");
    setActive((prev) =>
      prev - slidesToShow < 0
        ? testimonials.length - slidesToShow
        : prev - slidesToShow
    );
  };
  const nextSlide = () => {
    setDirection("right");
    setActive((prev) =>
      prev + slidesToShow >= testimonials.length ? 0 : prev + slidesToShow
    );
  };

  // Animation class based on direction
  const getAnimationClass = () =>
    direction === "right"
      ? "animate__animated animate__slideInRight"
      : "animate__animated animate__slideInLeft";

  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(120deg, #e9f5ff 60%, #c9e7fa 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8 text-center">
            <h2 className="fw-bold mb-3 animate__animated animate__fadeInDown">
              <i className="bi bi-chat-quote text-primary me-2"></i>
              What Our Customers Say
            </h2>
            <p className="text-secondary fs-5 animate__animated animate__fadeIn animate__delay-1s">
              Real feedback from real customers who found their perfect car with
              us.
            </p>
          </div>
        </div>
        <div className="position-relative">
          <div className="d-flex justify-content-center align-items-stretch gap-4 flex-wrap">
            {getVisibleSlides().map((t, idx) => (
              <div
                key={t.name + idx}
                className={`testimonial-card bg-white rounded-4 shadow-lg px-4 py-5 text-center ${getAnimationClass()}`}
                style={{
                  minWidth: 0,
                  flex: `1 1 ${100 / slidesToShow - 2}%`,
                  maxWidth: slidesToShow === 1 ? 480 : 370,
                  margin: "0 auto",
                  border: "1px solid #e9f5ff",
                  boxShadow: "0 8px 32px rgba(44,83,100,0.10)",
                  position: "relative",
                  zIndex: 2,
                  transition: "box-shadow 0.3s, transform 0.3s",
                  background: "linear-gradient(120deg, #fff 80%, #e9f5ff 100%)",
                }}
              >
                <div className="d-flex flex-column align-items-center">
                  <div
                    className="bg-light rounded-circle mb-3"
                    style={{
                      width: 90,
                      height: 90,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 16px #e9f5ff",
                      marginTop: -60,
                      position: "relative",
                    }}
                  >
                    <img
                      src={t.img}
                      alt={t.name}
                      className="rounded-circle shadow"
                      style={{
                        width: 76,
                        height: 76,
                        objectFit: "cover",
                        border: "3px solid #c9e7fa",
                      }}
                    />
                  </div>
                  <div className="mb-2">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`bi ${
                          i < t.rating
                            ? "bi-star-fill text-warning"
                            : "bi-star text-secondary"
                        } fs-5`}
                      ></i>
                    ))}
                  </div>
                  <p
                    className="fs-5 text-secondary mb-4"
                    style={{
                      minHeight: 80,
                      fontStyle: "italic",
                      position: "relative",
                    }}
                  >
                    <i
                      className="bi bi-quote text-primary"
                      style={{
                        fontSize: 28,
                        position: "absolute",
                        left: -18,
                        top: -10,
                        opacity: 0.2,
                      }}
                    ></i>
                    {t.review}
                  </p>
                  <div>
                    <span className="fw-bold text-dark">{t.name}</span>
                    <span className="text-primary ms-2 small">({t.role})</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Slide Controls */}
          <button
            className="btn btn-light rounded-circle position-absolute top-50 start-0 translate-middle-y shadow"
            style={{ zIndex: 3, width: 44, height: 44 }}
            onClick={prevSlide}
            aria-label="Previous"
          >
            <i className="bi bi-chevron-left fs-4 text-primary"></i>
          </button>
          <button
            className="btn btn-light rounded-circle position-absolute top-50 end-0 translate-middle-y shadow"
            style={{ zIndex: 3, width: 44, height: 44 }}
            onClick={nextSlide}
            aria-label="Next"
          >
            <i className="bi bi-chevron-right fs-4 text-primary"></i>
          </button>
          {/* Dots */}
          <div className="d-flex justify-content-center gap-2 mt-4">
            {Array.from({
              length: Math.ceil(testimonials.length / slidesToShow),
            })
              .fill()
              .map((_, idx) => (
                <button
                  key={idx}
                  className={`rounded-pill border-0`}
                  style={{
                    width: 18,
                    height: 8,
                    background:
                      idx === Math.floor(active / slidesToShow)
                        ? "#2c5364"
                        : "#c9e7fa",
                    transition: "background 0.3s",
                  }}
                  onClick={() => setActive(idx * slidesToShow)}
                  aria-label={`Go to testimonial group ${idx + 1}`}
                ></button>
              ))}
          </div>
        </div>
      </div>
      {/* Animate.css CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
    </section>
  );
};

export default Testimonials;
