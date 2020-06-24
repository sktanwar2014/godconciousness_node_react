const env = 'local';

let DbName = 'a1abilities';
let domainName = 'http://newgc.a1abilities.co.nz/';

console.log('env...', env);

if (env === 'prod') {
  DbName = 'a1abilities';
  domainName = 'http://newgc.a1abilities.co.nz/';
} else {  
  DbName = 'a1abilities'
  domainName = 'localhost:5000'
}

module.exports = { dbName: DbName, domainName: domainName, env: env };