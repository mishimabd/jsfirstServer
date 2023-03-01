exports.getAyath = function (req, res) {
    const surah = req.query.surah
    const ayah = req.query.ayah
    const url = `http://api.alquran.cloud/v1/ayah/${surah}:${ayah}/en.asad`;
    fetch(url).then(res => res.json()).then(data => res.send(data)).catch(error => console.error(error));
    
}

