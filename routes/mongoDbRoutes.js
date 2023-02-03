var DataModel = require('../models/model')

exports.videos = function (req, res) {
    DataModel.find(function(err, data) {
      if(err){
          console.log(err);
      }
      else{
          res.send(data);
      }
  });  
  }