const env = 'local';

let DbName = 'godconsciousness';
let domainName = 'http://newgc.a1abilities.co.nz/';

console.log('env...', env);

if (env === 'prod') {
  DbName = 'godconsciousness';
  domainName = 'http://newgc.a1abilities.co.nz/';
} else {  
  DbName = 'godconsciousness'
  domainName = 'localhost:5000'
}

module.exports = { dbName: DbName, domainName: domainName, env: env };