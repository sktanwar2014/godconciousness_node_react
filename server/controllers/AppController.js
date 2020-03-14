const AppModel = require('../models/AppModels.js');



const getprayersList = async function (req, res, next) {
    const params = {
        date:req.body.date
    }

    console.log(params);
    try {
        const newActivity = new AppModel(params);
        const result = await newActivity.getprayersList();
        res.send({ result: result});              
    } catch (err) {
        next(err);
    }
}

module.exports = {    
    getprayersList:getprayersList,
};