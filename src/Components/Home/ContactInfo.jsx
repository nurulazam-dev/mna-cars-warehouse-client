import React from "react";

const ContactInfo = () => {
  return (
    <section className="py-4" style={{ background: "#f5f7fa" }}>
      <div className="container">
        <div className="row justify-content-center mb-2">
          <div className="col-lg-8 text-center">
            <h2 className="fw-bold mb-2 animate__animated animate__fadeInDown">
              Contact Information
            </h2>
            <p className="text-secondary fs-5 animate__animated animate__fadeIn animate__delay-1s">
              Reach out to us for any queries, support, or to book a test drive.
              We’re here to help!
            </p>
          </div>
        </div>
        <div className="row g-4 justify-content-center align-items-stretch">
          {/* Contact Info Left Side */}
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className="bg-white rounded shadow p-4 h-100 animate__animated animate__fadeInLeft">
              {/* Location */}
              <div className="d-flex align-items-center mb-4">
                <div className="flex-shrink-0">
                  <i className="bi bi-geo-alt-fill fs-1 text-primary"></i>
                </div>
                <div className="ms-3">
                  <h5 className="fw-bold mb-1">Our Location</h5>
                  <p className="mb-0 text-secondary">
                    123 Warehouse Rd, Middlesbrough, UK
                  </p>
                </div>
              </div>
              <hr />
              {/* Phone */}
              <div className="d-flex align-items-center mb-4">
                <div className="flex-shrink-0">
                  <i className="bi bi-telephone-fill fs-1 text-success"></i>
                </div>
                <div className="ms-3">
                  <h5 className="fw-bold mb-1">Call Us</h5>
                  <p className="mb-0 text-secondary">+44 1234 567890</p>
                  <p className="mb-0 text-secondary">Mon-Sat: 9am - 6pm</p>
                </div>
              </div>
              <hr />
              {/* Email */}
              <div className="d-flex align-items-center mb-4">
                <div className="flex-shrink-0">
                  <i className="bi bi-envelope-fill fs-1 text-danger"></i>
                </div>
                <div className="ms-3">
                  <h5 className="fw-bold mb-1">Email</h5>
                  <p className="mb-0 text-secondary">
                    info@mnacarswarehouse.com
                  </p>
                </div>
              </div>
              <hr />
              {/* Social */}
              <div className="d-flex justify-content-center gap-3">
                <a
                  href="https://www.facebook.com/mnaofficialbd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animate__animated animate__fadeInUp"
                >
                  <i className="bi bi-facebook fs-2 text-primary"></i>
                </a>
                <a
                  href="https://www.instagram.com/mnaofficialbd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animate__animated animate__fadeInUp animate__delay-1s"
                >
                  <i className="bi bi-instagram fs-2 text-danger"></i>
                </a>
                <a
                  href="https://www.twitter.com/mnaofficialbd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animate__animated animate__fadeInUp animate__delay-2s"
                >
                  <i className="bi bi-twitter fs-2 text-info"></i>
                </a>
              </div>
            </div>
          </div>
          {/* Contact Form Right Side */}
          <div className="col-lg-7">
            <div className="bg-white rounded shadow p-4 h-100 animate__animated animate__fadeInRight">
              <h4 className="fw-bold mb-4 text-center text-success">
                Contact Us
              </h4>
              <form className="px-md-4">
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                        required
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Your Message"
                        id="message"
                        style={{ height: "120px" }}
                        required
                      ></textarea>
                      <label htmlFor="message">Your Message</label>
                    </div>
                  </div>
                  <div className="col-12 text-center">
                    <button
                      type="submit"
                      className="btn btn-primary px-5 fw-bold mt-2"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
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

export default ContactInfo;
