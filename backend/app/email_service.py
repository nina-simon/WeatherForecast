import smtplib
from email.mime.text import MIMEText
from app.config.secrets import EMAIL_ADDRESS, EMAIL_PASSWORD, TO_EMAIL


def send_email(subject, message):
    msg = MIMEText(message)
    msg['Subject'] = subject
    msg['From'] = EMAIL_ADDRESS
    msg['To'] = TO_EMAIL

    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
    server.sendmail(EMAIL_ADDRESS, TO_EMAIL, msg.as_string())
    server.quit()

def send_temperature_alert(temperature, humidity, wind_speed):
    subject = 'Temperature Alert'
    message = f'Temperature is {temperature}°C, exceeding 10°C threshold!\n'
    message += f'Humidity: {humidity}%\n'
    message += f'Wind Speed: {wind_speed} m/s'
    print(humidity)
    print(wind_speed)
    send_email(subject, message)

