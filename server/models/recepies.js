var mongoose = require('mongoose')
var Schema = mongoose.Schema

var RecepieSchema = new Schema({
    title: String,
    url: String,
})

var Recepie = mongoose.model("Recepie", RecepieSchema)
module.exports = Recepie