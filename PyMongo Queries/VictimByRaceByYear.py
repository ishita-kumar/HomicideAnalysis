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
    }},
    {
        "$sort" : {"_id" : 1}
    }
])
years = []
race_wise_crime_count = {}
with open('VictimByRaceAndByYear.json', 'w') as file:
    for document in mydoc:
        if not document["_id"]:
            continue
        years.append(int(document["_id"]))
        for race_count_dict in document["CrimeTypes"]:
            # print(race_count_dict)
            race = race_count_dict[list(race_count_dict.keys())[0]]
            count = race_count_dict[list(race_count_dict.keys())[1]]
            if race not in race_wise_crime_count:
                race_wise_crime_count[race] = []
            race_wise_crime_count[race].append(count)
            file.write(json.dumps(document))
            file.write(',\n')
# print(years)
# print(race_wise_crime_count)
with open('VictimByRace.json', 'w') as file2:
    json.dump(race_wise_crime_count, file2)
with open('YearAscendingOrder.json', 'w') as file3:
    json.dump({"Years" : years}, file3)