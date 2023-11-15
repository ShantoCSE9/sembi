const express = require("express")
const app = express();
const morgan = require('morgan');
const xssClean= require('xss-clean');
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const { router } = require("./routers/userRouter");
const cors=require('cors');
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb',extended: true}));

app.use(morgan('dev'))
app.use(xssClean())
app.use('/api/admin',router)


app.use(notFound)
app.use(errorHandler)
module.exports= app;