import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./HomeServiceCard.css";

const HomeServicesCard = (props) => {
  const { name, img, rating, price, instructor } = props.service;
  return (
    <Col md={6}>
      <Card className="h-100 shadow-lg">
        <Row>
          <Col md={5}>
            <img src={img} alt="service-img" className="home-service-img" />
          </Col>
          <Col>
            <div className="banner-info p-2">
              <p> {name}</p>
              <p> {instructor}</p>
              <p> {rating}</p>
              <p> {price}</p>
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default HomeServicesCard;
