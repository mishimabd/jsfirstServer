let number = 0;
exports.upload = function (req, res) {
    number++
    res.send("Image Uploaded " + number + " times")
}
