# Live Weather Updates

## Project Setup

Update the `.env` file according to the `.env.example` provided

### Virtual Environment Setup

1. python3 -m venv venv
2. source venv/bin/activate
3. pip install -r requirements.txt
4. flask run

### For Dockerized Setup

1. Start your docker desktop and then:
   1. docker build -t weather-app .
   2. docker run -p 5000:5000 weather-app


## Note

This API returns the temperature in Celsius instead of Farenhiet, so the condition for 90°F has been changed to 10°C for the email to work.
