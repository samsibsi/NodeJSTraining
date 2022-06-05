const mongoose = require("mongoose") 

const schema = mongoose.Schema({
    id: Number,
    Name: String,
    Lname : String,
    path: String
})

module.exports = mongoose.model("profile", schema)
