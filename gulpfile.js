'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');

gulp.task('sass', function() {
    return gulp.src('./scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./scss'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./scss/*.scss', ['sass']);
});

gulp.task('browser-sync', function() {
    var files = [
        './*.html',
        './scss/*.css',
        './*.js',
        './img/*.{png,jpg,gif}'
    ];

    browserSync.init(files, {
        server: {
            baseDir: './'
        }
    });
});

gulp.task('start', gulp.series('browser-sync', 'sass:watch'));