const connection = require("../lib/connection.js");
const {dbName} = require("../lib/connection.js");

const AppModel = function (params) {
  this.id = params.id;
  this.date = params.date;  
  this.type = params.type;
  this.page = params.page;
  this.pageNo = params.pageNo;
  this.fetchBy = params.fetchBy;
};


AppModel.prototype.fetchBannerImage = function () {
  const that = this;
   return new Promise(function (resolve, reject) {
     connection.getConnection(function (error, connection) {
       if (error) { throw error; }
 
       connection.changeUser({database : dbName});
       connection.query(`SELECT id, image_name FROM images WHERE is_active = 1 AND type = "${that.type}" ORDER BY id DESC;`, function (error, rows, fields) { 
         if (error) {  console.log("Error...", error); reject(error);  }          
         resolve(rows);
       });
         connection.release();
         console.log('Process Complete %d', connection.threadId);
     });
   });
 } 

 
 AppModel.prototype.fetchHeaderFooterContent = function () {
   const that = this;
    return new Promise(function (resolve, reject) {
      connection.getConnection(function (error, connection) {
        if (error) { throw error; }
  
        connection.changeUser({database : dbName});
        connection.query(`SELECT c.id, c.email, c.address, c.mobile FROM contact AS c WHERE c.is_active = 1;`, function (error, contactResult, fields) {
          if (error) {  console.log("Error...", error); reject(error);  } 
          
          connection.query(`SELECT id, type, website_link as link FROM links WHERE type IN('socialFacebook', 'socialInstagram', 'socialYoutube') AND is_active = 1;`, function (error, socialLinks, fields) {
            if (error) {  console.log("Error...", error); reject(error);  } 
          
            connection.query(`SELECT id, content FROM website_content WHERE type = 'AboutFooterMessage' AND is_active = 1;`, function (error, footerAbout, fields) {
              if (error) {  console.log("Error...", error); reject(error);  } 
              resolve({contact: contactResult, socialLinks: socialLinks, footerAbout: footerAbout });
            });
          });
        });
          connection.release();
          console.log('Process Complete %d', connection.threadId);
      });
    });
  } 

  
 
AppModel.prototype.fetchPageData = function () {
  const that = this;
    return new Promise(function (resolve, reject) {
      connection.getConnection(function (error, connection) {
        if (error) { throw error; }
  
        connection.changeUser({database : dbName});
        let Query = ``;
        let CountQuery = ``;

        if(that.page === 'Home'){
          connection.query(`SELECT wc.id, wc.content, i.image_name, l.website_link as link FROM website_content AS wc LEFT JOIN links as l ON wc.id = l.module_id AND l.is_active = 1 LEFT JOIN images as i ON wc.id = i.module_id AND i.is_active = 1 WHERE wc.type = 'AboutWelcomeMessage' AND wc.is_active = 1;`, function (error, about, fields) {
            if (error) {  console.log("Error...", error); reject(error);  } 
            
            connection.query(`SELECT wc.id, wc.title, wc.content, i.image_name FROM website_content AS wc LEFT JOIN images as i ON wc.id = i.module_id AND i.is_active = 1 WHERE wc.type = 'Miracle' AND wc.is_active = 1 ORDER BY wc.id DESC LIMIT 3;`, function (error, miracles, fields) {
              if (error) {  console.log("Error...", error); reject(error);  } 
            
              connection.query(`SELECT wc.id, wc.title, wc.content, i.image_name, l.website_link as link FROM website_content AS wc LEFT JOIN links as l ON wc.id = l.module_id AND l.is_active = 1 LEFT JOIN images as i ON wc.id = i.module_id AND i.is_active = 1 WHERE wc.type = 'Prayer' AND wc.is_active = 1 ORDER BY id DESC LIMIT 1;`, function (error, prayer, fields) {
                if (error) {  console.log("Error...", error); reject(error);  } 

                connection.query(`SELECT wc.id, wc.title, wc.date, wc.content, i.image_name, l.website_link as link, wc.time, wc.location, wc.contact FROM website_content AS wc LEFT JOIN links as l ON wc.id = l.module_id AND l.is_active = 1 LEFT JOIN images as i ON wc.id = i.module_id AND i.is_active = 1 WHERE wc.type = 'Event' AND wc.is_active = 1 AND wc.date >= now() ORDER BY id DESC LIMIT 3;`, function (error, events, fields) {
                  if (error) {  console.log("Error...", error); reject(error);  } 
                  resolve({about: about, miracles: miracles, prayer: prayer, events: events });
                });
              });
            });
          });
        }
        
        else if(that.page === 'About'){
          connection.query(`SELECT wc.id, wc.content, i.image_name, l.website_link as link FROM website_content AS wc LEFT JOIN links as l ON wc.id = l.module_id AND l.is_active = 1 LEFT JOIN images as i ON wc.id = i.module_id AND i.is_active = 1 WHERE wc.type = 'AboutWelcomeMessage' AND wc.is_active = 1;`, function (error, about, fields) {
            if (error) {  console.log("Error...", error); reject(error);  } 
                  resolve({about: about });
          });
        }
        
        else if (that.page === 'Contact'){
          connection.query(`SELECT c.id, c.email, c.address, c.mobile FROM contact AS c WHERE c.is_active = 1;`, function (error, contact, fields) {
            if (error) {  console.log("Error...", error); reject(error);  } 
            
            connection.query(`SELECT l.website_link as link FROM  links as l WHERE l.is_active = 1 AND l.type = 'mapLink';`, function (error, map, fields) {
              if (error) {  console.log("Error...", error); reject(error);  } 
                    resolve({contact: contact, map: map });
            });
          });
        }
        
        else if(that.page === 'Miracle' || that.page === 'Direction' | that.page === 'Prayer'){
          Query = `SELECT wc.id, wc.type, wc.title, wc.content, wc.date, wc.time, wc.location, wc.contact, wc.is_active, wc.created_at, wc.updated_at, i.id as image_id, i.image_name, l.id as link_id, l.website_link as link FROM website_content as wc LEFT JOIN images as i ON wc.id = i.module_id AND i.is_active = 1 LEFT JOIN links as l ON wc.id = l.module_id AND l.is_active = 1 WHERE wc.type = '${that.page}' AND wc.is_active = 1 ORDER BY wc.id DESC `;
          CountQuery = Query;
          if(that.pageNo > 0 ){
            Query = Query + ` LIMIT ${((that.pageNo * 9) - 9)},9 ;`;
          }
          
          
          connection.query(Query, function (error, rows, fields) {
            if (error) {  console.log("Error...", error); reject(error);  } 
            
            connection.query(CountQuery, function (error, totalRows, fields) {
              if (error) {  console.log("Error...", error); reject(error);  } 
              resolve({data: rows, counts: totalRows.length});
            });            
          });
        }

        else if(that.page === 'OBE'){
          connection.query(`SELECT wc.id, wc.content, i.image_name, l.website_link as link FROM website_content AS wc LEFT JOIN links as l ON wc.id = l.module_id AND l.is_active = 1 LEFT JOIN images as i ON wc.id = i.module_id AND i.is_active = 1 WHERE wc.type = 'OBE' AND wc.is_active = 1;`, function (error, rows, fields) {
            if (error) {  console.log("Error...", error); reject(error);  }
              resolve({data: rows });
          });
        }

        else if(that.page === 'Event'){
          Query = `SELECT wc.id, wc.type, wc.title, wc.content, wc.date, wc.time, wc.location, wc.contact, wc.is_active, wc.created_at, wc.updated_at, i.id as image_id, i.image_name, l.id as link_id, l.website_link as link FROM website_content as wc LEFT JOIN images as i ON wc.id = i.module_id AND i.is_active = 1 LEFT JOIN links as l ON wc.id = l.module_id AND l.is_active = 1 WHERE wc.type = '${that.page}' AND wc.date >= now() AND wc.is_active = 1 ORDER BY wc.id DESC `;
          CountQuery = Query;
          if(that.pageNo > 0 ){
            Query = Query + ` LIMIT ${((that.pageNo * 9) - 9)},9 ;`;
          }
          
          
          connection.query(Query, function (error, rows, fields) {
            if (error) {  console.log("Error...", error); reject(error);  } 
            
            connection.query(CountQuery, function (error, totalRows, fields) {
              if (error) {  console.log("Error...", error); reject(error);  } 
              resolve({data: rows, counts: totalRows.length});
            });            
          });
        }

        else if(that.page === 'DailyPrayer'){
          Query = `SELECT wc.id, wc.type, wc.title, wc.content, wc.date, wc.time, wc.location, wc.contact, wc.is_active, wc.created_at, wc.updated_at, i.id as image_id, i.image_name, l.id as link_id, l.website_link as link FROM website_content as wc LEFT JOIN images as i ON wc.id = i.module_id AND i.is_active = 1 LEFT JOIN links as l ON wc.id = l.module_id AND l.is_active = 1 WHERE wc.is_active = 1 AND wc.type = "Prayer" `;
          
          if(that.fetchBy === 'Id'){
            if(that.id > 0) {
              Query = Query + ` AND wc.id = ${that.id};`;
            }else {
              Query = Query + ` ORDER BY wc.id DESC LIMIT 1;`;
            }
          }else if(that.fetchBy === 'Date') {
              Query = Query + ` AND wc.date LIKE '${that.date}%' ORDER BY wc.id DESC;`;
          }
         
          connection.query(Query, function (error, rows, fields) {
            if (error) {  console.log("Error...", error); reject(error);  } 
              resolve({data: rows});
          });
        }

          connection.release();
          console.log('Process Complete %d', connection.threadId);
      });
    });
  } 

  

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

  AppModel.prototype.getPrayerList = function () {
    const that = this;
     return new Promise(function (resolve, reject) {
       connection.getConnection(function (error, connection) {
         if (error) {
           throw error;
         }
   
         connection.changeUser({database : dbName}); 
         let Query = `SELECT title, content, date FROM website_content WHERE type = 'Prayers' AND date = '${that.date}';`;
         connection.query(Query, function (error, rows, fields) { 
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
