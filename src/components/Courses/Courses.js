import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import AllCourses from '../AllCourses/AllCourses';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck} from '@fortawesome/free-solid-svg-icons';
import img from '../../images/about.png'
import './Courses.css'

const Courses = () => {
    const [courses , setCourses] = useState([]);

    useEffect(() => {
        fetch('./courses.JSON')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div>
        <div className="top-courses">
            <h1>Our Top Courses</h1>
        </div>
       
        <Row xs={1} md={4} className="g-4">
             {
                courses.map(courses => <AllCourses courses={courses}></AllCourses>) 
             }
        </Row>

        <div className="qustion-area">
            <div className="qus-header-section">
               <h1>World Class Facilities</h1>
               <h4>Ask The Question, Learn With Perfection, Lead With Conviction</h4>
            </div>
            <div className="qus-section">
               <img src={img} alt="" />
               <div className="qustion-container">
                   <div>
                       <h1><span style={{color:"#0388fc"}}>Ask whatever you want</span></h1>
                       <h4>Get your exam related doubts and questions answered by experienced and qualified faculty</h4>
                   </div>
                   <div className="qus-point">
                       <div className="qus-with-icon">
                           <div><FontAwesomeIcon icon={faCheck} /></div>
                           <h6>Stuck with subject related queries?</h6>
                       </div>
                       <div className="qus-with-icon">
                           <div><FontAwesomeIcon icon={faCheck} /></div>
                           <h6>Confused among lots of career choices?</h6>
                       </div>
                       <div className="qus-with-icon">
                           <div><FontAwesomeIcon icon={faCheck} /></div>
                           <h6>Looking for expert guidance in studies?</h6>
                       </div>
                       <div className="qus-with-icon">
                           <div><FontAwesomeIcon icon={faCheck} /></div>
                           <h6>Want latest notification about exams?</h6>
                       </div>
                    </div>
               </div>
            </div>
        </div>
       
    </div>
    );
};

export default Courses;
