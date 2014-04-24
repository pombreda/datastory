var gulp = require('gulp'),
    coffee = require('gulp-coffee'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    sass = require('gulp-ruby-sass'),
    uglify = require('gulp-uglify');

var paths = {
    scripts: [
        'src/coffee/utils.coffee',
        'src/coffee/datastory.coffee'
    ],
    styles: ['src/**/*.sass'],
    data: ['src/**/*.json']
};

// Run dev server
gulp.task('connect', function() {
    connect.server({
        root: __dirname,
        port: 8080,
        livereload: true
    });
});


// Minify scripts and styles
gulp.task('minify', ['scripts'], function() {
    gulp.src('dist/js/datastory.js')
        .pipe(uglify())
        .pipe(concat('datastory.min.js'))
        .pipe(gulp.dest('dist/js'));
});

// Minify and copy scripts
gulp.task('scripts', function() {
    return gulp.src(paths.scripts)
        .pipe(coffee())
        .pipe(concat('datastory.js'))
        .pipe(gulp.dest('dist/js'));
});

// Compile and copy sass
gulp.task('styles', function () {
    return gulp.src(paths.styles)
        .pipe(sass())
        .pipe(concat('datastory.css'))
        .pipe(gulp.dest('dist/css'));
});

// Rerun task when a file changes
gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.styles, ['styles']);
});

// Build the JavaScript and CSS files
gulp.task('build', ['scripts', 'styles', 'minify']);

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['build', 'connect', 'watch']);