import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="py-3">
      <Container>
        <NavLink
          to="/"
          className="text-decoration-none fs-4 text-green fw-bolder"
        >
          <i className="fas fa-graduation-cap me-2"></i>
          Course Line
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink
              to="/"
              className="text-decoration-none fs-5 ms-3 py-3 py-lg-0 text-secondary"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-decoration-none fs-5 ms-3 py-3 py-lg-0 text-secondary"
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className="text-decoration-none fs-5 ms-3 py-3 py-lg-0 text-secondary"
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className="text-decoration-none fs-5 ms-3 py-3 py-lg-0 text-secondary"
            >
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
