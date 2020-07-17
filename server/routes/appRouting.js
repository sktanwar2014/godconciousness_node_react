const express = require('express')
const AppController = require('../controllers/AppController.js');

// const multer = require('multer');
const Routing = express.Router();

// const storage = multer.diskStorage({    
//     destination: function (req, file, callback) {
//       callback(null, '/root/Documents/sarga/God Consciousness/admin panel/admin_a1abilities/server/files/images/');
//     },
//     filename: function (req, file, callback) {
//       callback(null, file.originalname.split('.')[0] + "_" + Date.now() + '.' + file.originalname.split('.')[1]);
//     }
//   });
  
//   const upload = multer({ storage: storage });


    //console.log(data);

Routing.route("/fetchBannerImage").post(AppController.fetchBannerImage);
Routing.route("/fetchHeaderFooterContent").get(AppController.fetchHeaderFooterContent);
Routing.route("/fetchPageData").post(AppController.fetchPageData);
Routing.route("/sendMail").post(AppController.sendMail);

// Routing.route("/getContactInfo").get(AppController.getContactInfo);
// Routing.route("/getAbout").get(AppController.getAbout);
// Routing.route("/getTabRelatedList").post(AppController.getTabRelatedList);

// Routing.route("/getPrayerList").post(AppController.getPrayerList);


module.exports = Routing;