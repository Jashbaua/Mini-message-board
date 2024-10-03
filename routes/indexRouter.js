const { Router } = require("express");

const indexRouter = Router()

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];
  
indexRouter.get('/', (req, res) => {
    res.render('index',{messages:messages})
})

indexRouter.post('/new', (req, res) => {
    messages.push({
        text: req.body.message,
        user: req.body.name,
        added: new Date()
    })
    res.redirect("/")
})

indexRouter.get('/messages/:id', (req, res) => {
    res.render('message',{message:messages[req.params.id]})
})

module.exports = indexRouter;