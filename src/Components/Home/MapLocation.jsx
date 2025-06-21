import React from "react";

const MapLocation = () => {
  return (
    <section className="py-4" style={{ background: "#f0f4f8" }}>
      <div className="container">
        <div className="row justify-content-center mb-2">
          <div className="col-lg-8 text-center">
            <h2 className="fw-bold mb-2 animate__animated animate__fadeInDown">
              Find Us On The Map
            </h2>
            <p className="text-secondary fs-5 animate__animated animate__fadeIn animate__delay-1s">
              Visit our warehouse or get directions easily. We’re located in the
              heart of Middlesbrough!
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12 animate__animated animate__zoomIn">
            <div
              className="rounded shadow overflow-hidden"
              style={{
                minHeight: "350px",
                border: "2px solid #2c5364",
              }}
            >
              <iframe
                title="MNA Car Warehouse Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2372.328206235795!2d-1.2345678!3d54.576789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487e8c1234567890%3A0xabcdefabcdefabcd!2sMiddlesbrough!5e0!3m2!1sen!2suk!4v1680000000000!5m2!1sen!2suk"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="text-center mt-3 animate__animated animate__fadeInUp animate__delay-1s">
              <a
                href="https://www.google.com/maps/place/Middlesbrough"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary px-4 fw-bold"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapLocation;
