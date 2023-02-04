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

exports.deleteVideos = function (res, req) {
    DataModel.findByIdAndDelete(req.body.docdelete,
        function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                res.redirect('/videos');
            }
        });
}