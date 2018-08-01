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

//    db.collection('Todos').deleteMany({text : "Something to do"}).then((result) => {
//        console.log(result);
//    });


// db.collection('Users').findOneAndDelete({name: "Happy"}).then((result) => {
//     console.log(result);
// });

//anther function for deleting is deleteOne
//    db.close();
});