import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='bg-black text-white'>
            <div className="container px-4 bg-black text-white">
                <h3 className='text-white mx-3 pt-3'>MNA <span className='text-warning'>CARS</span> WAREHOUSE</h3>
                <div className="row gx-5">
                    <div className="col">
                        <div className="mb-3 mx-3"> <small>All Rights Reserved . Copyright © {year}</small> </div>
                    </div>
                    <div className="col">
                        <div className="mb-3 text-end "><small>Designed by @mnaofficialbd</small></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;