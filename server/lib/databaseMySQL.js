const env = 'local';

let DbName = 'a1abiliti_newgc';
let domainName = 'http://newgc.a1abilities.co.nz/';

const mailUser = 'sktanwar.2020@gmail.com';
const mailPassword = '8290447404sk';
const mailService = 'GMAIL';


console.log('env...', env);

if (env === 'prod') {
  DbName = 'a1abiliti_newgc';
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