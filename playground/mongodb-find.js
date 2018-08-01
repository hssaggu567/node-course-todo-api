// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();

// console.log(obj);
// var user = {name : 'andrew', age: 25};
// var{name} = user; //object destruction
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/sonu', (err,db) => {
    if (err) {
        return console.log("unable to connect mongodb");
    }
   console.log("connected to mongo db server");
//    db.collection('Todos').find({
//        _id: new ObjectID('5b5f01f4d60f902f7844661c')
//    }).toArray().then((docs) => {
//     console.log("Todos");
//     console.log(JSON.stringify(docs, undefined, 2));
//    }, (err) => {
//        console.log('Unable to fetch todos', err);
//    });


// db.collection('Todos').find().count().then((count) => {
//  console.log(`Todos Count: ${count}`);
// }, (err) => {
//     console.log('Unable to fetch todos', err);
// });


db.collection('Todoqs').find({text : 'something to do'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
});


//    db.close();
});