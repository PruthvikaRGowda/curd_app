const express =require("express");
const dotenv=require("dotenv");
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path=require('path');
const hbs=require("hbs");

const connectDB=require('./server/database/connection');

const app = express();

dotenv.config({path:'config.env'})
const PORT =process.env.PORT || 8080

// log request
app.use(morgan('tiny'));

//mogodb connection
connectDB();

//parse request to body-parser 
app.use(express.urlencoded({ extended: false }));

// set view engine
app.set("view engine","hbs");

app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));


//load routers

app.use('/', require('./server/routers/router'));


app.listen(PORT,()=>{console.log('Server is running on port',PORT)});