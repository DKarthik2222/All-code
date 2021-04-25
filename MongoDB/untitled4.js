db.runCommand({
    collMod:"students",
    validator:{$jsonSchema:{
    bsonType:"object",
    required:["name","age","branch"],
    properties:{
        name:{
            bsonType:"string",
            pattern:"^[A-Za-z]+$"
        },
        age:{
            bsonType:"int"
        },
        branch:{
            enum:["CS","EE","ME"]
        }
    }
    }
    },
//    validationLevel: "moderate"
    validationAction:"error"
})

db.createCollection("students",{
    validator:{$jsonSchema:{
    bsonType:"object",
    required:["name","age","branch"],
    properties:{
        name:{
            bsonType:"string"
        },
        age:{
            bsonType:"int"
        },
        branch:{
            enum:["CS","EE","ME"]
        }
    }
    }
    }
})

db.students.insert({"name":"David3333333","age":NumberInt(22),"branch":"CSs"});
use myDb
db.mongo.find()
db.mongo.getIndexes()