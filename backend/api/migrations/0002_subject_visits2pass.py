# Generated by Django 4.0.1 on 2022-01-12 08:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='subject',
            name='visits2pass',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]
