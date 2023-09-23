from peewee import Model

def fillingDB( data: dict | str, DB: Model, subDB: Model): #ProperiesValue: list = None, exclude: list = []

    # DBPropersties = list(DB.__dict__.keys())
    # DBCustomProperties = [i for i in DBPropersties if ( i not in exclude)]

    # toBDAdd = []
    # for mainIndex, i in enumerate(data):
    #     for subIndex, j in enumerate(i):
    #         print( j , DBCustomProperties[subIndex] , i)
    #         # print( j + " = ", i[DBCustomProperties[subIndex]] )

    for i in data:
        mainDB = DB.create(
            category = i.get('category', None),
            subcategory = i.get('subcategory', None),
            name = i.get('name', None),
            priceBeforeDiscount = i.get('priceBeforeDiscount', 0),
            priceWithDiscount = i.get('priceWithDiscount', 0),
            description = i.get('description', ""),
        )
        
        reqv = i.get("Requirement", None)
        if ( reqv ):
            for i in reqv:
                print( reqv )
                subDB.create(
                    ProductId = mainDB,

                    LoadVolume = reqv.get("LoadVolume", 0),
                    LoadType = reqv.get("LoadType", 0),
                    SpinSpeed = reqv.get("SpinSpeed", 0),
                    EnergyClass = reqv.get("EnergyClass", 0),
                    WashingPrograms = reqv.get("WashingPrograms", ''),
                    Volume = reqv.get("Volume", 0),
                    Power = reqv.get("Power", None),
                    HousingMaterial = reqv.get("HousingMaterial", None),
                    AutoOff = reqv.get("AutoOff", None),
                    MaxPower = reqv.get("MaxPower", 0),
                    SpeedLevel = reqv.get("SpeedLevel", 0),
                    Lighting = reqv.get("Lighting", None),
                    Noise = reqv.get("Noise", 0),
                    Width = reqv.get("Width", 0),
                    Display = reqv.get("Display", None),
                    Processor = reqv.get("Processor", None),
                    Ram = reqv.get("Ram", 0),
                    Storage = reqv.get("Storage", 0),
                    Camera = reqv.get("Camera", None),
                )


# category = i.get('category', None),
#                 subcategory = i.get('subcategory', None),
#                 name = i.get('name', None),
#                 priceBeforeDiscount = i.get('priceBeforeDiscount', 0),
#                 priceWithDiscount = i.get('priceWithDiscount', 0),
#                 description = i.get('description', ""),
#                 Requirement = i.get('Requirement', None)