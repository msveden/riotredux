var types = require('../constants/action-types');

module.exports.setExamples = function(examples) {
    return {
        type: types.SET_EXAMPLES,
        examples: examples
    };
};
