import React from 'react';
import google from '../../../Images/SocialIcon/google.png';
import github from '../../../Images/SocialIcon/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {

const [signInWithGoogle, googleUser, googleError] = useSignInWithGoogle(auth);
const [signInWithGithub, githubUser, githubError] = useSignInWithGithub(auth);

const navigate = useNavigate();
const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    let errorMessage;
    if (googleUser || githubUser) {
        navigate(from, { replace: true })
    }
    if (googleError || githubError) {
        errorMessage = <p className='text-danger'>Error: {googleError?.message} {githubError?.message}</p>
    }
    

    return (
        <div className='text-warning text-center mt-0 w-75 mx-auto'>
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px' }} className='bg-warning w-50'></div>
                <p className='m-2'>or</p>
                <div style={{ height: '2px' }} className='bg-warning w-50'></div>
            </div>
                <button onClick={()=>signInWithGoogle()}
                className='rounded d-flex align-items-center mx-auto mb-2 p-1'>
                    <img src={google} alt="" />
                    <p className='my-auto mx-2'>Sign Up With Google</p>
                </button>
                <button onClick={()=>signInWithGithub()}
                className='rounded d-flex align-items-center mx-auto mb-2 p-1'>
                    <img src={github} alt="" />
                    <p className='my-auto mx-2'>Sign Up With Github</p>
                </button>
                {errorMessage}
        </div>
    );
};

export default SocialLogin;