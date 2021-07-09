const mongoose = require("mongoose")
var Schema = mongoose.Schema;

var dbschema = new Schema({
    task:{
        type:String,
        required:true
    }
},{timestamps:true});
var Task = mongoose.model('Task',dbschema)
module.exports = Task;
