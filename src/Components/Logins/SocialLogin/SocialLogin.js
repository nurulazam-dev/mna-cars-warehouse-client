import React from 'react';
import google from '../../../Images/SocialIcon/google.png';
import github from '../../../Images/SocialIcon/github.png';

const SocialLogin = () => {
    return (
        <div className='text-warning text-center w-75 mx-auto'>
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px' }} className='bg-warning w-50'></div>
                <p className='m-2'>or</p>
                <div style={{ height: '2px' }} className='bg-warning w-50'></div>
            </div>
                <button className='rounded d-flex align-items-center mx-auto mb-2 p-1'>
                    <img src={google} alt="" />
                    <p className='my-auto mx-2'>Sign Up With Google</p>
                </button>
                <button className='rounded d-flex align-items-center mx-auto mb-2 p-1'>
                    <img src={github} alt="" />
                    <p className='my-auto mx-2'>Sign Up With Github</p>
                </button>
        </div>
    );
};

export default SocialLogin;