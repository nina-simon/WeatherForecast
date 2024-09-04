import os
from dotenv import load_dotenv

load_dotenv()

EMAIL_ADDRESS = str(os.getenv("EMAIL_ADDRESS"))
EMAIL_PASSWORD = str(os.getenv("EMAIL_PASSWORD"))
TO_EMAIL = str(os.getenv("TO_EMAIL"))
