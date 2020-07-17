const env = 'local';

let DbName = 'godconsciousness';
let domainName = 'http://newgc.a1abilities.co.nz/';

const mailUser = 'sktanwar.2020@gmail.com';
const mailPassword = '8290447404sk';
const mailService = 'GMAIL';


console.log('env...', env);

if (env === 'prod') {
  DbName = 'godconsciousness';
  domainName = 'http://newgc.a1abilities.co.nz/';
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