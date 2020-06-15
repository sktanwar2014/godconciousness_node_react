const AppModel = require('../models/AppModels.js');
const Mailer = require('../models/Mailer.js');


const getTabRelatedList = async function (req, res, next) {
    try {
        console.log(req.body)
        const result = await new AppModel({type: req.body.type}).getTabRelatedList();
        console.log(result)
        res.send({ resultList: result });
    } catch (err) {
        next(err);
    }
}

const getContactInfo = async function (req, res, next) {
    try {
        const newActivity = new AppModel({});
        const result = await newActivity.getContactInfo();
        res.send({ result});    
        console.log(result)          
    } catch (err) {
        
        next(err);
    }
}

const getAbout = async function (req, res, next) {
    try {
        const newActivity = new AppModel({});
        const result = await newActivity.getAbout();
        res.send({ result});              
    } catch (err) {
        next(err);
    }
}

const sendMail = async function (req, res, next) {
    let params = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        message: req.body.message,
    }
    try {
        const mailer = new Mailer(params);
        const result = await mailer.sendMail();
        if(result !== undefined){
            res.send({sent : true});
        }else{
            res.send({sent : false});
        }
    } catch (err) {
        next(err);
    }
}


module.exports = {    
    // getprayersList : getprayersList,
    sendMail : sendMail,
    getContactInfo : getContactInfo,
    getAbout:getAbout,
    getTabRelatedList:getTabRelatedList,
};