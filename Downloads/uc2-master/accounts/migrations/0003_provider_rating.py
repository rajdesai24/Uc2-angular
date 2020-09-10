# Generated by Django 3.1.1 on 2020-09-05 11:56

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_order_provider'),
    ]

    operations = [
        migrations.AddField(
            model_name='provider',
            name='rating',
            field=models.PositiveIntegerField(null=True, validators=[django.core.validators.MaxValueValidator(10)]),
        ),
    ]