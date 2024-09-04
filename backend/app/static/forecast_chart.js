document.addEventListener('DOMContentLoaded', function () {
    const forecastData = {{ weather_info.forecast_days | tojson
}};
const forecastDates = forecastData.map(day => day.date);
const forecastTemperatures = forecastData.map(day => day.temperature);

const ctx = document.getElementById('forecast-chart').getContext('2d');
const forecastChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: forecastDates,
        datasets: [{
            label: 'Temperature (°C)',
            data: forecastTemperatures,
            borderColor: 'rgb(75, 192, 192)',
            fill: false
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});
});
