var redux = require('redux');
var reducer = require('./reducers');

var _store = redux.createStore(reducer);

_store.observe = function(select, onChange) {
    var currentState;
    function handleChange() {        
        var nextState = select(_store.getState());
        if (nextState !== currentState) {
            var previousState = currentState;
            currentState = nextState;
            onChange(previousState, currentState);
        }
    }

    var unsubscribe = _store.subscribe(handleChange);
    handleChange();
    return unsubscribe;
}

module.exports = _store;


