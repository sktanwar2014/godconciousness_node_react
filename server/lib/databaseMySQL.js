const env = 'local';

let DbName = 'a1abilities';
let domainName = 'newgc.sargatechnology.com';

console.log('env...', env);

if (env === 'prod') {
  DbName = 'a1abilities';
  domainName = 'newgc.sargatechnology.com';
} else {  
  DbName = 'a1abilities'
  domainName = 'localhost:5000'
}

module.exports = { dbName: DbName, domainName: domainName, env: env };