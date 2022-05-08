import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const AboutDeveloper = () => {
    return (
        <div>
            <h2 className='text-center text-danger mt-3'>About Developer</h2>

            <CardGroup className='w-50 mx-auto mb-5'>
                <Card className='mt-3'>
                    <img className='w-100 mx-auto' src="https://i.ibb.co/jD3tCd4/mna.png" alt="" />
                    <Card.Footer className='text-center'>
                        <h2 className='text-center text-success mt-3'>Mohammad Nurul Azam</h2>
                        <div className='mx-4 w-50'>

                            <div className='mt-2 w-50 mx-auto d-flex'>
                                <a href="https://www.facebook.com/mnaofficialbd">
                                    <img className='mx-3' style={{ height: '30px', width: '30px' }} src='https://i.ibb.co/SBMtMC1/facebook.png' alt="" />
                                </a>
                                <a href="https://www.twitter.com/mnaofficialbd">
                                    <img className='mx-3' style={{ height: '30px', width: '30px' }} src='https://i.ibb.co/j4T8qbd/twitter.png' alt="" />
                                </a>
                                <a href="https://www.instagram.com/mnaofficialbd">
                                    <img className='mx-3' style={{ height: '30px', width: '30px' }} src='https://i.ibb.co/DkFxTMF/instagram.png' alt="" />
                                </a>
                            </div>
                        </div>
                    </Card.Footer>
                </Card>
                <Card className='mt-3'>
                    <Card.Body>
                        <Card.Title className='text-center'>About Me</Card.Title>
                        <div className='fs-5'>
                            <p>
                                I am Mohammad Nurul Azam. I'm a student of BBS and Programming Hero.
                            </p>
                            <p>
                                I was born in the village of East Raozan Rashidarpara in Raozan Upazila of Chittagong district. I was born on September 09,1998.
                            </p>
                            <p>
                                I love to dream and try to fill it out. I love to work on my hobbies. I feel better to work with any work design and programming code.
                            </p>
                            <p>
                                I have a passion for learning and sharing my knowledge with others as publicly as possible. I love to solve real-world problems.
                            </p>
                            <p>
                                I also like to work in the Youtube as well as design.I also have several Youtube Channels.
                            </p>
                        </div>

                    </Card.Body>

                </Card>
            </CardGroup>

        </div>
    );
};

export default AboutDeveloper;