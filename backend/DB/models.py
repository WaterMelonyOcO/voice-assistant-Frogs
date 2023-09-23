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
    description = TextField()
    Requirement: JSONField()
    Display = CharField()
    Processor = CharField()
    Ram = IntegerField()
    Storage = IntegerField()
    Camera = CharField()
    Width = FloatField()
    Height = FloatField()
    Noise = IntegerField()
    Lighting = IntegerField()
    Volume = FloatField()
    EnergySaveClass = IntegerField()
    SpinSpeed = IntegerField()
    WashingPrograms = IntegerField()
    Power = IntegerField()
    AutoOff = BooleanField()
    Processor = CharField()
    Hdd = IntegerField()
    Graphic = CharField()
    Oc = CharField()


# class ProductsOptRequirement(BaseModel):

#     ProductID = ForeignKeyField(Product)
#     reqID = PrimaryKeyField(unique=True)
#     Display = CharField()
#     Processor = CharField()
#     Ram = IntegerField()
#     Storage = IntegerField()
#     Camera = CharField()
#     Width = FloatField()
#     Height = FloatField()
#     Noise = IntegerField()
#     Lighting = IntegerField()
#     Volume = FloatField()
#     EnergySaveClass = IntegerField()
#     SpinSpeed = IntegerField()
#     WashingPrograms = IntegerField()
#     Power = IntegerField()
#     AutoOff = BooleanField()
#     Processor = CharField()
#     Hdd = IntegerField()
#     Graphic = CharField()
#     Oc = CharField()



if __name__ == "__main__":
    import json
    from os.path import abspath
    f = open(abspath('test.json'))
    jsonData = json.load(f)
    # print(*jsonData["all"])
    db.create_tables([Product])
    for i in jsonData['all']:
        Product(
            category=i["category"],
            subcategory=i["subcategory"],
            name=i["name"],
            priceBeforeDiscount=i["priceBeforeDiscount"],
            priceWithDiscount=i["priceWithDiscount"]
        ).save()

