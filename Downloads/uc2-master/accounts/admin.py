from django.contrib import admin
from .models import User, Customer, Provider, Services, Order

admin.site.register(User)
admin.site.register(Customer)
admin.site.register(Provider)
admin.site.register(Services)
admin.site.register(Order)

# Register your models here.
