import requests
from app.config.settings import WEATHER_API_URL

def fetch_weather_data():
    response = requests.get(WEATHER_API_URL)
    data = response.json()
    return data
