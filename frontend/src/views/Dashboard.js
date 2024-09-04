import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

import Graph from "../components/Graphs/Graph";
import DescriptionCard from "../components/Cards/DescriptionCard";
import HumidityCard from "components/Cards/HumidityCard";
import TemperatureCard from "components/Cards/TemperatureCard";
import WindSpeedCard from "components/Cards/WindSpeedCard";

function Dashboard() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <DescriptionCard />
          </Col>
          <Col lg="3" sm="6">
            <HumidityCard />
          </Col>
          <Col lg="3" sm="6">
            <TemperatureCard />
          </Col>
          <Col lg="3" sm="6">
            <WindSpeedCard />
          </Col>
        </Row>
        <Row>
          <Graph />
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
