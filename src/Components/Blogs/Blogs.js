import React from 'react';
import { Card } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='m-2 p-2'>
            <h2 className='text-center'>Blogs (Q & A)</h2>
            <div className=' mt-4 w-75 mx-auto'>
                <Card border="primary" className='w-75 mx-auto mb-4' >
                    <Card.Header className='fs-5'> What is difference between javascript and node.js ?</Card.Header>
                    <Card.Body>
                        <Card.Title className='text-center'>Answer:</Card.Title>
                        <Card.Text>
                            <p>
                                <span className='text-success '>JavaScript :</span> JavaScript is a high-level, lightweight (easy syntax) and object-oriented programming language. It is a dynamic programming language that's used for web development in web applications and lots more. It is used on the client-side. It allows to implement dynamic features on web pages that cannot be done with only HTML and CSS.
                            </p>
                            <p>
                                
                                <span className='text-success '>Node.js :</span> Node.js is a single-threaded, open-source, cross-platform runtime environment for building fast and scalable server-side and networking applications. It's use the Single Threaded Event Loop architecture to handle multiple clients at the same time. It is used on the server-side.
                            </p>

                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="primary" className='w-75 mx-auto mb-4'>
                    <Card.Header className='fs-5'>What is the purpose of jwt and how does it work ?</Card.Header>
                    <Card.Body>
                    <Card.Title className='text-center'>Answer:</Card.Title>
                        <Card.Text>
                            JWT means JSON Web Token. It is an open standard used to share information between two parties securely  a client and a server. JWT can be signed with the help of any secret key with a proper algorithm. The Identity Provider generates a JWT certifying user identity, and the resource server decodes and verifies the authenticity of the token using the public key. When systems exchange confidential data, the JSON secure app is used, which helps in identifying the user without any private credentials.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="primary" className='w-75 mx-auto mb-4'>
                    <Card.Header className='fs-5'>What is differences between SQL and NoSQL databases ?</Card.Header>
                    <Card.Body>
                    <Card.Title className='text-center'>Answer:</Card.Title>
                        <Card.Text>
                            <p>
                                <span className='text-success '>SQL Database :</span> SQL database is the standard language for Relational Database System. It's called Relational Database. SQL databases follow ACID. It is vertically scalable. A SQL database is a collection of tables that stores a specific set of structured data.
                                </p>
                            <p>
                                <span className='text-success '>NoSQL Database :</span> NoSQL database is a database designed to allow for scalable data storage that can handle. It's called Non-Relational Database. NoSQL database follows the Brewers CAP. It is horizontally scalable.
                                </p>
                            
                        </Card.Text>
                    </Card.Body>
                </Card>
                
            </div>
        </div>
    );
};

export default Blogs;