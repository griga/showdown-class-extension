"use strict";

const gulp = require('gulp');
const jasmine = require('gulp-jasmine');
const del = require('del');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

gulp.task('clean', function () {
    return del(['dist'])
});

gulp.task('compress', function () {
    return gulp.src('src/main.js')
        .pipe(uglify())
        .pipe(rename('showdown-classify.min.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('dist', function () {
    return gulp.src('src/main.js')
        .pipe(rename('showdown-classify.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('test', function () {
    gulp.src('spec/test.js').pipe(jasmine()).on('error', swallowError)
});


gulp.task('watch', function () {
    return gulp.watch([
        'src/**/*.*',
        'spec/**/*.*'
    ], ['test'])
});

gulp.task('default', ['test', 'watch']);
gulp.task('build', ['clean', 'dist', 'compress']);


var swallowError = function (error) {
    console.log(error.toString());
    this.emit('end')
};