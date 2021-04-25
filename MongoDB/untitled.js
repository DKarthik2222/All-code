use IIHT;

show dbs

db.IIHT

db.EmployeeDB.insert({"Employee_Id":10,"Employee_Name":"John"})

IIHT.EmployeeDB.find()

db.EmployeeDB.find().forEach(printjson)

db.EmployeeDB.insertOne(
   { _id:222,item: "cas", qty: 10, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } }
)

db.EmployeeDB.find({qty:10},{item:1,_id:0})

db.inventory.insertMany([
   { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
   { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
   { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
   { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
   { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" }
]);
db.inventory.find({qty:{$nin:[25,50]}})
db.inventory.find({$nor:[{qty:25},{qty:50}]}).count()

db.inventory.createIndex({item:"search"})
db.inventory.find({$text:{$search:"paper",$caseSensitive:false}})
db.inventory.insertMany([{ item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" }])
db.EmployeeDB.remove({})

db.characters.find()

db.characters.distinct("lvl")

try {
   db.characters.bulkWrite([
      { insertOne: { "document": { "_id": 4, "char": "Dithras", "class": "barbarian", "lvl": 4 } } },
      { insertOne: { "document": { "_id": 5, "char": "Taeln", "class": "fighter", "lvl": 3 } } },
      { updateOne : {
         "filter" : { "char" : "Eldon" },
         "update" : { $set : { "status" : "Critical Injury" } },
         "upsert":true
      } },
      { deleteOne : { "filter" : { "char" : "Brisbane"} } },
      { replaceOne : {
         "filter" : { "char" : "Meldane" },
         "replacement" : { "char" : "Tanys", "class" : "oracle", "lvl": 4 },
      "upsert": true 
      }}
   ]);
} catch (e) {
   print(e);
}

db.characters.aggregate([
    {$match: {lyl:"4.0"}},
    {$group:{"_id":"$lyl","total":{$sum:1}}}
])
db.inventory.aggregate([
    {$match: {item:"journal"}},
    {$group:{"_id":"$item","total":{$sum:"$qty"}}}
])
db.inventory.mapReduce(
    function(){
        emit(this.item,this.qty)
    },
    function(key, values){
        return Array.sum(values)
    },
    {
        query: {item:"journal"},
        out:"result"
    }
)
db.result.find()
db.getCollection("inventory").find(
{
    "$text":{
        "$search":"paper"
    }
}).explain()