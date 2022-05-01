import React from 'react';
import { Card } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='m-2 p-2'>
            <h2 className='text-center'>Blogs (Q & A)</h2>
            <div className='d-flex mt-4 w-75 mx-auto'>
                <Card border="primary" className='mx-4' style={{ width: '18rem' }}>
                    <Card.Header className='fs-5'> What is difference between javascript and node.js ?</Card.Header>
                    <Card.Body>
                        <Card.Title>Answer:</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content. 
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="primary" className='mx-4' style={{ width: '18rem' }}>
                    <Card.Header className='fs-5'>When should you use node.js and when should you use mongodb ?</Card.Header>
                    <Card.Body>
                        <Card.Title>Answer:</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="primary" className='mx-4' style={{ width: '18rem' }}>
                    <Card.Header className='fs-5'>What is differences between sql and nosql databases ?</Card.Header>
                    <Card.Body>
                        <Card.Title>Answer:</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="primary" className='mx-4' style={{ width: '18rem' }}>
                    <Card.Header className='fs-5'>What is the purpose of jwt and how does it work ?</Card.Header>
                    <Card.Body>
                        <Card.Title>Answer:</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Blogs;