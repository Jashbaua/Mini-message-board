const express = require("express");
const indexRouter = require("./routes/indexRouter");

const app = express();

app.use('/', indexRouter)

const PORT = 3000;
app.listen(PORT)

