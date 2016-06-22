var gulp = require('gulp'),
    sass = require('gulp-sass'),
    config = require('../config');

// module.exports = function () {
//   return gulp.src('app_client/sass/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('dist_tmp'));
// };

module.exports = function () {
  return gulp.src(config.clientDir + '/css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist_tmp'));
};

