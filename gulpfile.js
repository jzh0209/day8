var gulp = require('gulp');

var sass = require('gulp-sass');

var server = require('gulp-webserver');

gulp.task('server', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
})