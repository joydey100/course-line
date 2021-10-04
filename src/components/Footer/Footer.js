import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="py-5 text-white">
      <Container>
        <Row>
          <Col md={8} className="mx-auto text-center py-5">
            {/* Footer Logo */}
            <NavLink
              to="/"
              className="text-decoration-none fs-2 text-green fw-bold"
            >
              <i className="fas fa-graduation-cap me-2"></i>
              Course Line
            </NavLink>

            {/* Footer Links */}
            <div className="footer-links mt-4">
              <NavLink
                to="/"
                className="text-decoration-none fs-5 ms-3 py-3 py-lg-0 text-white"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="text-decoration-none fs-5 ms-3 py-3 py-lg-0 text-white"
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                className="text-decoration-none fs-5 ms-3 py-3 py-lg-0 text-white"
              >
                Services
              </NavLink>
              <NavLink
                to="/contact"
                className="text-decoration-none fs-5 ms-3 py-3 py-lg-0 text-white"
              >
                Contact
              </NavLink>
            </div>

            {/* Copyright Sections */}
            <div className="copyright text-white mt-5">
              <small> &copy; Copyright Reserved by Course Line</small>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
