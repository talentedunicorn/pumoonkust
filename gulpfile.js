/* =====================
	Pumoonkust gulpfile.
   ===================== */
'use strict';

var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var connect = require('gulp-connect');

gulp.task('sass', function() {
	var conf = {
		sourcemap: true,
	};
	
	return sass('./sass/*.scss', conf)
		.on('error', sass.logError)
		.pipe(gulp.dest('./css'));
});

// Connect 
gulp.task('connect', function() {
	connect.server({
		root: './',
		livereload: true,
	});
});

// Html
gulp.task('html', function() {
	gulp.src('./*.html')
		.pipe(connect.reload());
});

// Watch
gulp.task('watch', ['sass'], function() {
	gulp.watch('./sass/**/*.scss', ['sass']);
	gulp.watch(['./*.html'], ['html']);
});

// Default
gulp.task('default', ['connect', 'watch'], function() {
});
