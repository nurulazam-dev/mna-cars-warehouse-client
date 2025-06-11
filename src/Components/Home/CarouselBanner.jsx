import React from "react";
import { Carousel } from "react-bootstrap";
import { carouselData } from "../../assets/data/carouselData";

const CarouselBanner = () => {
  return (
    <div>
      <Carousel>
        {carouselData?.map((banner) => (
          <Carousel.Item key={banner?._id} interval={2500}>
            <img
              style={{ height: "300px" }}
              className="d-block w-100"
              src={banner?.img}
              alt={banner?.title}
            />
            <Carousel.Caption style={{ marginBottom: "100px" }}>
              <h3 className="font-bold fs-1">{banner?.title}</h3>
              <p>{banner?.subtitle}</p>
              {/*  <a
                href="/cars"
                className="btn btn-success btn-lg rounded-pill px-4"
              >
                {banner?.buttonText}
              </a> */}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselBanner;
