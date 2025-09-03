from django.db import models
from mongoengine import Document, fields
# Create your models here.


class User(Document):
    
    first_name = fields.StringField(required=True, max_length=100)
    last_name = fields.StringField(required=True, max_length=100)
    email = fields.EmailField(required=True, unique=True)
    phone = fields.StringField(max_length=15)
    password = fields.StringField(required=True,max_length=20)


    meta = {
        'collection':'users_data'
    }

    def __str__(self):
        return f"{self.first_name} {self.last_name} "
    