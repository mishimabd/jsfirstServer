var DataModel = require('../models/model')

exports.videos = function (req, res) {
    DataModel.find(function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(data);
        }
    });
}

exports.addVideos = function (req, res) {
    var newData = new DataModel({
        Name: req.body.doc,
    });

    newData.save(function (err, data) {
        if (err) {
            console.log(error);
        }
        else {
            res.redirect('/videos');
        }
    });
}

exports.deleteVideos = function (req, res) {
    DataModel.remove({ Name: req.body.docdel },
        function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                res.redirect('/videos');
            }
        });
}

exports.updateVideos = function(req, res) {
    DataModel.findOneAndUpdate(req.body.olddoc,
        { Name: req.body.newdoc }, function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                res.redirect('/videos')
            }
        });
}