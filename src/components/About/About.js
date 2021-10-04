import React from 'react';
import img from '../../images/pic6.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus } from '@fortawesome/free-solid-svg-icons';
import './About.css'

const About = () => {
    return (
        <div className="about-container">
            
            <div>
                <div>
                    <h1><span style={{color: "#fcca03"}}>World Class Facilities</span></h1>
                    <h4>The concept of school and pre-school education consists of 3 programs of development and training in our academy.The concept of school and pre-school education consists of 3 programs  of development.</h4>
                </div>
                <div className=" color-added">
                    <div className="qus-with-icon">
                        <div><FontAwesomeIcon icon={faPlus} /></div>
                        <h4>3 times support-session per day</h4>
                    </div>
                    <div className="qus-with-icon">
                        <div><FontAwesomeIcon icon={faPlus} /></div>
                        <h4>conceptual-session for extra support</h4>
                    </div>
                    <div className="qus-with-icon">
                        <div><FontAwesomeIcon icon={faPlus} /></div>
                        <h4>Multiple benefits from buying a membership</h4>
                    </div>
                    <div className="qus-with-icon">
                        <div><FontAwesomeIcon icon={faPlus} /></div>
                        <h4>fresh snacks and beverages for everyone</h4>
                    </div>
                    <div className="qus-with-icon">
                        <div><FontAwesomeIcon icon={faPlus} /></div>
                        <h4>over 1000 visitors for the last year</h4>
                    </div>
                    
                </div>
              
            </div>
            <div>
                <img src={img}  alt="" />
            </div>
        </div>
    );
};

export default About;