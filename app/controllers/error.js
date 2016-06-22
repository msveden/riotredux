
var _shallShowError = false;

var handler = function(err, req, res, next) {
    if (_shallShowError) {
        res.status(err.status || 500);
        res.render('error', {
            message: _shallShowError ? err.message : '',
            error: _shallShowError ? err : {}
        });
    }
    else {
        res.sendStatus(err.status || 500);
    }
};

module.exports = function (shallShowError) {
    _shallShowError = shallShowError;
    return handler;
}