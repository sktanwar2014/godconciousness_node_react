const connection = require("../lib/connection.js");
const {dbName} = require("../lib/connection.js");

const AppModel = function (params) {
  this.date = params.date;  
  this.type = params.type;
};

 AppModel.prototype.getprayersList = function () {
   const that = this;
    return new Promise(function (resolve, reject) {
      connection.getConnection(function (error, connection) {
        if (error) {
          throw error;
        }
  
        connection.changeUser({database : dbName});
        connection.query('SELECT * FROM  WHERE created_at LIKE "'+that.date+'%"', function (error, rows, fields) { 
          if (error) {  console.log("Error...", error); reject(error);  }          
          resolve(rows);              
        });
          connection.release();
          console.log('Process Complete %d', connection.threadId);
      });
    });
  } 



 AppModel.prototype.getContactInfo = function () {
  const that = this;
   return new Promise(function (resolve, reject) {
     connection.getConnection(function (error, connection) {
       if (error) {
         throw error;
       }
 
       connection.changeUser({database : dbName});
       connection.query('SELECT * FROM  contact', function (error, rows, fields) { 
         if (error) {  console.log("Error...", error); reject(error); }          
         resolve(rows);              
       });
         connection.release();
         console.log('Process Complete %d', connection.threadId);
     });
   });
 } 


AppModel.prototype.getTabRelatedList = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) {
        throw error;
      }
      
      connection.changeUser({database : dbName});
      console.log(that.type)
      connection.query('SELECT wc.*,i.type, i.image_name, l.website_link as link FROM website_content as wc LEFT JOIN images as i ON wc.image_id = i.id LEFT JOIN links as l ON l.id = wc.link_id WHERE wc.type = "' +that.type+ '"', function (error, rows, fields) { 
        if (error) { console.log("Error...", error); reject(error);  }   
        
        resolve(rows);              
      });
        connection.release();
        console.log('Process Complete %d', connection.threadId);
    });
  });
}
 
module.exports = AppModel;
