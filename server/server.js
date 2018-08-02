

// var mongoose = require('mongoose');  
var express = require("express");
var bodyParser = require("body-parser");
// mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost:27017/TodoApp");

var {mongoose} = require('./db/mongoose');

var {Todo} = require('./models/todo.js');

var {User} = require('./models/user.js');


var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text : req.body.text
    });
    todo.save().then(() => {
        res.send(doc);
    },(e) => {
        res.status(400).send(e);
    });
});


app.listen(3000, () => {
    console.log('Started on port 3000');
});


// var newTodo = new Todo({
//     text: "Cook Dinner"
// });

// newTodo.save().then((doc) => {
//     console.log("Saved Todo",doc);
// },
// (e) => {
//     console.log('Unable to save todo');
// });


// var user = new User({
//     email: ''
// });
// user.save().then((docs) => {
//     console.log(JSON.stringify(docs, undefined, 2));
// }, (e) => {
//     console.log("love u");
// });
