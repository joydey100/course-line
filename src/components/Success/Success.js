import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SuccessImg from "../../images/success.gif";

const Success = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col md={8} className="mx-auto">
            <img src={SuccessImg} alt="success-img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Success;
