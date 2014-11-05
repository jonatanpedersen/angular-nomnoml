var gulp = require('gulp');
var rimraf = require('gulp-rimraf');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('clean', function () {
    return gulp.src('dist/**/*', {read: false})
        .pipe(rimraf());
});

gulp.task('compress', function () {
    return gulp.src('src/*.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'))
});

gulp.task('default', ['clean'], function () {
    gulp.start('compress');
});