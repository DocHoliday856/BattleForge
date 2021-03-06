const express = require('express');
var env       = process.env.NODE_ENV || 'development';
const models = require("./models");
const bodyParser = require('body-parser');
const abilities = require('./controllers/AbilitiesController');
const factions = require('./controllers/FactionsController');
const units = require('./controllers/UnitsController');
require('./global_functions');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

models.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.log('Unable to connect to the database:', err);
  });

if (env == 'development') {
  //models.sequelize.sync();
  models.sequelize.sync({
    force: true
  }); // will drop all tables before synchronizing
}

// CORS
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization, Content-Type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});

//Handles routing for services
app.get('/factions', factions.getAll);
app.get('/factions/:factionId', factions.get);
app.post('/factions', factions.create);
app.put('/factions', factions.update);
//app.delete('/factions', factions.remove);

app.get('/abilities', abilities.getAll);
app.get('/abilities/:abilityId', abilities.get);
app.post('/abilities', abilities.create);
app.put('/abilities', abilities.update);
//app.delete('/abilities', abilities.remove);

app.get('/units', units.getAll);
app.get('/units/:unitId', units.get);
app.post('/units', units.create);
app.put('/units', units.update);
//app.delete('/units', units.remove);

module.exports = app;
