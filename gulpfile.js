'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var exec = require('gulp-exec');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', gulp.series('sass'));
});

gulp.task('slim', function(){
  return gulp.src('./*slim')
  .pipe(exec('slimrb -e --compile <%= file.path %> > <%= file.path %>.html'))
});

gulp.task('slim:watch', function () {
  gulp.watch('*.slim', gulp.series('slim'));
});

gulp.task('default', gulp.parallel(['sass:watch', 'slim:watch']));
