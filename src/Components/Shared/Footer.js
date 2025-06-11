import React from "react";
import brandLogo from "../../assets/images/icon/mna-car-warehouse.png";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="bg-black text-white pt-5 pb-2">
      <div className="container">
        <div className="row gy-4 align-items-center">
          {/* Logo & About */}
          <div className="col-lg-4 col-md-6 text-center text-lg-start mb-4 mb-lg-0">
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start mb-2">
              <img
                src={brandLogo}
                alt="MNA Cars Warehouse Logo"
                style={{
                  width: "120px",
                  marginRight: "6px",
                }}
              />
              <div>
                <h4 className="text-warning mb-0">MNA CARS WAREHOUSE</h4>
              </div>
            </div>
            <p className="small mt-2">
              Your trusted partner for quality used cars, imports, and modern
              classics.
              <span className="text-info"> 22+ years</span> of experience,
              serving Middlesbrough and beyond with honesty and transparency.
            </p>
            <div className="mb-2">
              <a
                href="https://www.facebook.com/mnaofficialbd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://i.ibb.co/SBMtMC1/facebook.png"
                  alt="Facebook"
                  style={{ width: "28px", marginRight: "8px" }}
                />
              </a>
              <a
                href="https://www.instagram.com/mnaofficialbd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://i.ibb.co/DkFxTMF/instagram.png"
                  alt="Instagram"
                  style={{ width: "28px", marginRight: "8px" }}
                />
              </a>
              <a
                href="https://www.twitter.com/mnaofficialbd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://i.ibb.co/j4T8qbd/twitter.png"
                  alt="Twitter"
                  style={{ width: "28px" }}
                />
              </a>
            </div>
          </div>
          {/* Contact Info */}
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <h5 className="mb-2 text-warning">Contact Info</h5>
            <ul className="list-unstyled small mb-2">
              <li>
                <i className="bi bi-geo-alt-fill text-warning"></i> 123
                Warehouse Rd, Middlesbrough, UK
              </li>
              <li>
                <i className="bi bi-telephone-fill text-warning"></i> +44 1234
                567890
              </li>
              <li>
                <i className="bi bi-envelope-fill text-warning"></i>{" "}
                info@mnacarswarehouse.com
              </li>
              <li>
                <i className="bi bi-clock-fill text-warning"></i> Mon-Sat: 9am -
                6pm
              </li>
            </ul>
            <div className="small text-secondary">
              <i className="bi bi-car-front-fill text-info"></i> Over 500+ cars
              in stock
              <br />
              <i className="bi bi-people-fill text-info"></i> 10,000+ happy
              customers
            </div>
          </div>
          {/* Quick Links & Extra Info */}
          <div className="col-lg-4 col-md-12 text-center text-lg-start">
            <h5 className="mb-2 text-warning">Quick Links</h5>
            <ul className="list-unstyled small mb-3">
              <li>
                <a
                  href="/inventory"
                  className="text-white text-decoration-none"
                >
                  Inventory
                </a>
              </li>
              <li>
                <a href="/about" className="text-white text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="/blogs" className="text-white text-decoration-none">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
              <li>
                <a href="/faq" className="text-white text-decoration-none">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/dashboard"
                  className="text-white text-decoration-none"
                >
                  Dashboard
                </a>
              </li>
            </ul>
            <div className="small text-secondary">
              <i className="bi bi-shield-check text-success"></i> All vehicles
              fully inspected & certified
            </div>
          </div>
        </div>
        <hr className="border-secondary my-3" />
        <div className="row">
          <div className="col-md-6 small text-center text-md-start mb-2 mb-md-0">
            <span>All Rights Reserved. Copyright © {year}</span>
          </div>
          <div className="col-md-6 small text-center text-md-end">
            <span>
              Designed by{" "}
              <a
                href="https://www.facebook.com/mnaofficialbd"
                className="text-warning text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                @nurulazam-dev
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
