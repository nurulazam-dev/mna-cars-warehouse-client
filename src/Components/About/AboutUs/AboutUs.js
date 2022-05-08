import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h2 className='text-center text-primary mt-3'>About Us</h2>
            <div className='w-75 mx-auto bg-light p-4 rounded mb-3'>
                <h3 className='text-center text-danger mb-3'>MNA CARS WAREHOUSE - Used cars in Middlesbrough, Cleveland</h3>
                <div className='fs-5'>
                <p>
                    MNA Cars Warehouse was established in 2000, We have been in the motor industry for almost twenty two years. We are now one of Europe's largest suppliers of used promotional advertising vehicles, Modern classics, Camper vans and Imported vehicles.
                </p>
                <p>
                    If the car is unusual or made in limited numbers then this is what we like, we like to stock the cars that other dealers dare not. We hand pick our vehicles and have agents and buyers in numerous countries, we specialise in Japanese imports, including vehicles like Mazda Bongo, Nissan Escargo, Nissan Pao, Figaro, Elgrand, Estima, Mitsouka, to name only a few.
                </p>
                <p>
                    We deal with all the import process from searching for the right vehicle, purchasing the vehicle, Paying all duty, Uk registration with number plates, MOT, Warranty, Waxoyl Under sealant.
                </p>
                <p>
                    If we do not have the right vehicle in our stock for you we can source your car. We may require a small deposit depending on the vehicle you require.
                </p>
                </div>
            </div>

            <div className='text-center'>
                <button onClick={() => navigate('/developer')} className='btn btn-success text-white fs-5'>About Developer</button>
            </div>
        </div>
    );
};

export default AboutUs;