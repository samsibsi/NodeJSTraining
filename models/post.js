const { ObjectId } = require("bson")
const mongoose = require("mongoose") 


const schema = mongoose.Schema({
    id: Number,
    empid: ObjectId,
    post: String
})

module.exports = mongoose.model("post", schema)
