import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../Firebase/firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    let loadingMessage;
    let errorMessage;
     const [user]=useAuthState(auth)

    const [
        signInWithEmailAndPassword,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sendEmail] = useSendPasswordResetEmail(auth);

    if (loading || sendEmail) {
        loadingMessage = (<p>Loading...{loading}</p>) || (<p>Sending...{sendEmail}</p>)
    }
    if (error) {
        errorMessage = <p className='text-danger'>{error?.message}</p>
    };

    console.log(user);
    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const navigateToRegister = (event) => {
        navigate('/register')
    }
    if (user) {
        navigate(from, { replace: true })
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email Send...')
        }
        else {
            toast('Please add your email')
        }
    }

    return (
        <div className='w-50 mx-auto border my-5 p-2 rounded bg-light shadow'>
            {loadingMessage}
            <ToastContainer />
            <h2 className='text-primary text-center'>Please Login</h2>

            <Form onClick={handleLogin} className='text-black w-75 mx-auto my-4'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className='fs-5' ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='fs-5' ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                {errorMessage}
                <Button className='w-100 mt-2 fs-5' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p className='text-center text-black m-0'>If you forget password. <button onClick={resetPassword} className='text-primary pe-auto text-decoration-none btn btn-link'>Reset</button></p>
            <p className='text-center text-black m-0'>If you new ? <Link to='/register' onClick={navigateToRegister} className='text-primary pe-auto text-decoration-none'>Please Register</Link></p>
            <SocialLogin />
        </div>
    );
};

export default Login;