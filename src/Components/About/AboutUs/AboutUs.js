import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
    const navigate=useNavigate();
    return (
        <div>
            <h2>About Us</h2>


            <div className='text-center'>
                <button onClick={() => navigate('/developer')} className='btn btn-success text-white fs-5'>Developer</button>
            </div>
        </div>
    );
};

export default AboutUs;