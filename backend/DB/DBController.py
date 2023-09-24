from .Models.ProductModel import Product, ProductRequirement
from peewee import SqliteDatabase
from os import path

db = SqliteDatabase(path.abspath("DB/product.db"))


class DBController:

    def __init__(self) -> None:
        Product._meta.database = db
        ProductRequirement._meta.database = db


    def GetProductViaName(self, ProductName: str):

        ProductName = ProductName.capitalize()
        query = (Product.select()
                .where( Product.name.contains(ProductName) ))
        return [i.__data__ for i in query]

   
    def GetProductViaFilters(self, Productfilters: dict):
        
        query = ProductRequirement.select()

        for key, value in Productfilters.items():
            if hasattr(ProductRequirement, key):
                query = query.where(getattr(ProductRequirement, key, None) == value)

        return [i.__data__ for i in query ]
    
    def GetProductViaCategory(self, Productcategory: str):
        query = Product.select()

        var = query.where(
            Product.category == Productcategory
        )

        return [i.__data__ for i in var ]

   
    def GetProductRequirements(self, ProductID):
        query = ProductRequirement.select()

        result = query.where(
            ProductRequirement.ProductId == ProductID
        )

        return [i.__data__ for i in result ]