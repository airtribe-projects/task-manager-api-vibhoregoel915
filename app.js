const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
var indexRoutes = require('./routes/indexRoutes'); 


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/v1/', indexRoutes);

module.exports = app;