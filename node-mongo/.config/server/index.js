module.exports = (function(){
  const dev = require(__dirname + '/dev.json');
  const prod = require(__dirname + '/prod.json');
  return {
    development: dev,
    production: prod
  };
})();
