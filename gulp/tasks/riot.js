var gulp = require('gulp'),
    riot = require('gulp-riot'),
    config = require('../config');
module.exports = function() {
    return gulp.src(config.clientDir + '/**/*.html')
    .pipe(riot(
        {
            modular: true,
            ext: 'html'
        }))
    .pipe(gulp.dest('./dist_tmp'));
};