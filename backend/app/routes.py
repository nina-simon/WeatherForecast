from flask import render_template, jsonify
from app import app
from app.api import get_weather_info, send_temperature_alert
from flask_cors import CORS, cross_origin
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/')
def index():
    weather_info = get_weather_info()
    if weather_info['current_temperature'] > 10:
        send_temperature_alert(weather_info['current_temperature'], weather_info['current_humidity'], weather_info['current_wind_speed'])
    return render_template('index.html', weather_info=weather_info)

@app.route('/api/weather')
@cross_origin() 
def api_weather():
    weather_info = get_weather_info()
    forecast_days_dict = [day.to_dict() for day in weather_info['forecast_days']]
    weather_info['forecast_days'] = forecast_days_dict    
    return jsonify(weather_info)
