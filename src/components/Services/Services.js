import React from "react";
import { Container, Row } from "react-bootstrap";
import useService from "../../hooks/useService";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  // get Courses or Services by custom hooks
  const [services] = useService();
  return (
    <Container>
      <h2 className="text-center fs-3 text-secondary mt-5 fw-bold">
        Our Services
      </h2>
      <div className="services-container mt-5">
        <Row className="g-4">
          {/* Condition Checking and mapping services */}
          {services.length > 0 &&
            services.map((service) => (
              <ServiceCard service={service} key={service.id} />
            ))}
        </Row>
      </div>
    </Container>
  );
};

export default Services;
