import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import bannerImg from "../../images/banner.svg";
import "./Banner.css";
const Banner = () => {
  return (
    <section>
      {/* Banner Section */}
      <Container>
        <Row>
          <Col md={6} className="d-flex align-items-center">
            <div className="banner-info">
              <h2 className="fw-bolder banner-title mb-3">
                Build Your Skill with Our{" "}
                <span className="text-green">Online Courses</span>
              </h2>
              <p className="text-secondary mb-4">
                We are providing the best quality online courses in various
                fields like - Programming, Photography, Music, and so on. By
                learning our courses, you can show your creativity to the world.
              </p>
              <NavLink
                to="/services"
                className="text-decoration-none btn-padding bg-green text-white rounded-pill"
              >
                See our Services
              </NavLink>
            </div>
          </Col>
          <Col md={6}>
            <img src={bannerImg} alt="banner" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
