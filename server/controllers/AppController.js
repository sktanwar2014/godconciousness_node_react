const AppModel = require('../models/AppModels.js');
const Mailer = require('../models/Mailer.js');


const fetchBannerImage = async function (req, res, next) {
    try {
        const result = await new AppModel({type: req.body.type}).fetchBannerImage();
        if(result){
            res.send(result[0]);
        }else{
            res.send({id: '', image_name: ''});
        }
    } catch (err) {
        next(err);
    }
}


const fetchHeaderFooterContent = async function (req, res, next) {
    try {
        const result = await new AppModel({}).fetchHeaderFooterContent();
        res.send(result);
    } catch (err) {
        next(err);
    }
}


const fetchPageData = async function (req, res, next) {
    const params = {
        page: req.body.page,
        pageNo : Number(req.body.pageNo),
        id : Number(req.body.id),
        fetchBy : req.body.fetchBy,
        date: req.body.date,
    }
    try {
        const result = await new AppModel(params).fetchPageData();
        res.send(result);
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

const getPrayerList = async function (req, res, next) {
    try {
        const newActivity = new AppModel({date: req.body.date});
        const result = await newActivity.getPrayerList();
        res.send({ prayerList: result});              
    } catch (err) {
        next(err);
    }
}


module.exports = {  
    fetchBannerImage: fetchBannerImage, 
    fetchHeaderFooterContent: fetchHeaderFooterContent,
    fetchPageData: fetchPageData,
    sendMail : sendMail,

    // getPrayerList : getPrayerList,    
    // getContactInfo : getContactInfo,
    // getAbout:getAbout,
    // getTabRelatedList:getTabRelatedList,
};