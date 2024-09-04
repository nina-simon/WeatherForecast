import React, { useState, useEffect } from "react";

import { Card, Row, Col } from "react-bootstrap";
import { useWeatherData } from "../../api/queries";

const DescriptionCard = () => {
  const [description, setDescription] = useState("");
  const { weatherData, isSuccess } = useWeatherData();

  useEffect(() => {
    if (isSuccess && weatherData.current_description) {
      setDescription(weatherData.current_description);
    }
  }, [isSuccess, weatherData.current_description]);

  return (
    <Card className="card-stats">
      <Card.Body>
        <Row>
          <Col xs="5">
            <div className="icon-big text-center icon-warning">
              <i className="nc-icon nc-chat-round text-warning"></i>
            </div>
          </Col>
          <Col xs="7">
            <div className="numbers">
              <p className="card-category">Current Description</p>
              <Card.Title as="h4">{description}</Card.Title>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default DescriptionCard;
