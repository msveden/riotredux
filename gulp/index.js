var gulp = require('gulp');

var tasks = [
    { name: 'clean-dist', depends: []},
    { name: 'clean-dist-tmp', depends: []},
    { name: 'clean-dist-libs', depends: []},
    { name: 'sass', depends: ['clean-style']},
    { name: 'minify-css', depends: ['clean-style', 'sass']},
    { name: 'uglify', depends: ['clean-dist', 'clean-dist-tmp']},
    { name: 'uglify', depends: ['clean-dist', 'clean-dist-tmp', 'browserify']},
    // { name: 'angular-templates', depends: ['clean-dist', 'clean-dist-tmp']},
    { name: 'browserify', depends: ['clean-dist', 'clean-dist-tmp', 'babel', 'riot']},
    { name: 'browserify-libs', depends: ['clean-dist-libs']},
    { name: 'riot', depends: ['clean-dist', 'clean-dist-tmp']},
    { name: 'babel', depends: ['clean-dist', 'clean-dist-tmp']},
    { name: 'copy-html', depends: ['clean-dist', 'clean-dist-tmp', 'uglify']},
    { name: 'copy-assets', depends: ['clean-dist']},
    { name: 'clean-style', depends: []}
];
 
module.exports = function() {
    tasks.forEach(function(task) {
        gulp.task(task.name, task.depends, require('./tasks/' + task.name));
    });
 
    return gulp;
};