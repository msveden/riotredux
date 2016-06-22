var gulp = require('gulp'),
    config = require('../config');

var sources = [
    config.clientDir + '/*.html'
];

module.exports = function() { 
    return gulp
        .src(sources)
        .pipe(gulp.dest('dist'))
};