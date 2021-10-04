import React from 'react';
import { Card, Col } from 'react-bootstrap';

const AllCourses = (props) => {
        const {name , img , price , about} = props.courses ;
        return (
             <div >
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Title>
                                fee: ${price}
                        </Card.Title>
                        <Card.Text>
                                {about}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
             </div>
          
        );
    };
export default AllCourses;