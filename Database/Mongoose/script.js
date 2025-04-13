const mongoose = require('mongoose');
const User = require('./User');

mongoose.connect("mongodb://localhost:27017");

const db = mongoose.connection;

db.on("open", () => {
    console.log("connection is successfull");
});

db.on("error", () => {
    console.log("connection not successfull");
})

const newUser = new User({
    name: "Anshika",
    age: 26, 
    isAdult: true,
    hobbies: ["teaching"],
})

newUser.save().then(data => {
    console.log(data);
})