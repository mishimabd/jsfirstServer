

var mongoose=require('mongoose');
 
var DataSchema = new mongoose.Schema({
    Name:String,
  });
 
module.exports = mongoose.model(
    'data', DataSchema, 'Data');