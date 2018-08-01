// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();

// console.log(obj);
// var user = {name : 'andrew', age: 25};
// var{name} = user; //object destruction
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if (err) {
        return console.log("unable to connect mongodb");
    }
   console.log("connected to mongo db server");

//    db.collection("Users").findOneAndUpdate({_id : new ObjectID("5b5f05cd0eff551dd0dd7598")},
// {
//     $set: {
//         name: "Simran"
//     }
// },
// {
//     returnOrignal: false
// }).then((result) => {
//     console.log(result);
// });


db.collection("Users").findOneAndUpdate({_id : new ObjectID("5b5f05cd0eff551dd0dd7598")},
{
    $inc: {
        age: -6
    }
},
{
    returnOrignal: false
}).then((result) => {
    console.log(result);
});


//    db.close();
});