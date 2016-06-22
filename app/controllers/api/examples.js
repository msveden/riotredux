
module.exports.get = function(req, res) {
    res.json([{ name: 'Example A' }, { name: 'Example B'}]);
};