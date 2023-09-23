from Models.ProductModel import Product, ProductRequirement
from peewee import SqliteDatabase

db = SqliteDatabase("./product.db")

def DBConn(func):
    def inner(*args, **kwargs):
        db.connect()
        data = func(*args, **kwargs)
        db.close()
        return data
    return inner


class DBController:

    @DBConn
    def GetProductViaName(self, ProductName: str):

        ProductName = ProductName.capitalize()
        query = Product.select().where( Product.name.contains(ProductName) )
        return [i.name for i in query]

    @DBConn
    def GetProductViaFilters(self, ProductFilters: dict):
        
        data = Product.select().join(ProductRequirement).where( 
            *ProductRequirement._meta.fields.keys() in ProductFilters
         )
        print(data)
    
    @DBConn
    def GetProductViaCategory(self, Productcategory):
        pass
   
    @DBConn
    def GetProductRequirements(self, ProductID):
        pass


test = DBController()
test.GetProductViaFilters({"priceBeforeDiscount": 777})