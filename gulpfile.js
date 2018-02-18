var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    return gulp.src('./src/development/sass/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/production/css'))
        .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function() {
    browserSync.init({
    server: './src'
    // proxy: 'localhost:11079'
    });

    gulp.watch('./src/development/sass/main.scss', ['sass']);
    gulp.watch('./src/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);