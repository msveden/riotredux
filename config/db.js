
var path = require('path');
var parent = path.resolve('.');
var prefix = path.basename(parent);

function resolveConnectionString() {
    var host = process.env[prefix + '_DB'] || 'localhost';
    var port = process.env[prefix + '_DB_PORT'];
    var username = process.env[prefix + '_DB_USER'];
    var password = process.env[prefix + '_DB_PASS'];
    var db = process.env[prefix + '_DB_NAME'] || 'the_app';
    var result = '';
    if (username && password) {
        result += username + ':' + password + '@'; 
    }
    if (host) {
        result += host;
        if (port) {
            result += ':' + port
        }    
    }
    if (db) {
        if (host)  {
            result += '/';
        }
        result += db;
    }    
    return  result;
}

var config = {
	connectionString: resolveConnectionString(),
	collections: ['SiteSettings']
}

console.log('process environment variables prefix: ' + prefix);
console.log('using db connectionString: ' + config.connectionString);

module.exports = config;