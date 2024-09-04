from app.weather_api import fetch_weather_data
from app.email_service import send_temperature_alert
from app.models.forecast_model import ForecastDay

def get_weather_info():
    data = fetch_weather_data()
    
    city_data = data['city']
    current_temperature = data['list'][0]['main']['temp']
    current_humidity = data['list'][0]['main']['humidity']
    current_wind_speed = data['list'][0]['wind']['speed']
    current_description = data['list'][0]['weather'][0]['description']
    forecast_data = data['list'][1:]  # Exclude the current weather data
    forecast_days = []
    
    for forecast in forecast_data:
        date = forecast['dt_txt']
        temperature = forecast['main']['temp']
        humidity = forecast['main']['humidity']
        wind_speed = forecast['wind']['speed']
        description = forecast['weather'][0]['description']
        
        forecast_days.append(ForecastDay(date, temperature, description,humidity, wind_speed))
    
    weather_info = {
        'current_temperature': current_temperature,
        'current_humidity': current_humidity,
        'current_wind_speed': current_wind_speed,
        'forecast_days': forecast_days,
        'current_description': current_description

    }
    return weather_info

