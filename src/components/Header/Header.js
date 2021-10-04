import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
import img from '../../images/web.jpg'


const Header = () => {
    const activeStyle= {
        fontWeight: "bold",
        color: "white" ,
        
      }
      

    return (
        <div>
          <div>

          
            <Navbar bg="success" className="navbar">
              <Container>
                <Nav className="">
                    <NavLink activeStyle={activeStyle} className="linkStyle" to="home">Home</NavLink>
                    <NavLink activeStyle={activeStyle} className="linkStyle" to="about">About</NavLink>
                    <NavLink activeStyle={activeStyle} className="linkStyle" to="courses">Courses</NavLink>
                    <NavLink activeStyle={activeStyle} className="linkStyle" to="teachers">Teachers</NavLink>
                </Nav>
              </Container>
            </Navbar>
          </div>
          <div >
            
            <img className="w-100" src={img} alt="" />
          </div>
          
            
        </div>
    );
};

export default Header;