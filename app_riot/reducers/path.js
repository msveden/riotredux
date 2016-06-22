var assign = require('object-assign');
var types = require('../constants/action-types');
var actions = require('../actions/path-actions');
var initialState = [];

module.exports = function(state, action) {
    state = state || initialState;
    switch (action.type) {
        case types.SET_PATH:
            return action.path.slice(0);
        default:
            return state;
    }
};