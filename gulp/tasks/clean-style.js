var del = require('del');

module.exports = function () {
  return del(['dist_tmp/**/*.*css', 'dist/**/*.*css']);
};