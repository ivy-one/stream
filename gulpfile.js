'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var exec = require('gulp-exec');
const babel = require('gulp-babel');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('src/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('src/sass/**/*.sass', gulp.series('sass'));
});

gulp.task('slim', function(){
  return gulp.src('src/*slim')
  .pipe(exec('slimrb -e --compile <%= file.path %> > <%= file.path.replace(".slim", "") %>.html'))
});

gulp.task('slim:watch', function () {
  gulp.watch('src/*.slim', gulp.series('slim'));
});

gulp.task('babel', () =>
	gulp.src('src/es/pause.js')
		.pipe(babel({
			presets: ['@babel/preset-env']
		}))
		.pipe(gulp.dest('./js'))
);

gulp.task('babel:watch', function () {
  gulp.watch('src/es/**/*.js', gulp.series('babel'));
});

gulp.task('default', gulp.parallel(['sass:watch', 'slim:watch', 'babel:watch']));
