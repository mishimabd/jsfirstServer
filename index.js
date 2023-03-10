const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
  destination: (req,file, cb) => {
    cb(null, 'images')
  },
  filename: (req, file, cb) => {
    console.log(file)
    cb(null, Date.now() + path.extname(file.originalname))
  }
})
const Pages = require('./JavaPages')
const upload = multer({storage: storage})
const express = require('express');
const morgan = require('morgan');
const { default: mongoose } = require('mongoose')
require('dotenv').config();
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGOOSE_URL).then(() => console.log('Connected successfully to MongoDB database!')).catch((error) => console.log(error));
var Postgres = require('./routes/postgreRoutes')
var MongoDB = require('./routes/mongoDbRoutes')
var Image = require('./routes/leftFunc')
var Quran = require('./routes/quranRoute')
const app = express()
const port = 3000;

app.use(morgan('common'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.get('/', Pages.main)

app.get('/postgres', Pages.postgres)

app.get('/mongodb', Pages.mongodb)

app.get('/imageUpload', Pages.imageUpload)

app.get('/ayah', Pages.ayah)

app.post('/upload', upload.single("image"), Image.upload  )

app.get('/info/get', Postgres.infoGet)

app.post('/info/add', Postgres.infoAdd)

app.post('/info/delete', Postgres.infoDelete)

app.post('/info/update', Postgres.infoUpdate)

app.get('/videos', MongoDB.videos)

app.post('/videos/add', MongoDB.addVideos)

app.post('/videos/delete', MongoDB.deleteVideos)

app.post('/videos/update', MongoDB.updateVideos)

app.get('/ayah/get', Quran.getAyath)

app.listen(port, (
  console.log(`Server started on port ${process.env.PORT}!`)
))