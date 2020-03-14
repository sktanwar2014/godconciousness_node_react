const env = 'local';

let DbName = 'sargatech_godconsciousness';
let domainName = 'newgc.sargatechnology.com';

console.log('env...', env);

if (env === 'prod') {
  DbName = 'sargatech_godconsciousness';
  domainName = 'newgc.sargatechnology.com';
} else {  
  DbName = 'godconsciousness'
  domainName = 'localhost:5000'
}

module.exports = { dbName: DbName, domainName: domainName, env: env };