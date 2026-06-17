import requests
import logging

from celery import shared_task

from django.utils import timezone
from django.conf import settings

from barangays.models import Barangay

logger = logging.getLogger(__name__)
OPEN_WEATHER_MAP_API = settings.OPEN_WEATHER_MAP_API

def rainfall_url(latitude: float, longitude: float) -> str:
    return f"https://api.openweathermap.org/data/2.5/weather?lat={latitude}&lon={longitude}&appid={OPEN_WEATHER_MAP_API}"

@shared_task
def fetch_rainfall_information():
    # fetch data from api
    barangays = Barangay.objects.all()
    readings = []

    for barangay in barangays:
        centroid = barangay.boundary.centroid

        response = requests.get(
            rainfall_url(centroid.y, centroid.x),
            timeout=10 
        )
        response.raise_for_status()
        data = response.json()

        logger.info(f"Fetched rainfall information for {barangay.name}")
    
    # clean data
    # store data using model
    # return signal
    return 0