import pymongo
import json

myclient = pymongo.MongoClient("mongodb+srv://msureshk:siOXurHh2olz0LAh@cluster0-541iz.mongodb.net/test?retryWrites=true&w=majority")

mydb = myclient["HomicideAnalysis"]
print(myclient.list_database_names())
Crime,Agency = mydb["Crime"],mydb["Agency"]
mydoc = Crime.aggregate([
    {"$group" : {
        "_id": {
            "Crime Solved": "$Crime Solved"
        },
        "TotalCrime": { "$sum": 1 }
    }},
    {"$match" : {
        "_id.Crime Solved" : {"$in" : ["Yes","No"]}
    }},
    { "$group": {
        "_id": "$_id.Crime Solved",
        "CrimeSolvedUnsolved": { "$sum": "$TotalCrime" }
    }}
])
totalCrime = 0
# 
for document in mydoc:
    totalCrime += document["CrimeSolvedUnsolved"]
    if document["_id"] == "Yes":
        solved = document["CrimeSolvedUnsolved"]
    else:
        unsolved = document["CrimeSolvedUnsolved"]
print(totalCrime,solved,unsolved)
with open('CrimeSolvedUnsolved.json', 'w') as file:
    json.dump({"Solved" : round((solved/totalCrime)*100) , "Unsolved" : round((unsolved/totalCrime)*100)}, file)