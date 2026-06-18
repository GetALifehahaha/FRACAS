import requests
import logging

from celery import shared_task

from django.utils import timezone
from django.conf import settings

from barangays.models import Barangay

logger = logging.getLogger(__name__)
OPEN_WEATHER_MAP_API = settings.OPEN_WEATHER_MAP_API

def rainfall_url(latitude: float, longitude: float) -> str:
    return (
        f"https://api.open-meteo.com/v1/forecast"
        f"?latitude={latitude}&longitude={longitude}"
        f"&current=precipitation&hourly=precipitation&forecast_days=1"
    )

def parse_rainfall_data(data):
    current_rainfall = data['current']['precipitation']
    current_hour = data['current']['time'][:13]
    times = data['hourly']['time']
    precipitation = data['hourly']['precipitation']

    index = next(i for i, t in enumerate(times) if t.startswith(current_hour))
    forecast = lambda x: precipitation[index + x] if index + x < len(precipitation) else 0

    return {
        'current': current_rainfall,
        'forecast_1hr': forecast(1),
        'forecast_2hr': forecast(2),
        'forecast_3hr': forecast(3),
        'forecast_4hr': forecast(4),
    }

@shared_task
def fetch_rainfall_information():
    # fetch data from api
    barangays = Barangay.objects.all()
    readings = []

    for barangay in barangays[:3]:
        centroid = barangay.boundary.centroid

        response = requests.get(
            rainfall_url(centroid.y, centroid.x), #rainfall url expects latitude (y) and longitude (x)
            timeout=10 
        )
        response.raise_for_status()
        data = parse_rainfall_data(response.json())

        logger.info(f"Fetched rainfall information for {barangay.name}: {data}")
    
    # clean data
    # store data using model
    # return signal
    return 0