import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
    return (
        <div className='w-25 mx-auto border m-3 p-2 rounded bg-dark'>
            <h2 className='text-warning text-center'>Please Login</h2>

            <Form className='text-white'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required/>                
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='w-100' variant="primary" type="submit">
                    Login
                </Button>
            </Form>

        </div>
    );
};

export default Login;