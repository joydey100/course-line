import React from "react";
import { Card, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./ServiceCard.css";

const ServiceCard = (props) => {
  // Destructuring Elements
  const {
    img,
    name,
    price,
    rating,
    lecture,
    articles,
    hours,
    access,
    instructor,
    instructorInfo,
    instructorImg,
    lastUpdated,
  } = props.service;
  return (
    <Col md={4}>
      <Card className="h-100 shadow">
        <Card.Img variant="top" src={img}></Card.Img>
        <Card.Body>
          <h5 className="mb-3"> {name}</h5>
          <small className="text-secondary mt-1 mb-3 d-block">
            Last Updated: {lastUpdated}
          </small>
          <p className="text-green fw-500 fs-5">Price: ${price}</p>
          <p className="text-secondary">
            Rating: <span> {rating} </span>
          </p>
          <p className="text-secondary">Duration: {hours} Hours</p>
          <p className="text-secondary">Lecture: {lecture} Lectures</p>
          <p className="text-secondary">Article: {articles} Articles</p>
          <p className="text-secondary">Access: {access} Access</p>
          <div className="instructor-info d-flex aliign-items-center">
            <div className="instructor-img d-flex align-items-center">
              <img
                src={instructorImg}
                alt="instructor-img"
                className="instructor-img d-block"
              />
            </div>
            <div className="instructor-name d-flex align-items-center ms-3">
              <div>
                <p className="mb-0">{instructor}</p>
                <small className="mb-0 text-secondary">
                  {" "}
                  {instructorInfo}{" "}
                </small>
              </div>
            </div>
          </div>
          <div className="text-center">
            <NavLink
              to="/success"
              className="d-block mt-4 text-decoration-none py-2 bg-green text-white"
            >
              Order Now
            </NavLink>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ServiceCard;
