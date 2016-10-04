var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var notify = require("gulp-notify");
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');


gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./assets/sass/**/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./assets/sass/**/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("./assets/css"))
        .pipe(notify("Sass is done!"))
        .pipe(browserSync.stream());
});

gulp.task('watch:sass', function() {
    
    gulp.watch("./assets/sass/**/*.scss", ['sass']);
});

gulp.task('default', ['serve']);
