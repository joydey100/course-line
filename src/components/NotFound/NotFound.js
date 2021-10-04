import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import NotFoundImg from "../../images/notfound.svg";

const NotFound = () => {
  // useHistory HOOk calling for back to home page
  const history = useHistory();

  //  back to home page button handler
  const backToHome = () => {
    history.push("/");
  };

  return (
    <section className="not-found-section">
      <Container>
        <Row>
          <Col md={8} className="mx-auto text-center">
            <img src={NotFoundImg} alt="404" className="img-fluid" />
            <h2 className="text-center"> OOOps! Page Not Found </h2>
            <button
              className="mt-3 btn-padding bg-green text-white border-0 rounded-pill"
              onClick={backToHome}
            >
              Back to Home Page
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NotFound;
