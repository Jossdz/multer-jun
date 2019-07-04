const express = require('express')
const router = express.Router()
const multer = require('multer')
const Picture = require('../models/Picture')

const upload = multer({dest: './public/uploads'})
/* GET home page */
router.get('/', async (req, res, next) => {
  const pictures = await Picture.find()
  res.render('index', {pictures})
})

router.post('/upload', upload.single('photo'), async (req, res) => {
  await Picture.create({
    name: req.body.name,
    path: `/uploads/${req.file.filename}`,
    originalName: req.file.originalname
  })
  res.redirect('/')
})

module.exports = router
