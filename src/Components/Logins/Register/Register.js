import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    let errorMessage;
    const [user]=useAuthState(auth)

    const [
        createUserWithEmailAndPassword,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const navigate = useNavigate();
    const navigateToLogin = (event) => {
        navigate('/login')
    }
    if (error) {
        <p className='text-danger'>{error?.message}</p>
    };
    if (user) {
        navigate('/login')
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        createUserWithEmailAndPassword(email, password);
        console.log(name, email, password);
    }

    

    return (
        <div className='w-50 mx-auto border my-5 p-2 rounded bg-light shadow'>
            <h2 className='text-primary text-center'>Create your account</h2>

            <Form onSubmit={handleRegister} className='text-black w-75 mx-auto my-4'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Full Name</Form.Label>
                    <Form.Control className='fs-5' ref={nameRef} type="text" placeholder="Enter Your Name" required />
                </Form.Group>

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
                    Register
                </Button>
            </Form>
            <p className='text-center text-black m-0'>Already have an account ? <Link to='/login' onClick={navigateToLogin} className='text-primary pe-auto text-decoration-none'>Please Login</Link></p>

            <SocialLogin />
        </div>
    );
};

export default Register;