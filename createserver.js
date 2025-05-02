
const express = require('express');
const app = express();
const db=require('./db');
require('dotenv').config();
const bodyParser=require('body-parser');
app.use(bodyParser.json()); //req.body te store kore 
//import the router files
const PORT =process.env.PORT||3000;
const personroute=require('./route/Personroute');
//use the router 
app.use('/person',personroute);
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});












// app.get('/', (req, res) => {
//   res.send('welcome to our hotel..... how can i help you');
// })
// app.get('/idli', (req, res) => {
//     res.send('serve to idli');
//   })
// app.get('/chicken', (req, res) => {
//     res.send('serve to chicken');
// })
// app.post('/item', (req, res) => {
//     res.send('post for take data');
// })