class ForecastDay:
    def __init__(self, date, temperature, description,humidity,wind_speed):
        self.date = date
        self.temperature = temperature
        self.humidity = humidity
        self.wind_speed = wind_speed
        self.description = description
        
    def to_dict(self):
        return {
            'date': self.date,
            'temperature': self.temperature,
            'humidity': self.humidity,
            'wind_speed': self.wind_speed,
            'description': self.description
        }
