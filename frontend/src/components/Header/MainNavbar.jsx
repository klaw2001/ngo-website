import React from "react";
import logo from "../img/logo-color.png";
import { Container } from "react-bootstrap";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function MainNavbar() {
  return (
    <Container>
      <Navbar expand="lg" className=" w-100">
        <Container>
          <div className="main-navbar d-flex justify-content-between w-100">
            <Navbar.Brand href="#home">
              <img src={logo} alt="" className="" width={200} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="">
              <Nav className="me-auto text-center w-100 justify-content-center nav-items-flex">
                <NavLink to="/" className=' text-dark'>Home</NavLink>
                <NavLink to="/about" className=' text-dark'>About</NavLink>
                <NavLink to="/cause" className=' text-dark'>Cause</NavLink>
                <NavLink to="/events" className=' text-dark'>Events</NavLink>
                <NavLink to="/gallery" className=' text-dark'>Gallery</NavLink>
                <NavLink to="/contact" className=' text-dark'>Contact</NavLink>
              </Nav>
            </Navbar.Collapse>
            <div className="donate-box d-flex align-items-center">
              <div className="call-box d-flex">
                <BsFillTelephoneInboundFill className="me-3 fs-3 my-auto"/>
                <div className="call-text">
                  <p className="fw-bold fs-5 mb-0">Any questions?</p>
                  <span>Phone 202 303 405</span>
                </div>
              </div>
              <button className="donate-btn">DONATE</button>
            </div>
          </div>
        </Container>
      </Navbar>
    </Container>
  );
}

export default MainNavbar;
