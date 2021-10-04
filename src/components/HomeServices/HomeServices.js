import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import useService from "../../hooks/useService";
import HomeServicesCard from "../HomeServicesCard/HomeServicesCard";

const HomeServices = () => {
  // get Service or Course Data from Custom Hooks
  const [services] = useService();

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
              This courses are created by popular content creators and enriched
              with their prior experience in their professional workplaces.
            </p>
          </Col>
        </Row>

        {/* Service container */}
        <Row className="mt-4 g-4">
          {services.length > 0 &&
            services.map((service) => (
              <HomeServicesCard key={service.ic} service={service} />
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default HomeServices;
