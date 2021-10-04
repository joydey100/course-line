import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./HomeServiceCard.css";

const HomeServicesCard = (props) => {
  const { name, img, rating, price } = props.service;
  return (
    <Col md={6}>
      <Card className="h-100 shadow-lg">
        <Row>
          <Col md={5}>
            <img src={img} alt="service-img" className="home-service-img" />
          </Col>
          <Col md={7} className="d-flex align-items-center">
            <div className="banner-info p-2">
              <h5 className="mb-3 fw-bold"> {name}</h5>
              <p className="text-secondary">
                Rating: <span> {rating} </span>
              </p>
              <p className="text-green fw-500 fs-4">Price: ${price}</p>
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default HomeServicesCard;
