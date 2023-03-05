path = require('path')

exports.main = function (req, res) {
  res.sendFile(path.join(__dirname,'./','main.html'));
  }

exports.postgres = function (req, res) {
  res.sendFile(path.join(__dirname, './', 'pages/postgres.html'));
}

exports.mongodb = function (req, res) {
  res.sendFile(path.join(__dirname, './', 'pages/mongodb.html'));
}

exports.imageUpload = function (req, res){
  res.sendFile(path.join(__dirname, './','pages/imageUpload.html'))
}

exports.ayah = function (req, res) {
  res.sendFile(path.join(__dirname, './', 'pages/ayah.html'))
}