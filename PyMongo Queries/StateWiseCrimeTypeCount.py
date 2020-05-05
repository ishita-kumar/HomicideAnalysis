import pymongo
import json

myclient = pymongo.MongoClient("mongodb+srv://msureshk:siOXurHh2olz0LAh@cluster0-541iz.mongodb.net/test?retryWrites=true&w=majority")

mydb = myclient["HomicideAnalysis"]
print(myclient.list_database_names())
Crime,Agency = mydb["Crime"],mydb["Agency"]

mydoc = Crime.aggregate([
    {"$group" : {
        "_id": {
            "State": "$State",
            "Crime Type": "$Crime Type"
        },
        "CrimeTypecount": { "$sum": 1 }
    }},
    { "$group": {
        "_id": "$_id.State",
        "CrimeTypes": { 
            "$push": { 
                "CrimeType": "$_id.Crime Type",
                "CountForEachType": "$CrimeTypecount"
            },
        },
        "CountPerState": { "$sum": "$CrimeTypecount" }
    }}
])

with open('StateWiseCrimeType.json', 'w') as file:
        file.write('[')
        for document in mydoc:
            file.write(json.dumps(document))
            file.write(',\n')
        file.write(']')
