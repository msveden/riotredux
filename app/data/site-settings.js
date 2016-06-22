
var _siteSettings = {
    siteName: 'The Application'
};

module.exports.getCopy = function() {
    return JSON.parse(JSON.stringify(_siteSettings));
}

