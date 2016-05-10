"use strict";

const gulp = require('gulp');
const jasmine = require('gulp-jasmine');

gulp.task('test', function(){
    gulp.src('spec/test.js').pipe(jasmine()).on('error', swallowError)
});


gulp.task('watch', function(){
    return gulp.watch([
        'src/**/*.*',
        'spec/**/*.*'
    ],['test'])
});

gulp.task('default',['test', 'watch']);


var swallowError = function (error) {
    console.log(error.toString());
    this.emit('end')
};