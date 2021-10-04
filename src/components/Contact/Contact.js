import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import ContactImg from "../../images/contact.svg";

const Contact = () => {
  return (
    <Container>
      {/* Contact Section */}
      <Row>
        <Col md={7} className="mx-auto">
          <h2 className="text-center fs-3 text-secondary mt-5 fw-bold">
            Contact Us
          </h2>
          <p className="text-center text-secondary mt-3">
            If you have any queries about course, instructor and other kinds of
            stuff, Feel Free to Contact with us. Our Support Team is 24/7 Hour
            Active to support you and make a good decision for buying a best
            course for you.
          </p>
        </Col>
      </Row>

      {/* Contact Field */}

      <Row className="mt-5" style={{ border: "4px solid #49bc6038" }}>
        <Col
          md={6}
          className="d-flex align-items-center"
          style={{ backgroundColor: "#49bc6038" }}
        >
          <div className="contact-info w-100">
            {/* Name Field */}
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Full Name"
                className="p-3"
              />
            </Form.Group>
            {/* Email Address */}
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email Address"
                className="p-3"
              />
            </Form.Group>
            {/* Message Area */}
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Write Your Message"
                className="p-3"
              />
            </Form.Group>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn-padding bg-green text-white  border-0 rounded-pill"
            >
              {" "}
              Submit
            </button>
          </div>
        </Col>
        <Col md={6}>
          <img src={ContactImg} alt="contact-img" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
