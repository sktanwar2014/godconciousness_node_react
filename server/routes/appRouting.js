const express = require('express')
const AppController = require('../controllers/AppController.js');
// const upload = multer({ storage: storage });

const Routing = express.Router();

// const storage = multer.diskStorage({    
//     destination: function (req, file, callback) {
//       callback(null, './files/images');
//     },
//     filename: function (req, file, callback) {
//       callback(null, file.originalname.split('.')[0] + "_" + Date.now() + '.' + file.originalname.split('.')[1]);
//     }
//   });
  


Routing.route("/getContactInfo").get(AppController.getContactInfo);
Routing.route("/getAbout").get(AppController.getAbout);
Routing.route("/getTabRelatedList").post(AppController.getTabRelatedList);

// Routing.route("/getprayersList").post(AppController.getprayersList);
Routing.route("/sendMail").post(AppController.sendMail);

module.exports = Routing;