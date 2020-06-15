const express = require('express')
const AppController = require('../controllers/AppController.js');

const Routing = express.Router();


Routing.route("/getContactInfo").get(AppController.getContactInfo);
Routing.route("/getAbout").get(AppController.getAbout);
Routing.route("/getTabRelatedList").post(AppController.getTabRelatedList);

// Routing.route("/getprayersList").post(AppController.getprayersList);
Routing.route("/sendMail").post(AppController.sendMail);

module.exports = Routing;