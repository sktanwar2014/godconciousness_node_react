const AppModel = require('../models/AppModels.js');
const Mailer = require('../models/Mailer.js');

const getprayersList = async function (req, res, next) {
    const params = {
        date:req.body.date
    }
    try {
        const newActivity = new AppModel(params);
        const result = await newActivity.getprayersList();
        res.send({ result: result});              
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
    getprayersList : getprayersList,
    sendMail : sendMail,
};