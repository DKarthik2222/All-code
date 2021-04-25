db.jsondata.find()

db.jsondata.getIndexes()

db.jsondata.createIndex({"name":1,"age":1})

db.jsondata.ensureIndex({"age":1,"guid":-1})

//drop indexes
db.jsondata.dropIndex({"age":1,"guid":-1})

db.jsondata.dropIndex("name_1")