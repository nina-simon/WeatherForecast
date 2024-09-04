import React, { useState, useEffect } from "react";

import ChartistGraph from "react-chartist";
import { Card, Col } from "react-bootstrap";

import { useWeatherData } from "../../api/queries";

const Graph = () => {
  const [labels, setLabels] = useState([]);
  const [temparatures, setTemparatures] = useState([]);
  const [updateSeconds, setUpdateSeconds] = useState(0);
  const { weatherData, isSuccess } = useWeatherData();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setUpdateSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    setUpdateSeconds(0);
    if (isSuccess && weatherData.forecast_days) {
      const newLabels = weatherData.forecast_days
        .map((day) => day.date.split(" ")[1].substring(0, 5))
        .slice(0, 9);

      const newTemperatures = weatherData.forecast_days
        .map((day) => day.temperature)
        .slice(0, 9);

      setLabels(newLabels);
      setTemparatures(newTemperatures);
    }
  }, [isSuccess, weatherData.forecast_days]);

  return (
    <Col md="12">
      <Card>
        <Card.Header>
          <Card.Title as="h4">Weather Forecast</Card.Title>
          <p className="card-category">24 Hours (3 hour Intervals)</p>
        </Card.Header>
        <Card.Body>
          <div className="ct-chart" id="chartHours">
            <ChartistGraph
              data={{
                labels: labels,
                series: [temparatures],
              }}
              type="Line"
              options={{
                low: 0,
                high: 30,
                showArea: false,
                height: "245px",
                axisX: {
                  showGrid: false,
                },
                lineSmooth: true,
                showLine: true,
                showPoint: true,
                fullWidth: true,
                chartPadding: {
                  right: 50,
                },
              }}
              responsiveOptions={[
                [
                  "screen and (max-width: 640px)",
                  {
                    axisX: {
                      labelInterpolationFnc: function (value) {
                        return value[0];
                      },
                    },
                  },
                ],
              ]}
            />
          </div>
        </Card.Body>
        <Card.Footer>
          <div className="legend">
            <i className="fas fa-circle text-info"></i>
            Temparatures
          </div>
          <hr></hr>
          <div className="stats">
            <i className="fas fa-history"></i>
            Updated {updateSeconds} seconds ago
          </div>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Graph;
