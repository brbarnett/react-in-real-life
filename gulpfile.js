var gulp = require('gulp');
var sass = require('gulp-sass');
var webpack = require('gulp-webpack');

var wpConfig = require('./webpack.config');

gulp.task('build', ['html', 'js']);

gulp.task('html', buildHtml);
gulp.task('js', buildJs);
gulp.task('css', buildCss);

gulp.task('watch', function () {
    // gulp.watch('src/**/*.html', ['html']);
    gulp.watch(['src/**/*.js'], ['js']);
});

function buildHtml() {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist/'));
}

function buildJs() {
    return gulp.src('src/index.js')
        .pipe(webpack(wpConfig))
        .pipe(gulp.dest('dist/'));
}

function buildCss() {
    return gulp.src('src/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/'));
}