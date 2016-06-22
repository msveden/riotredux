var gulp = require('./gulp')(),
    config = require('./gulp/config'),
    watch = require('gulp-watch'),
    batch = require('gulp-batch');
    
gulp.task('default', [
    'sass', 
    'minify-css', 
    'babel', 
    'riot',
    'browserify',
    'uglify',
    'copy-html',
    'copy-assets',
    'libs'
    // ,'angular-templates'
]);

gulp.task('libs', [
    'browserify-libs'
]);

gulp.task('all', [
    'default', 
    'libs'
]);

gulp.task('style', [
    'sass', 
    'minify-css'
]);

gulp.task('watch', function () {
    watch(config.clientDir + '/**/*', batch(function (events, done) {
        gulp.start('default', done);
    }));
});

gulp.task('watch-style', function () {
    watch(config.clientDir + '/**/*.*css', batch(function (events, done) {
        gulp.start('style', done);
    }));
});