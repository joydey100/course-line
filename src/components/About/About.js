import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AboutImg from "../../images/about.svg";
import "./About.css";
import courseState from "./AboutStat";

const About = () => {
  return (
    <Container>
      {/* About Section */}
      <section className="about-section">
        {/* About Info Section */}
        <Row className="about-info">
          <Col md={6} className="d-flex align-items-center">
            <div>
              <h2 className="fs-3">About Us</h2>
              <p className="text-secondary about-text">
                At <span className="text-green fw-bold"> Course Line</span> , we
                believe everyone should have the opportunity to create progress
                through technology and develop the skills of tomorrow. With
                assessments, learning paths and courses authored by industry
                experts. We provide best course for you with our experienced
                tutors. They will give you their professional experience, which
                can enrich your knowledge.
              </p>
            </div>
          </Col>
          <Col md={6}>
            {/* About Image */}
            <img src={AboutImg} alt="about-img" />
          </Col>
        </Row>

        {/* Some Statistics about Course Line */}
        <Row className="mt-5">
          {/* Mapping course Statistics from courseStat */}
          {courseState.map((stat) => (
            <Col md={4} key={stat.id}>
              <div className="shadow-lg p-3 text-center d-flex align-items-center justify-content-center">
                <div>
                  <img src={stat.img} alt="course-img" className="mb-3" />
                  <h2 className="text-secondary-green"> {stat.amount}+</h2>
                  <p className="text-secondary"> {stat.name}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
};

export default About;
