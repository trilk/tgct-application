import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Dashboard() {
  return (
    <Container fluid>
      <Row className="py-3">
        <Col>Header</Col>
      </Row>
      <Row>
        <h2>Dashboard Page</h2>
      </Row>
    </Container>
  );
}

export default Dashboard;
