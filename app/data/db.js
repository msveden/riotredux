var mongojs = require('mongojs');
var config = require('../../config/db');

var db = mongojs(config.connectionString, config.collections);

module.exports = function() {
	return db;
};

module.exports.ObjectId = function(id) {
    if (!id) {
        throw 'Invalid argument';
    }
    return mongojs.ObjectId(id);
}