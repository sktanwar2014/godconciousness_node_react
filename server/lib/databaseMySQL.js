const env = 'local';
let DbName = 'GodConsciousness';
let domainName = 'localhost:5000';


console.log('env...', env);

if (env === 'prod') {
  DbName = 'GodConsciousness';
  domainName = ''
} else {  
  DbName = 'GodConsciousness'
  domainName = 'localhost:5000'
}

module.exports = { dbName: DbName, domainName: domainName, env: env };