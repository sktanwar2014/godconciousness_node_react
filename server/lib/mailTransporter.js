const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const {mailUser, mailPassword, mailService, domainName} = require('../lib/databaseMySQL.js');

const trans = nodemailer.createTransport(smtpTransport({
    service: mailService,
    tls: { rejectUnauthorized: false },
    auth: {
      user: mailUser,
      pass: mailPassword,
    }
}));

module.exports = {trans};