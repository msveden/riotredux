
var redux = require('redux');
var modal = require('./modal');
var path = require('./path');
var examples = require('./examples');

var rootReducer = redux.combineReducers(
    {
        modal: modal,
        path: path,
        examples: examples
    }
);

module.exports = rootReducer;
