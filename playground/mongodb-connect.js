// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

console.log(obj);
// var user = {name : 'andrew', age: 25};
// var{name} = user; //object destruction
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if (err) {
        return console.log("unable to connect mongodb");
    }
   console.log("connected to mongo db server");
//    db.collection('Todoqs').insertOne({
//         text : "Something to do"
        
//     }, (err, result) => {
//     if (err) {
//         return console.log("unable to insert todo", err);
//     }

//     console.log(JSON.stringify(result.ops, undefined, 2));
// });

// db.collection('Users').insertOne({
//     name: "Happy",
//     age: 25,
//     location: "Karnal"
    
// }, (err, result) => {
// if (err) {
//     return console.log("unable to insert todo", err);
// }

// console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
// });
   db.close();
});