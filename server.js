
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// MongoDB Databse url
var mongoDatabase = process.env.MONGO_URL
const uri = `mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASS}@cluster0.encka.mongodb.net/?retryWrites=true&w=majority`


// Created express server
const app = express();
// mongoose.Promise = global.Promise;

// Connect Mongodb Database

mongoose.connect('mongodb+srv://shujathali92:shujath.92@cluster0.encka.mongodb.net/test', { useNewUrlParser: true });
const db = mongoose.connection;

db.once('open', () => console.log('Successfully connected to MongoDB'));
db.on('error', (e) => console.log(e));

 mongoose.set('strictQuery', false);
//  mongoose.set('strictQuery', true);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());


// All the express routes
const passwordRoutes = require('./routes/password');



// Setup for the server port number
const port = process.env.PORT || 4000;




// Routes Configuration
app.use('/api/password', passwordRoutes);

// Staring our express server
const server = app.listen(port, function () {
console.log('Server Lisening On Port : ' + port);
});
