var types = require('../constants/action-types');

module.exports.setPath = function(path) {
    return {
        type: types.SET_PATH,
        path: path
    };
};
