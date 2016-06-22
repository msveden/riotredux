var types = require('../constants/action-types');

module.exports.open = function(modalId, data) {    
    return {
        type: types.OPEN_MODAL,
        modalId: modalId,
        data: data
    };
};

module.exports.close = function() {    
    return {
        type: types.CLOSE_MODAL
    };
};
