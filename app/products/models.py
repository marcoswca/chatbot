from bson.objectid import ObjectId
from mongoengine.fields import ListField,\
    EmbeddedDocumentListField, EmbeddedDocumentField, EmbeddedDocument,\
    ObjectIdField, IntField, StringField,\
    BooleanField, Document

class Product(Document):
    product = StringField(max_length=100, required=True, unique=True)
    qty = IntField(required=True)
    onSale = BooleanField(required=True)
    location = StringField(max_length=3, required=True)
