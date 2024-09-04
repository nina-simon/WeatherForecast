import React, { useState, useEffect } from "react";

import { Card, Row, Col } from "react-bootstrap";
import { useWeatherData } from "../../api/queries";

const HumidityCard = () => {
  const [humidity, setHumidity] = useState("");
  const { weatherData, isSuccess } = useWeatherData();

  useEffect(() => {
    if (isSuccess && weatherData.current_humidity) {
      setHumidity(weatherData.current_humidity);
    }
  }, [isSuccess, weatherData.current_humidity]);

  return (
    <Card className="card-stats">
      <Card.Body>
        <Row>
          <Col xs="5">
            <div className="icon-big text-center icon-warning">
              <i className="nc-icon nc-sun-fog-29 text-success"></i>
            </div>
          </Col>
          <Col xs="7">
            <div className="numbers">
              <p className="card-category">Current Humidity</p>
              <Card.Title as="h4">{humidity}%</Card.Title>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default HumidityCard;
