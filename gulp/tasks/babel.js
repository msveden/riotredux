var gulp = require('gulp'),
    config = require('../config'),
    babel = require('gulp-babel');
 
var sources = [
    config.clientDir + '/**/*.js'
];
module.exports = function() {
    return gulp.src(sources, { base: config.clientDir })
        .pipe(babel({
            presets: []
        }))
        .pipe(gulp.dest('dist_tmp'));
};