var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('serve', function() {
    connect.server({
        root: [__dirname],
        port: 7001,
        livereload: true
    });
});