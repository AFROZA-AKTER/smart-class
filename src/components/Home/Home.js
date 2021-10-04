import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Courses from '../Courses/Courses';
import HighlightedCourses from '../HighlightedCourses/HighlightedCourses';
import './Home.css'

const Home = () => {
    const [displayCourses , setDisplayCourses] = useState([])

    useEffect(() =>{
        fetch('./highlightCourses.JSON')
        .then(res => res.json())
        .then(data => setDisplayCourses(data))
    },[]) ; 

    const handleCourses = () => {
     
    }
    return (
        <div>
            <div className="top-courses">
                <h1>Our Top Courses</h1>
            </div>
           
            <Row xs={1} md={4} className="g-4">
                 {
                    displayCourses.map(courses => <HighlightedCourses courses = {courses}></HighlightedCourses>) 
                 }
            </Row>
            <div className="btn-align">
                <Link to="/courses">
                <button onClick={handleCourses} className="button">View more</button>
                </Link>
                
            </div>
           
        </div>
    );
};

export default Home;