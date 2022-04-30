import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../Images/NotFound/404.png'

const NotFound = () => {
    return (
        <div>
            <div>
            <img className=' w-75' src={notFound} alt="" />
            </div>
            <Link to='/'>
            <button className='btn btn-primary w-25 fs-5'>Go Home</button>
            </Link>
        </div>
    );
};

export default NotFound;