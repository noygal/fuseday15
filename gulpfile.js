var gulp = require('gulp');
var server = require('gulp-express');

gulp.task('server', function () {
    // Start the server at the beginning of the task
    server.run(['server.js']);

    // Restart the server when file changes
    gulp.watch(['./public/**/*.*'], server.notify);
});

gulp.task('default', ['server']);
