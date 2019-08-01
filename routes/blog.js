const express = require('express')
const router = express.Router()
const { Blog } = require('../models')

router.post('/blog', (req, res, next) => {
  const { keyword, url, isBlog, isView } = req.body

  Blog.create({
    keyword, url, isBlog, isView
  })
    .then(() => {
      res.send()
    })
    .catch((error) => {
      next(error)
    })
})

router.get('/blog', (req, res, next) => {
  Blog.findAll({})
    .then((blogs) => {
      res.send(blogs)
    })
    .catch((error) => {
      next(error)
    })
})

module.exports = router