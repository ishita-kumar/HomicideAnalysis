import pymongo
import json

myclient = pymongo.MongoClient("mongodb+srv://msureshk:siOXurHh2olz0LAh@cluster0-541iz.mongodb.net/test?retryWrites=true&w=majority")

mydb = myclient["HomicideAnalysis"]
print(myclient.list_database_names())
Crime,Agency = mydb["Crime"],mydb["Agency"]
mydoc = Crime.aggregate([
    {"$group" : {
        "_id": {
            "Year": "$Year",
            "Weapon": "$Weapon"
        },
        "WeaponTypecount": { "$sum": 1 }
    }},
    {"$match" : {
        "_id.Weapon" : {"$in" : ["Handgun","Gun","Rifle","Shotgun"]}
    }},
    { "$group": {
        "_id": "$_id.Year",
        # "WeaponTypes": { 
        #     "$push": { 
        #         "WeaponType": "$_id.Weapon",
        #         "CountForEachType": "$WeaponTypecount"
        #     },
        # },
        "CountPerYear": { "$sum": "$WeaponTypecount" }
    }}
])
with open('YearWiseWeaponType.json', 'w') as file:
        file.write('[')
        for document in mydoc:
            file.write(json.dumps(document))
            file.write(',\n')
        file.write(']')
