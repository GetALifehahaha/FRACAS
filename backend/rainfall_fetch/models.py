from django.db import models

# Create your models here.
class Rainfall(models.Model):
    rainfall_strength = models.DecimalField(max_digits=11, decimal_places=2)
    forecast_strength = models.DecimalField(max_digits=11, decimal_places=2)
    rate_of_change = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)