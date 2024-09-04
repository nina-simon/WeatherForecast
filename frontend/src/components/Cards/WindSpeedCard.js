import React, { useState, useEffect } from "react";

import { Card, Row, Col } from "react-bootstrap";
import { useWeatherData } from "../../api/queries";

const WindSpeedCard = () => {
  const [windSpeed, setWindSpeed] = useState("");
  const { weatherData, isSuccess } = useWeatherData();

  useEffect(() => {
    if (isSuccess && weatherData.current_wind_speed) {
      setWindSpeed(weatherData.current_wind_speed);
    }
  }, [isSuccess, weatherData.current_wind_speed]);

  return (
    <Card className="card-stats">
      <Card.Body>
        <Row>
          <Col xs="5">
            <div className="icon-big text-center icon-warning">
              <i className="nc-icon nc-align-left-2 text-primary"></i>
            </div>
          </Col>
          <Col xs="7">
            <div className="numbers">
              <p className="card-category">Current WindSpeed</p>
              <Card.Title as="h4">{windSpeed}m/s</Card.Title>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default WindSpeedCard;
