const mongoose = require('mongoose');
require('dotenv').config();
//define mongodb connection URL
// const mongoURL='mongodb://localhost:27017/mydatabase' //replace 'mydatabase'with your database name local database
// const mongoURL='mongodb+srv://project1:helloworld@cluster0.sowrltd.mongodb.net/' //password dite hobe eta online database
const mongoURL =process.env.MONGODB_URL;
// const mongourl_local= process.env.MONGODB_URL_LOCAL;
//setup mongodb connection 
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

//get the default connection
//mongoose maintain a default connection object representing the mongodb connection
const db =mongoose.connection;

//define event listeners for database connection
db.on('connected',()=>{
    console.log("connected to mongodb server");
});
db.on('error',(er)=>{
    console.log("Mongodb connection error",er);
});
db.on('disconnected',()=>{
    console.log("Mongodb disconnected");
});

//export the database connection
module.exports=db;


