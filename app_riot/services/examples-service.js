var http = require('./http-service');
var Promise = require('bluebird');
var store = require('../store');
var examplesActions = require('../actions/examples-actions');
var examplesService = require('./examples-service');

function loadExamples() {
    http.get('/api/examples')
    .then(function(result){
        store.dispatch(examplesActions.setExamples(result));
    })
    .catch(function(result){
        store.dispatch(examplesActions.setExamples(result));
    });
}

module.exports.loadExamples = loadExamples;
