from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.timezone import now
from django.core.validators import MaxValueValidator


class Services(models.Model):
    services = models.CharField(max_length=50)

    def __str__(self):
        return self.services


class User(AbstractUser):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    username = models.CharField(max_length=50, unique=True)
class Customer(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, to_field="username", db_column="user")
    phone_no = models.CharField(max_length=20)
class Provider(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, to_field="username", db_column="user")
    choice = models.ForeignKey(Services, on_delete=models.CASCADE)

class Order(models.Model):
    customerid = models.OneToOneField(
        Customer, on_delete=models.CASCADE, primary_key=True)
    choice = models.ForeignKey(Services, on_delete=models.CASCADE)
    start_time = models.DateTimeField(default=now)
    end_time = models.DateTimeField(default=now)
    provider=models.ForeignKey(Provider,on_delete=models.CASCADE,null=True,blank=True)


# Create your models here.
