FROM python:3.12-slim

WORKDIR /backend

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
RUN apt update && apt install -y \ 
    gdal-bin \
    libgdal-dev \
    python3-gdal 

COPY . .
CMD [ "python3", "manage.py", "runserver" ]
