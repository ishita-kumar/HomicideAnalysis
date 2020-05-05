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
            "Victim Race": "$Victim Race"
        },
        "CountByRace": { "$sum": 1 }
    }},
    { "$group": {
        "_id": "$_id.Year",
        "CrimeTypes": { 
            "$push": { 
                "Victim Race": "$_id.Victim Race",
                "CountByRace": "$CountByRace"
            },
        },
        "CountByRace": { "$sum": "$CountByRace" }
    }}
])

with open('VictimByRace.json', 'w') as file:

    file.write('[')
    for document in mydoc:
        
        file.write(json.dumps(document))
        file.write(',\n')
    file.write(']')
