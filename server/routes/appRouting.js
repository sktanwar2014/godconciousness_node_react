const express = require('express')
const AppController = require('../controllers/AppController.js');

const Routing = express.Router();

Routing.route("/getprayersList").post(AppController.getprayersList);

module.exports = Routing;