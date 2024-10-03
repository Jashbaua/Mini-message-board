const { Router } = require("express");

const indexRouter = Router()

indexRouter.get('/', (req, res) => res.send('Index haha'))

module.exports = indexRouter;