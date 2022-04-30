import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../Images/Banner/banner1.png'
import banner2 from '../../Images/Banner/banner2.png'
import banner3 from '../../Images/Banner/banner3.png'

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                    style={{height: '400px'}}
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>MNA Cars Warehouse</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    style={{height: '400px'}}

                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>MNA Cars Warehouse</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    style={{height: '400px'}}

                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>MNA Cars Warehouse</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;