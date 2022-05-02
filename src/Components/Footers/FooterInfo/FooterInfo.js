import { faDoorOpen, faEnvelope, faGlobe, faLocationDot, faPhone, faShopSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import methods from '../../../Images/PaymentMethod/paymentmethod.png';
import facebook from '../../../Images/SocialIcon/facebook.png';
import twitter from '../../../Images/SocialIcon/twitter.png';
import instagram from '../../../Images/SocialIcon/instagram.png';

const FooterInfo = () => {
    return (
        <div className='bg-dark text-white mt-3'>
            <div className='d-flex p-4 w-100'>
                <div className='mx-4 w-50'>
                    <h4 className='text-center text-info'>CONTACT INFO :</h4>
                    <div className='mt-4'>
                        <p><FontAwesomeIcon className='mx-2' icon={faLocationDot}></FontAwesomeIcon>Raozan, Chittagong, Bangladesh.</p>
                        <p><FontAwesomeIcon className='mx-2' icon={faEnvelope}></FontAwesomeIcon>info@mnacarswarehouse.com</p>
                        <p><FontAwesomeIcon className='mx-2' icon={faPhone}></FontAwesomeIcon>+8801888-000000</p>
                        <p><FontAwesomeIcon className='mx-2' icon={faGlobe}></FontAwesomeIcon>https://mnacarswarehouse.com</p>
                    </div>
                </div>
                <div className='mx-4 w-50'>
                    <h4 className='text-center text-info'>OPEN HOURS :</h4>
                    <div className='mt-4'>
                        <p><FontAwesomeIcon className='mx-2' icon={faDoorOpen}></FontAwesomeIcon>Mon-Sat : 8:00am - 5:00pm</p>
                        <p><FontAwesomeIcon className='mx-2' icon={faShopSlash}></FontAwesomeIcon>Sunday is closed</p>
                    </div>
                </div>
                <div className='mx-4 w-50'>
                    <h4 className='text-center text-info'>FOLLOW US :</h4>
                    <div className='mt-4 w-75 text-center mx-auto'>
                        <a href="https://www.facebook.com/mnaofficialbd">
                            <img className='mx-3' style={{ height: '40px', width: '40px' }} src={facebook} alt="" />
                        </a>
                        <a href="https://www.twitter.com/mnaofficialbd">
                            <img className='mx-3' style={{ height: '40px', width: '40px' }} src={twitter} alt="" />
                        </a>
                        <a href="https://www.instagram.com/mnaofficialbd">
                            <img className='mx-3' style={{ height: '40px', width: '40px' }} src={instagram} alt="" />
                        </a>
                    </div>
                </div>
                <div className='mx-4 w-50'>
                    <h4 className='text-center text-info'>PAY WITH :</h4>
                    <div className='mt-4 w-75 text-center mx-auto'>
                        <img className='w-50' src={methods} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterInfo;