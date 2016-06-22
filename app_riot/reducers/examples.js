var assign = require('object-assign');
var types = require('../constants/action-types');
var initialState = null;

module.exports = function(state, action) {
    state = state || initialState;
    switch (action.type) {
        case types.SET_EXAMPLES:
            if (action.examples === null) {
                return null;
            }
            return action.examples.slice(0);
        default:
            return state;
    }
};