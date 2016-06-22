var gulp = require('gulp');
require('./gulpfile');

console.log('Running gulp task all!');
gulp.start('all', function(){
    console.log('gulp done');
    require('./server.js');
});
