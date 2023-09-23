from peewee import *

db = SqliteDatabase("./product.db")


class BaseModel(Model):
    class Meta:
        database = db

class JSONField(TextField):
    def db_value(self, value):
        return json.dumps(value)

    def python_value(self, value):
        if value is not None:
            return json.loads(value)

class Product(BaseModel):
    productID = PrimaryKeyField(unique=True)
    category = CharField()
    subcategory = CharField()
    name = CharField()
    priceBeforeDiscount = IntegerField()
    priceWithDiscount = IntegerField()
    description = TextField(null=True)

class ProductRequirement(BaseModel):

    ProductId = ForeignKeyField(Product)
    RequID = PrimaryKeyField(unique=True)
    
    LoadVolume = IntegerField(null=True)
    LoadType = CharField(null=True)
    SpinSpeed = IntegerField(null=True)
    EnergyClass = IntegerField(null=True)
    WashingPrograms = CharField(null=True)
    Volume = IntegerField(null=True)
    Power = CharField(null=True)
    HousingMaterial = CharField(null=True)
    AutoOff = BooleanField(null=True)
    MaxPower = IntegerField(null=True)
    SpeedLevel = IntegerField(null=True)
    Lighting = CharField(null=True)
    Noise = IntegerField(null=True)
    Width = IntegerField(null=True)
    Display = CharField(null=True)
    Processor = CharField(null=True)
    Ram = IntegerField(null=True)
    Storage = IntegerField(null=True)
    Camera = CharField(null=True)


if __name__ == "__main__":
    import json
    from os.path import abspath
    from DBFillingEndpoint import fillingDB

    db.create_tables([Product, ProductRequirement])

    f = open('./test.json')
    jsonData = json.load(f)

    fillingDB(jsonData['all'], Product, ProductRequirement)

# exclude=['DoesNotExist', '__module__', '__doc__', "__data__", "__rel__", "_meta", "_schema", "__repr__"]