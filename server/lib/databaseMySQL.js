const env = 'local';

let DbName = 'connectiv_gc';
let domainName = 'http://gc.connectivitysoftwaresolutions.com';

const mailUser = 'sktanwar.2020@gmail.com';
const mailPassword = '8290447404sk';
const mailService = 'GMAIL';


console.log('env...', env);

if (env === 'prod') {
  DbName = 'connectiv_gc';
  domainName = 'http://gc.connectivitysoftwaresolutions.com';
} else {  
  DbName = 'godconsciousness'
  domainName = 'localhost:5000'
}

module.exports = { 
  dbName: DbName, 
  domainName: domainName, 
  env: env,
  mailUser: mailUser,
  mailPassword : mailPassword,
  mailService : mailService,
};