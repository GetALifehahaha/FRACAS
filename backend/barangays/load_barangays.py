from django.contrib.gis.utils import LayerMapping
from django.contrib.gis.gdal import DataSource 
from .models import Barangay

"""

This is a data cleaning/storage code. 
This will fetch barangays only assigned to Zamboanga City using the provincial code PH0907332. 
This will fetch the geopackage, assign it as a DataSource from gis.gdal, then only get the layer 4
which is for individual barangays.

We will get Zamboanga City's barangay features and assign them into an array by matching their provincial code (pcode).

We will iterate through each of the barangays. We will use the get_or_create feature of Django objects
to either iterate if exisiting or create using the required features (excluding land_height) if not, 
removing redundancy errors if we run this again. We will store them in our Barangay models through iterations.

We will run this script/code through: 

docker exec -it django_backend python3 manage.py shell < /backend/barangays/load_barangays.py

"""

def load_barangays():
    path = '/backend/phl_admin_boundaries.gdb'
    ds = DataSource(path)
    layer = ds[4]

    zamboanga_features = [
        f for f in layer
        if f.get('adm3_pcode') == 'PH0907332'
    ]

    for feature in zamboanga_features:
        Barangay.objects.get_or_create(
            code = feature.get('adm4_pcode'),
            defaults={
                'name': feature.get('adm4_name'),
                'province_code': feature.get('adm3_pcode'),
                'area_square_km': feature.get('area_sqkm'),
                'boundary': feature.geom.wkt,
            }
        )

    print(f"Loaded {len(zamboanga_features)} barangays!")

if __name__ == '__main__':
    load_barangays()
