var Image = require('../models/imageModel')

exports.upload = function (req, res) {
    const image = new Image({
        filename: req.file.filename,
        originalname: req.file.originalname,
        path: req.file.path
    });

    image.save()
        .then(() => res.send('Image uploaded'))
        .catch(err => console.log(err));
}