import React from 'react';
import img from '../../images/favicon-96x96-removebg-preview.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

const Footer = () => {
    return (
        <div  className="bg-dark about-us">
            <div>
                <div className="smart-class">
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <div className="nameStyle">
                        <h1>Smart-Class</h1>
                    </div>
                </div>
                <div className="title">
                    <p>Smart-Class is a fun, interactive, visual, and friendly way to learn programming.</p>
                </div>
               
            </div>
            <div >
                 <h1 className="header-text">Contact Us</h1>
                 <div>
                     <div className="info">
                        <div className="icon">
                           <FontAwesomeIcon icon={faMapMarkerAlt} /> 
                        </div>
                        <div>
                           <p>Spring Store London Oxford Street, 012 United <br /> Kingdom</p>
                        </div>
                     </div>
                     <div className="info">
                        <div className="icon">
                            <FontAwesomeIcon icon={faPhoneAlt} />
                        </div>
                        <div>
                            <p>Mobile: +00 1234 456789</p>
                        </div>
                     </div>
                     <div className="info">
                        <div className="icon">
                           <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <div>
                            <p>Mail: smartclass@mail.com</p>
                        </div>
                     </div>
                  
                  
                  
                 </div>
                </div>
                    <div>
                        <h1 className="header-text">Follow Us</h1>
                        <div className="brand-icons">
                            <div className="info">
                                <div className="icon">
                                <FontAwesomeIcon icon={faFacebook} /> 
                                </div>
                                <div>
                                <p>smartclass@facebook.com</p>
                                </div>
                            </div>
                            <div className="info">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </div>
                                <div>
                                    <p>smartclass@insta.com</p>
                                </div>
                            </div>
                            <div className="info">
                                <div className="icon">
                                <FontAwesomeIcon icon={faTwitter} />
                                </div>
                                <div>
                                    <p>smartclass@twitter.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
        </div> 
    );
};

export default Footer;