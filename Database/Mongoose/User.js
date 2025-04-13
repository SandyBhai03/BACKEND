const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: String,
    age: Number,
    isAdult: Boolean,
    hobbies: Array,
});

// const user = mongoose.model("User", userSchema);
module.exports = mongoose.model("User", userSchema);