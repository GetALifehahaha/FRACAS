from celery import shared_task
import requests
import logging
from backend.settings import OPEN_WEATHER_MAP_API

logger = logging.getLogger(__name__)

def rainfall_url(latitude: float, longitude: float) -> str:
    return f"https://api.openweathermap.org/data/2.5/weather?lat={latitude}&lon={longitude}&appid={OPEN_WEATHER_MAP_API}"

@shared_task
def fetch_rainfall_information():
    # fetch data from api
    response = requests.get(rainfall_url(6.921442, 122.079027))
    logger.info("Fetching rainfall data.")
    data = response.json()
    logger.debug(f"Received rainfall data: {data}")
    
    # clean data
    # store data using model
    # return signal
    return 0