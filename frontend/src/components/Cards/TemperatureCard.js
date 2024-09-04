import React, { useState, useEffect } from "react";

import { Card, Row, Col } from "react-bootstrap";
import { useWeatherData } from "../../api/queries";

const TemperatureCard = () => {
  const [temperature, setTemperature] = useState("");
  const { weatherData, isSuccess } = useWeatherData();

  useEffect(() => {
    if (isSuccess && weatherData.current_temperature) {
      setTemperature(weatherData.current_temperature);
    }
  }, [isSuccess, weatherData.current_temperature]);

  return (
    <Card className="card-stats">
      <Card.Body>
        <Row>
          <Col xs="5">
            <div className="icon-big text-center icon-warning">
              <i className="nc-icon nc-explore-2 text-danger"></i>
            </div>
          </Col>
          <Col xs="7">
            <div className="numbers">
              <p className="card-category">Current Temperature</p>
              <Card.Title as="h4">{temperature}°C</Card.Title>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default TemperatureCard;
