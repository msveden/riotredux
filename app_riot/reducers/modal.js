var assign = require('object-assign');
var types = require('../constants/action-types');
var _ = require('lodash');
var assign = require('object-assign');

var initialState = {};

module.exports = function(state, action) {
    state = state || initialState;
    switch (action.type) {
        case types.OPEN_MODAL:
            return assign({}, {}, { id: action.modalId, data: action.data });
        case types.CLOSE_MODAL:
            return {};
        default:
            return state;
    }
};