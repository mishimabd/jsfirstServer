

var mongoose=require('mongoose');
 
var DataSchema = new mongoose.Schema({
    Id:Number,
    Name:String,
  });
 
module.exports = mongoose.model(
    'data', DataSchema, 'Data');