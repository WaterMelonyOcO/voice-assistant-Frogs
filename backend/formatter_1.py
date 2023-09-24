import re
from DB.DBController import DBController, Product, ProductRequirement

def filter_values_by_regex(pattern, values):
    return re.search(pattern, values, re.IGNORECASE).group(0)

def extract_parameters(text: str):
    db = DBController()
    
    returnData = {}

    ##subcategory
    subcategoryValues = [*set(db.GetTableSubcategoryValue("subcategory"))]
    pattern = r"\b(?:{0}*)(\s+|\w*)".format('*|'.join(subcategoryValues))
    subcategoryRes = re.search(pattern, text, re.IGNORECASE).group(0).rstrip()
    matching_values = [value for value in subcategoryValues if re.search(fr'{subcategoryRes}', value)][0]
    
    returnData["subcategory"] = matching_values

    #name
    pattern = r"\b[a-zA-Z]+\b"
    nameRes = re.search(pattern, text).group(0)
    returnData["name"] = nameRes

    reqv = Product.select().where(
        Product.name.contains(returnData["name"])
    ).get().__data__
    
    # info = ProductRequirement.select().get().__data__
    return {"reqv": reqv}