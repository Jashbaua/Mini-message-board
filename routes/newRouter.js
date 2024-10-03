const { Router } = require("express");

const newRouter = Router()

newRouter.get('/new', (req, res) => res.send('new haha'))

module.exports = newRouter;