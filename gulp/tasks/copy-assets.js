var gulp = require('gulp'),
    config = require('../config');

var sources = [
    config.clientDir + '/assets/**/*.png',
    config.clientDir + '/assets/**/*.js',
    config.clientDir + '/assets/**/*.html',
    config.clientDir + '/assets/**/*.css'
];

module.exports = function() { 
    return gulp
        .src(sources, { base: config.clientDir + "/assets"})
        .pipe(gulp.dest('dist/assets'))
};