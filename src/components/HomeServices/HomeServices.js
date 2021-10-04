import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useService from "../../hooks/useService";
import HomeServicesCard from "../HomeServicesCard/HomeServicesCard";

const HomeServices = () => {
  // get Service or Course Data from Custom Hooks
  const [services] = useService();

  // Defining serviceArr for show only 4 items
  let serviceArr;

  // Condition checking and update data in service array (only 4 course to show)
  if (services.length > 0) {
    serviceArr = services.slice(0, 4);
  }

  return (
    <section className="home-service-section">
      <Container>
        <Row>
          <Col md={7} className="mx-auto">
            <h2 className="text-center fs-2 fw-bold  mt-3 mb-3">
              Our Services
            </h2>
            <p className="text-secondary text-center">
              As we mentioned, we provide various types of services for you.
              These courses are created by popular content creators and enriched
              with their prior experience in their professional workplaces.
            </p>
          </Col>
        </Row>

        {/* Service container */}
        <Row className="mt-4 g-4">
          {services.length > 0 &&
            serviceArr.map((service) => (
              <HomeServicesCard key={service.id} service={service} />
            ))}

          <Col md={5} className="mt-5 mx-auto text-center">
            <NavLink
              to="/services"
              className="text-decoration-none btn-padding bg-green text-white rounded-pill d-inline-block"
            >
              See More Courses
            </NavLink>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeServices;
